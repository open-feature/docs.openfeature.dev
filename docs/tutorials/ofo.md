---
sidebar_position: 2
id: ofo
title: Cloud native flags with the OpenFeature Operator
---

# Cloud native feature-flagging with the OpenFeature Operator

In the following tutorial, we'll see how to leverage _flagd_ and the OpenFeature Operator to enable cloud-native, self-hosted feature flags in your Kubernetes cluster. [flagd](https://github.com/open-feature/flagd) is a "feature flag daemon with a Unix philosophy". Put another way, it's a small, self-contained binary that evaluates feature flags, uses standard interfaces, and runs just about anywhere. It can be deployed in a central location serving multiple clients or embedded into a unit of deployment (such as a pod in Kubernetes). The [OpenFeature Operator](https://github.com/open-feature/open-feature-operator) is a K8s-flavored solution for easily adding flagd to any relevant workloads. It parses Kubernetes spec files and adds flagd and associated objects to the workloads based on annotations and custom resource definitions it understands.

## Let's do it!

### Prerequisites

- If you don't have access to an existing K8s cluster, we recommend you install [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) for this tutorial. _kind_ is is similar to minikube (another solution for running a cluster locally you may be familiar with) but supports more than one node, so it makes for a slightly more realistic experience.
  - If using kind, you'll also need this cluster spec file: [kind-cluster.yaml](@site/static/samples/kind-cluster.yaml), which defines a 3-node cluster with an forwarded containerPort
- the file defining our demo deployment, service, and CRD: [end-to-end.yaml](https://raw.githubusercontent.com/open-feature/playground/main/config/k8s/end-to-end.yaml) (more on this later).
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [k9s](https://k9scli.io/) (optional, if you'd like to inspect your cluster visually)

### Let's see the code!

<!-- TODO: add/remove this based on PR feedback -->
Should we include this? or is it too much?

### Show me the commands!

#### Build our cluster with kind

OK, let's get our cluster up and running! If you already have a K8s cluster, you can skip to [Install cert-manager](#install-cert-manager).

First, create our cluster using the `kind-cluster.yaml` file:
```shell
kind create cluster --config kind-cluster.yaml
```
This might take a minute or two.

#### Install cert-manager

Great! Next, because our operator makes use of webhooks, we need some certificate infrastructure in our cluster.
If your cluster already has cert manager, or you're using another solution for certificate management, you can skip to [Create Namespace](#create-namespace).

Install cert-manager, and wait for it to be ready: 
```shell
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.9.1/cert-manager.yaml && \
kubectl wait --timeout=60s --for condition=Available=True deploy --all -n 'cert-manager'
```

#### Create namespace

Next, we need to create a namespace for the operator and our workload: 
```shell
kubectl create namespace open-feature-operator-system
```

#### Install OpenFeature operator certificate

Now let's install the Openfeature operator certificate: 
```shell
kubectl apply -f https://github.com/open-feature/open-feature-operator/releases/download/v0.2.5/certificate.yaml
```

#### Install OpenFeature operator

And finally, let's install the operator itself:
```shell
kubectl apply -f https://github.com/open-feature/open-feature-operator/releases/download/v0.2.5/release.yaml && \
kubectl wait --timeout=60s --for condition=Available=True deploy --all -n 'open-feature-operator-system'
```

#### Deploy our workload

Now that the operator is ready to go, we can deploy our workload:

```shell
kubectl apply -f end-to-end.yaml && \
kubectl wait --timeout=60s deployment --for condition=Available=True -l 'app=open-feature-demo'
```

Now you should see our fictional app at http://localhost:30000

If you're using `k9s` or some other means of visualization, your cluster should look something like this:

![k9s](@site/static/img/tutorials/k9s.png)

### Experiment with OpenFeature

For this demo, we get flag definitions from the custom resource definition you applied to K8s above (`end-to-end.yaml`).
You can modify the flag values in the `featureFlagSpec` and reapply the CRD to see the changes.
This file also contains service and deployment definitions, but these need not be modified as part of this demo.
You may be interested the `openfeature.dev*` annotations though, which the OpenFeature operator uses to detect which workloads require flagd.

Let's get started learning how OpenFeature is helping Fib3r manage this landing page!

The company has been in the process of changing the name of our app, but legal hasn't quite finished the process yet.
Here, we've defined a simple feature flag that can be use to update the name instantly without redeploying our application.
Change the `"defaultVariant"` of the feature flag `new-welcome-message"` to `"on"` in the `featureFlagSpec`, then redeploy the change with:

```shell
kubectl apply -f end-to-end.yaml
```

Great! Now let's help the design team experiment with new color palette. Let's change our landing page's color.
Change the `"defaultVariant"` of the `"hex-color"` and use `kubectl` to apply the change again.

Flag evaluations can take into account contextual information about the user, application, or action. The `"fib-algo"` flag returns a different result if our email ends with `"@faas.com"`. Let's run the fibonacci calculator once as a customer (without being logged in). Then login (use any email ending in `...@faas.com`) and observe the impact. This effect is driven by the rule defined in the `featureFlagSpec`. Feel free to experiment with your own flag values and rules!

### Cleaning up

If you used a kind cluster, you can clean everything up by running:
```shell
kind delete cluster
```