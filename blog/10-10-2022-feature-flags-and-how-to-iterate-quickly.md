---
slug: feature-flag-how-to-iterate-quickly
title: Feature Flags and How to Iterate Quickly
authors: [thomaspoignant]
tags: [blog]
unlisted: false
---

# Feature Flags and How to Iterate Quickly
## Why your first PR for a large feature should be its feature flag

*Feature flags* (also known as *feature toggles* or *feature flipping*) is a technique in development that allows you to enable or disable a feature without deploying any codes.

The logic behind this is to deploy a conditional feature you can activate only for certain groups of users at a time. If the flag is `on`, the code is executed; if `off`, the code is skipped.

This is a good practice in dev ops that allows you to test your feature directly in production.

## How It Works

This is really simple: You have a central configuration file or system which stores your flag.

When you deploy a new feature in your code, you add an interrogation to this central configuration to know if this feature should be allowed for this specific user. If yes, the flag is `on` and your user can see the feature. If `off`, the user uses the application without the new feature.

There are a ton of frameworks and products to help you do this.

One thing you should never forget is to remove your flag when you want to enable your feature for everybody.

## Feature Flag Use Cases

There are several use cases for using feature flags. I will try to give you some of them to help you understand why this is an awesome practice.

### Merge your code fast, deploy quickly

Yes, you can merge your code faster when you’re using flags because you don’t have to wait until your code is fully perfect before shipping it to production.  
An MVP can be merged because this code will be skipped until you set your flag to `on`.

So your release cycle will look like this:

![](https://miro.medium.com/max/4800/0*9--_4uwR2RV9Orja.png)

As you can see, you can iterate over your feature to make it perfect, and you deploy small changes, which is safer. Feature flags decouple feature lifecycle management from code deployment, freeing up the engineering team to work on other tasks.

### Test in production

Sometimes you don’t have all the data to test in your no-prod environment *(even if you should always test in a non prod env)*. With feature flags, you activate your flag only for your QA team (or your product manager) so they can test the feature in your production with real data.

This minimizes the risk because the new feature is here only for a small subset of your users, so it doesn’t change the way the application works for other users.

The last thing is that you don’t need to be an engineer to enable/disable a feature, so your feature workflow is not blocked by your dev resources and can be managed by your product team.

### A/B testing

Developers can implement [A/B tests](https://en.wikipedia.org/wiki/A/B_testing) using feature flags for a segment of users to allow you to see how the two versions perform against each other.

It allows you to target specific users and to give the feature only to this population.

### Progressive deployment

One other great thing about feature flags is that to progressively deploy, you can roll out your feature to, let’s say, 10% of your users and see what happens. If everything is fine, you can increase the number step by step until 100% of your users are using the new feature.

Each time you increase the percentage of usage, you should monitor your feature and check that everything works as expected.

### Beta version

Sometimes a client can churn because your product is missing something, but you are already working on it.

In that case, feature flags can help you to give them early access to your feature — and help them see that you’re working on their needs.

The other great thing is that you will have early feedback, and we all know that early feedback costs less than later feedback.

### Fast rollbacks

Enabling or disabling a feature using feature flags is as easy as toggling it on or off, or editing a config file vs. having to re-deploy and having to go through a lengthy code push.

If you find a bug in your feature, you just have to put your flag to off and the code is immediately not available. After that, you can take your time to correct your bug and deploy the fix.

## Conclusion

As we have seen, there are a lot of use cases where feature flags can be your best friend. After using a feature flag, you’ll see that it allows you to iterate over your features and get quick feedback, which allows you to be more productive and to focus on what matters.


_This story was originally published in this [article](https://betterprogramming.pub/feature-flags-and-how-to-iterate-quickly-7e3371b9986)_.
