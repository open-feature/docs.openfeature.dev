---
sidebar_position: 1
id: intro
title: Introduction
---

# What is OpenFeature?

OpenFeature is a vendor-neutral, open-source standard API and SDK for feature flagging.

OpenFeature is an open standard for feature flagging, created to support a robust feature flag ecosystem using cloud native technologies.

## What are feature flags?

Feature flags allow application behavior to be altered without a deployment of new code. In the most basic case, a feature flag can return a value (e.g. a boolean) that controls which code path is executed based on the configured value of the flag in the _flag management system_. The value of the flag is evaluated at runtime, meaning that the behavior of the application can be adjusted without any code changes. This can be used to decouple the release of new features from deployment.

## How is this different than static configuration?

Feature flags are dynamic; they are evaluated at runtime. This has a number of benefits beyond static configuration (i.e. environment variables or `.properties` files). They can be modified in near-realtime, but additionally, they can leverage runtime information during flag evaluation. Arbitrary contextual data (_evaluation context_) relevant to the application (i.e. IP address, timezone, user-identifier) can be used in _targeting rules_ to allow access to functionality, perform A/B testing, and perform progressive releases of new features. This decouples _feature-visibility logic_ from application logic, and allows feature-visibility logic to be centralized, shared, and easily managed.
