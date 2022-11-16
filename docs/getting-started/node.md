# Get Started with the OpenFeature JavaScript SDK on Node.js

## Introduction

This walk-through teaches you the basics of using OpenFeature in JavaScript. You'll learn how to:

- Install the JS SDK
- Install and configure a provider
- Perform basic feature flagging

## Requirements

This walk-through assumes that:

- You have a basic understanding of JavaScript and Node.js. If not, please review the [Introduction to Node.js][learn-nodejs] tutorial maintained by the Node.js team.
- You have Node 16 or later. The latest version of Node can be found [here][nodejs-download].
- You have Docker installed and running on the host system. The latest version of Docker can be found [here][docker-download].

## Walk-through

### Step 1: Create a new Node.js project

To get started, create a new folder, bootstrap the project, and install the dependencies. This can be done by running the following commands.

```sh
mkdir openfeature-js-intro
cd openfeature-js-intro
npm init -y
npm install express
npm i -D typescript @types/express @types/node ts-node
npx tsc --init
```

### Step 2: Create an Express app

Create a new file named `index.ts` and include the following code.

```ts
import express from 'express';

const app = express();
const port = 8080;

app.get('/', (_, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
```

### Step 3: Add the OpenFeature SDK

Using NPM, install the OpenFeature SDK using the following command.

```sh
npm install @openfeature/js-sdk
```

Update `index.ts` to import the SDK.

```diff
import express from "express";
+ import { OpenFeature } from "@openfeature/js-sdk";

const app = express();
```

Once you've imported `OpenFeature`, a new client can be created.

```diff
const port = 8080;

+ const client = OpenFeature.getClient();

app.get("/", (_, res) => {
```

The client can now be used to get a feature flag value. In this case, we'll get a `boolean` value using the `welcome-message` [flag key][flag-key].

The second argument is the fallback value, which is returned if there's abnormal behavior.

```diff
- app.get("/", (_, res) => {
+ app.get("/", async (_, res) => {
+   const showWelcomeMessage = await client.getBooleanValue("welcome-message", false);
+   if (showWelcomeMessage) {
+     res.send("Express + TypeScript + OpenFeature Server");
+   } else {
-   res.send("Express + TypeScript Server");
+     res.send("Express + TypeScript Server");
+   }
});

```

### Step 4: Run the application

Let's start the app and see it in action. Run the following command to start the server.

```sh
npx ts-node index.ts
```

Open your favorite browser and navigate to http://localhost:8080. If all goes as planned, you should see "Express + TypeScript Server" in glorious monochrome.

"Why I'm I seeing that value?", you may ask. Well, it's because a provider hasn't been configured yet. By default, OpenFeature will return the default value in that situation. In the next step, you'll learn how to add a provider.

> NOTE: You should stop the app by using the keyboard short `ctrl + c` or `⌘ + c` before moving on to the next step.

### Step 5: Add a provider to OpenFeature

[Providers][provider-overview] are an important concept in OpenFeature because they're responsible for the flag evaluation itself. As we saw in the previous step, OpenFeature without a provider always returns the default value. If we want to actually perform feature flagging, we'll need to register a provider.

There are [many providers available][js-providers] for popular feature flag management platforms and open source projects. You can also build your own provider if your favorite tool isn't supported yet.

In this example, we'll use the `flagd provider` because it's a simple, self-contained feature flagging tool that's built and maintained by the OpenFeature team.

Using NPM, install the `flagd provider` using the following command:

```sh
npm install @openfeature/flagd-provider
```

Now, update `index.ts` to import the `flagd provider`.

```diff
import { OpenFeature } from "@openfeature/js-sdk";
+ import { FlagdProvider } from "@openfeature/flagd-provider";

const app: Express = express();
```

Finally, we need to register the provider with OpenFeature.

```diff
const port = 8080;

+ OpenFeature.setProvider(new FlagdProvider());
const client = OpenFeature.getClient();
```

### Step 6: Configure FlagD

Now that the application is ready, FlagD needs to be setup.

Create a new file named `flags.json` and add the following JSON. Notice that there's a flag called `welcome-message` which matches the flag key defined in [step 4](#step-4-add-the-openfeature-sdk). The `welcome-message` flag has `on` and `off` variants that return `true` and `false` respectively. The state property controls whether the feature flag is active or not. Finally, the defaultVariant property controls the variant that should be returned. In this case, the defaultVariant is `off`, therefore the value `false` would be returned.

```json
{
  "$schema": "https://raw.githubusercontent.com/open-feature/schemas/main/json/flagd-definitions.json",
  "flags": {
    "welcome-message": {
      "variants": {
        "on": true,
        "off": false
      },
      "state": "ENABLED",
      "defaultVariant": "off"
    }
  }
}
```

> NOTE: This configuration is specific for FlagD and vary across providers.

With the flag configuration in place, start FlagD with the following command.

```sh
docker run -p 8013:8013 -v $(pwd)/:/etc/flagd/ -it ghcr.io/open-feature/flagd:latest start --uri /etc/flagd/flags.json
```

### Step 7: Rerun the application

Now that everything is in place, let's start the app again.

```sh
npx ts-node index.ts
```

Open your favorite browser and navigating to http://localhost:8080 should show the same value as before. This difference is now the feature flag value can be changed at runtime! Go ahead, update the `flag.json` by changing the defaultVariant value to `on`.

```diff
{
  "$schema": "https://raw.githubusercontent.com/open-feature/schemas/main/json/flagd-definitions.json",
  "flags": {
    "welcome-message": {
      "variants": {
        "on": true,
        "off": false
      },
      "state": "ENABLED",
-      "defaultVariant": "off"
+      "defaultVariant": "on"
    }
  }
}
```

Save the changes to `flag.json` and refresh the browser tab. You should now be greeted with `Express + TypeScript + OpenFeature Server`.

## Conclusion

This walk-through introduced you to the OpenFeature JS SDK. It covered how a provider can be configured to perform the flag evaluation and introduced basic feature flagging concepts. It also showcased how feature flags can be updated at runtime, without requiring a redeployment.

[learn-nodejs]: https://nodejs.dev/en/learn/
[nodejs-download]: https://nodejs.org/en/download/
[docker-download]: https://docs.docker.com/engine/install/
[flag-key]: https://docs.openfeature.dev/docs/specification/glossary#flag-key
[error-code]: https://docs.openfeature.dev/docs/specification/types#error-code
[provider-overview]: https://docs.openfeature.dev/docs/reference/concepts/provider/
[js-providers]: https://docs.openfeature.dev/docs/reference/technologies/server/javascript/
[flagd-config]: https://github.com/open-feature/flagd/wiki/Feature-Flag-Configurations
[typedoc]: https://open-feature.github.io/js-sdk/
