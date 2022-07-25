---
sidebar_position: 1
id: intro
---

# Welcome to OpenFeature!

OpenFeature is an open standard for feature flagging, created to support a robust feature flag ecosystem using cloud native technologies.

## What are feature flags?

Feature flags allow application behavior to be altered without a deployment of new code. In the most basic case, a feature flag can return a value (e.g. a boolean) that controls which code path is executed based on the configured value of the flag in the _flag management system_. The value of the flag is evaluated at runtime, meaning that the behavior of the application can be adjusted without any code changes. This can be used to decouple the release of new features from deployment.

## How is this different than static configuration?

Feature flags are dynamic; they are evaluated at runtime. This has a number of benefits beyond static configuration (i.e. environment variables or `.properties` files). They can be modified in near-realtime, but additionally, they can leverage runtime information during flag evaluation. Arbitrary contextual data (_evaluation context_) relevant to the application (i.e. IP address, timezone, user-identifier) can be used in _targeting rules_ to allow access to functionality, perform A/B testing, and perform progressive releases of new features. This decouples _feature-visibility logic_ from application logic, and allows feature-visibility logic to be centralized, shared, and easily managed.

## How does OpenFeature fit in?

OpenFeature seeks to provide a simple, consistent, and powerful API for developers to use feature flagging in their applications. To accomplish this, the OpenFeature SDK defines a number of flexible abstractions.

### Evaluation API

The [_evaluation API_](./evaluation-api/) is the aspect of OpenFeature that the _application author_ interacts with. It allows developers to evaluate feature flags, and use the resulting values to impact control flow or application characteristics. The evaluation API provides a framework that allows for customization of behavior and integration with various tools.

### Hooks

_Hooks_ are a mechanism that allow for the addition of arbitrary behavior at well-defined points of the _flag evaluation life-cycle_. Use cases include validation of the resolve flag value, modifying or adding data to the evaluation context, logging, telemetry, and tracking.

### Evaluation Context

The _evaluation context_ is a container for arbitrary contextual data that can be used as a basis for dynamic evaluation. Static data such as the host or an identifier for the application can be configured globally. Dynamic evaluation context, such as the IP address of the client in a web application, can be implicitly propagated or explicitly passed to during flag evaluation, and can be merged with static values.

### Providers

_Providers_ are the "translation layer" between the evaluation API and the flag management system in use. Providers are responsible for mapping the arguments supplied to the evaluation API to their equivalent representation in the associated flag management system. Providers might wrap a vendor SDK, call a bespoke flag evaluation REST API, or even parse some locally stored file to resolve flag values.
