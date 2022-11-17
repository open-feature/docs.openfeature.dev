import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Started with the OpenFeature Java SDK and Spring Boot

## Introduction

This walk-through teaches you the basics of using OpenFeature in Java on top of Spring Boot Web application.

You'll learn how to:

- Integrate OpenFeature Java SDK
- Install and configure an OpenFeature provider
- Perform basic feature flagging

## Requirements

This walk-through assumes that:

- You have a basic knowledge of Java and Spring Boot
- You have Java 8 or later
- You have Docker installed and running on the host system

## Walk-through

### Step 1: Create a Spring Boot Web application

To get started, visit [Spring Initializer](https://start.spring.io/). This website allows you to download a pre-configured
Spring boot application. 

For our use case, add **Spring Web** from dependencies section and set project metadata to your desired values.
Download the application using **GENERATE** button. Extract the archive and open it in your favourite editor.

### Step 2: Add dependencies

Based on the selected build system for Spring Boot application, add OpenFeature Java SDK and flagd provider dependencies
to existing dependency management configuration. 

Below examples show dependencies for Maven and Gradle and contains the latest 
versions at the time of writing this walk-through.

<Tabs groupId="dependency">
<TabItem value="maven" label="Apache Maven">

```xml
<dependency>
    <groupId>dev.openfeature</groupId>
    <artifactId>sdk</artifactId>
    <version>1.0.0</version>
</dependency>
<dependency>
    <groupId>dev.openfeature.contrib.providers</groupId>
    <artifactId>flagd</artifactId>
    <version>0.5.1</version>
</dependency>
```

</TabItem>
<TabItem value="groovy" label="Gradle Groovy DSL">

```groovy
implementation 'dev.openfeature:sdk:1.0.0'
implementation 'dev.openfeature.contrib.providers:flagd:0.5.1'
```
</TabItem>
</Tabs>

### Step 3: Add code

Our simple web server contains a single endpoint `/hello`. Let's add required codes to get this up and running with
recommended best practices. 

Please note that you may have your own package names and package naming in sample codes will require alterations.

`OpenFeatureAPI` is the main access point to OpenFeature SDK. This object is designed to act as a singleton. Hence, let's 
define a simple bean configuration class `OpenFeatureBeans`. This definition allows us to dependency inject `OpenFeatureAPI` 
singleton to desired Spring components.

```java
package demo;
import dev.openfeature.contrib.providers.flagd.FlagdProvider;
import dev.openfeature.sdk.OpenFeatureAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenFeatureBeans {

    @Bean
    public OpenFeatureAPI OpenFeatureAPI() {
        final OpenFeatureAPI openFeatureAPI = OpenFeatureAPI.getInstance();
        
        // Use flagd as the OpenFeature provider and use default configurations
        openFeatureAPI.setProvider(new FlagdProvider());

        return openFeatureAPI;
    }
}
```

Next, we can add our REST endpoint definition with dependency injection for `OpenFeatureAPI` instance,

```java
package demo;
import dev.openfeature.sdk.Client;
import dev.openfeature.sdk.OpenFeatureAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestHello {
    private final OpenFeatureAPI openFeatureAPI;

    @Autowired
    public RestHello(OpenFeatureAPI OFApi) {
        this.openFeatureAPI = OFApi;
    }
    
    @GetMapping("/hello")
    public String getHello() {
        final Client client = openFeatureAPI.getClient();

        // Evaluate welcome-message feature flag
        if (client.getBooleanValue("welcome-message", false)) {
            return "Hello, welcome to website.!";
        }

        return "Hello.!";
    }
}
```

At this point, we are ready to run the initial version of our application.

### Step 4: Run the initial application

Let's compile and run the application.

```shell
./gradlew clean build
java -jar build/libs/javaDemo-0.0.1-SNAPSHOT.jar
```

> Note that you may have a different `.jar` name based on your build configurations.

Now you can visit the url [http://localhost:8080/hello](http://localhost:8080/hello) and observe the message **Hello.!**.

At this point, we are falling back to default response as flagd SDK cannot connect to any feature flag provider. Next, let's 
configure and run flagd provider.

### Step 5: Configure and run FlagD

Create a new file named `flags.json` and add the following JSON. Notice that there's a flag called `welcome-message` which matches the flag
key defined in [step 3](#step-3-add-code). The `welcome-message` flag has `on` and `off` variants that return `true` and `false` respectively.
The state property controls whether the feature flag is active or not. Finally, the defaultVariant property controls the variant that should be returned. 
In this case, the defaultVariant is `off`, therefore the value `false` would be returned.

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

> NOTE: This configuration is specific for flagd and vary across other providers.

Next, pull the latest flagd image,

```shell
docker pull ghcr.io/open-feature/flagd:latest
```

With the flagd configuration and image in place, start flagd service with the following docker command.

```sh
docker run -p 8013:8013 -v $(pwd)/:/etc/flagd/ -it ghcr.io/open-feature/flagd:latest start --uri /etc/flagd/flags.json
```

### Step 7: Rerun application

Let's rerun our Java Sprint Boot application,

```shell
java -jar build/libs/javaDemo-0.0.1-SNAPSHOT.jar
```

> Note that you may have a different `.jar` name based on your build configurations.

Revisit the endpoint [http://localhost:8080/hello](http://localhost:8080/hello) and you will see the same value.

Now let's change the feature flag in our `flags.json`, making `defaultVariant` to `on`

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

Revisit the endpoint [http://localhost:8080/hello](http://localhost:8080/hello) and you will be greeted with `Hello, welcome to website.!`

## Conclusion

This walk-through introduced you to the OpenFeature Java SDK and how it can be easily integrate into well known frameworks
such as Spring Boot. It covered how a provider can be configured to perform the flag evaluation and introduced basic feature 
flagging concepts. It also showcased how feature flags can be updated at runtime, without requiring a coding change and a redeployment.
