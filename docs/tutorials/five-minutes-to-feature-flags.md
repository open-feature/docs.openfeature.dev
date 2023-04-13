---
sidebar_position: 1
id: five-minutes-to-feature-flags
title: Five Minutes to Feature Flags
---
We’re going to add feature flagging to a Node service in under five minutes using OpenFeature, the open, vendor-agnostic feature flagging SDK.

We’ll be working with a simple [express][express] server, but if you're familiar with JavaScript and Node you should be able to follow along.

## Setup

Before we jump into the tutorial, let's quickly get everything setup. You'll need [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/) version 16 or newer. After that, run the following commands from your favorite terminal.

```bash
git clone https://github.com/open-feature/five-minutes-to-feature-flags.git && \
  cd five-minutes-to-feature-flags && \
  npm install
```

## Hello, world

Here’s the service we’ll be working on:

```js reference title="01_vanilla.js"
https://github.com/open-feature/five-minutes-to-feature-flags/blob/main/01_vanilla.js
```

Pretty much the most basic express server you can imagine - a single endpoint at `/` that returns a plaintext “Hello, world!” response.

Let's start the service by running `node 01_vanilla.js`. Now you can test to make sure it works:

```bash
$> curl http://localhost:3333
Hello, world!
```

Yep, looks good! Go ahead and stop the server using `Ctrl` + `C`.

## With cows, please

Let’s imagine that we’re adding a new, experimental feature to this hello world service. We’re going to upgrade the format of the server’s response, using [cowsay][cowsay]!

However, we’re not 100% sure that this cowsay formatting is going to work out, so for now we’ll protect it behind a conditional:

```js reference title="02_basic_flags.js"
https://github.com/open-feature/five-minutes-to-feature-flags/blob/main/02_basic_flags.js
```

Now let's start the server with our basic flag configuration by running `node 02_basic_flags.js`. By default, the service continues to work exactly as it did before, but if we change `withCow` to `true` then the response comes in an exciting new format:

:::tip

A server restart is required for any changes to be applied.

:::

```bash
$> curl http://localhost:3333
 _______________
< Hello, world! >
 ---------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## The crudest flag

That `withCow` boolean and its accompanying conditional check are a very basic feature flag - they let us hide an experimental or unfinished feature, but also easily switch the feature on while we’re building and testing it.

## Introducing OpenFeature

Managing these flags by changing hardcoded constants gets old fast though. A team that uses feature flags in any significant way soon reaches for a feature flagging framework. Let’s move in that direction by updating the service to use OpenFeature.

```js reference title="03_openfeature.js"
https://github.com/open-feature/five-minutes-to-feature-flags/blob/main/03_openfeature.js
```

We’ve imported the `@openfeature/js-sdk` NPM module, and used it to create an OpenFeature client called `featureFlags`. We then call `getBooleanValue` on that client to find out if the `with-cows` feature flag is true or false. Depending on what we get back we either show the new cow-based output, or the traditional plaintext format.

Start the server with `node 03_openfeature.js`.

```bash
$> curl http://localhost:3333
Hello, world!
```

:::note

When we call `getBooleanValue` we also provide a default value of false. Since we haven’t configured the OpenFeature SDK with a _feature flag provider_ yet, it will always return that default value.

:::

## Configuring an OpenFeature Provider

Without a feature flagging provider OpenFeature is pretty pointless - it’ll just return default values. Instead we want to connect our OpenFeature SDK to a full-fledged feature flagging system - a commercial product, an open-source system, or perhaps a custom internal system - so that it can provide flagging decisions from that system.

Connecting OpenFeature to one of these backends is very straightforward, but it does require that we have an actual flagging framework set up. For now, let’s just configure a really, really simple provider that doesn’t need a backend:

```js reference title="04_openfeature_with_provider.js"
https://github.com/open-feature/five-minutes-to-feature-flags/blob/main/04_openfeature_with_provider.js
```

This minimalist provider is exactly that - you give it a hard-coded set of feature flag values, and it provides those values via the OpenFeature SDK.

In our `FLAG_CONFIGURATION` above we’ve hard-coded that `with-cows` feature flag to true, which means that conditional predicate in our express app will now evaluate to true, which means that our service will now start providing bovine output. Start the server with `node 04_openfeature_with_provider.js` and test it out.

```bash
$> curl http://localhost:3333
 _______________
< Hello, world! >
 ---------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

If we changed that `with-cows` value to false, we’d see the more boring response:

```bash
$> curl http://localhost:3333
Hello, world!
```

## Moving to a full feature-flagging system

We’ve gotten started with OpenFeature using a very simple but extremely limited provider. The beauty of OpenFeature is that we can transition to a real feature-flagging system when we’re ready, without any change to how we evaluate flags. It’s as simple as configuring a different provider.

**For example:**

### CloudBees

```js
import { CloudbeesProvider } from 'cloudbees-openfeature-provider-node';

const appKey = '[YOUR_APP_KEY]';
OpenFeature.setProvider(await CloudbeesProvider.build(appKey));
```

### flagd

```js
import { FlagdProvider } from '@openfeature/flagd-provider';

OpenFeature.setProvider(
  new FlagdProvider({
    host: '[FLAGD_HOST]',
    port: 8013,
  })
);
```

### LaunchDarkly

```js
import { init } from 'launchdarkly-node-server-sdk';
import { LaunchDarklyProvider } from '@launchdarkly/openfeature-node-server';

const ldClient = init('[YOUR-SDK-KEY]');
await ldClient.waitForInitialization();
OpenFeature.setProvider(new LaunchDarklyProvider(ldClient));
```

### Split

```js
import { SplitFactory } from '@splitsoftware/splitio';
import { OpenFeatureSplitProvider } from '@splitsoftware/openfeature-js-split-provider';

const splitClient = SplitFactory({ core: { authorizationKey: '[YOUR_AUTH_KEY]' } }).client();
OpenFeature.setProvider(new OpenFeatureSplitProvider({ splitClient }));
```

We can get started with feature flags with low investment and low risk, and once we’re ready, it’s just a few lines of code to transition to a full-featured, scalable backend.

## Next steps

To learn more about OpenFeature, check out the documentation [here](/docs/reference/intro). Specifically, you can read more about how the [evaluation API works](/docs/reference/concepts/evaluation-api/), what [tech stacks are supported](/docs/reference/technologies/), or read [more tutorials](/docs/category/getting-started/) about using OpenFeature in a variety of tech stacks.

We strive to provide a welcoming, open community. If you have any questions - or just want to nerd out about feature flags - the `#OpenFeature` channel in the [CNCF Slack][cncf-slack] is the place for you.

[express]: https://expressjs.com/
[cowsay]: https://www.npmjs.com/package/cowsay
[cncf-slack]: https://slack.cncf.io/
