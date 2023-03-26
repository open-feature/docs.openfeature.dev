---
slug: 'feature-flags-if-statements'
title: 'Specification hardening and 1.0 SDKs'
date: 2023-03-27
authors: [agardnerit]
description: 'Feature Flags are Just if Statements, Right?'
keywords: [feature flags, openfeature]
tags: [feature flags]
draft: true
---

Most feature flag explainers begin by explaining that feature flags are glorified if statements.
While that’s true (to a point), feature flags wouldn’t be as versatile or as popular as they are, if that’s all they were. Indeed, you wouldn’t need a feature flag – you could easily achieve the same thing with an environment variable.

<!--truncate-->

<img src={require('@site/static/img/blog/feature-flag-if-statements/feature-flag-if.png').default} />

In code, the above would look like this:

```shell
if isPremiumMember {
  return v2
} else {
  return v1
}
```

Now try modelling this in code:

- If user is premium and located in Europe = v2 (purple)
- If user is premium and located in the US = v3 (red)
- If user is premium and located in Australia = v4 (orange)
- Everyone else gets v1 (green)

That’s 2 variables. Imagine how many variations a real system has. Now imagine trying to update these conditions in real time, without a redeployment.

<img src={require('@site/static/img/blog/feature-flag-if-statements/feature-flag-context.png').default} />

The real power of feature flags:

- They can be as simple or as complex as you like (this makes getting started easy with plenty of room to grow and expand)
- Separation of concerns: Allows you to deploy without releasing (place all new features behind flags and disable them).
- Shortcut to continuous delivery: If you can deploy anything at any time with zero risk, why not do it?
- Separation of responsibilities: Product managers take responsibility of feature flags, leaving DevOps teams to deal with their area of responsibility.

## So, are Feature Flags if Statements?

No, feature flagging is so much more powerful and dynamic that environment variables or if statements. But if you’re already using if statements, you already have enough knowledge to take your environment variables and if statements to the next level with feature flags.

If you’re stuck on the environment variable + if statement metaphor, feature flags are a very complex if statement that you can **target**, **update**, **toggle** and **gain observability over**, in **real time** without a **re-deployment**.

## Where Do I Start?

Want to learn more about feature flagging? OpenFeature is the open-source standard for feature flagging that is tightly integrated with OpenTelemetry. [Learn about techniques and tools to achieve zero-lock in, vendor-neutral feature flagging](https://openfeature.dev).
