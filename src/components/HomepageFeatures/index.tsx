/* eslint-disable @typescript-eslint/no-var-requires */
import { faBolt, faGears, faMugHot, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  iconDefinition?: IconDefinition;
  description: JSX.Element;
};

const featureList: FeatureItem[] = [
  {
    title: 'Simple API',
    iconDefinition: faMugHot,
    description: (
      <Tabs groupId="code">
        <TabItem value="ts" label="TypeScript">
          <div>
            {/* prettier-ignore */}
            <CodeBlock className="language-ts">{`
import {
  openFeature
} from '@openfeature/nodejs-sdk'

const client = openfeature.getClient('my-client);

const value = client
  .getBooleanValue('new-look', false );
            `}</CodeBlock>
          </div>
        </TabItem>
        <TabItem value="java" label="Java">
          {/* prettier-ignore */}
          <CodeBlock className="language-java">{`
import dev.openfeature.javasdk.OpenFeatureAPI;

OpenFeatureAPI api = OpenFeatureAPI.getInstance();
Client client = api.getClient();

Boolean value = client
  .getBooleanValue("new-look", false);
          `}</CodeBlock>
        </TabItem>
        <TabItem value="go" label="Go">
          {/* prettier-ignore */}
          <CodeBlock className="language-go">{`
import (
	"github.com/open-feature/golang-sdk"
)

client := openfeature.GetClient("my-client")

value, err := client
  .GetBooleanValue("new-look", true, nil)
          `}</CodeBlock>
        </TabItem>
        <TabItem value="csharp" label="C#">
          {/* prettier-ignore */}
          <CodeBlock className="language-csharp">{`
using OpenFeature.SDK;

var client = OpenFeature.Instance.GetClient("my-client");

var value = await client.GetBooleanValue("new-look", false);
          `}</CodeBlock>
        </TabItem>
      </Tabs>
    ),
  },
  {
    title: 'Flexible integration',
    iconDefinition: faGears,
    description: (
      <Tabs groupId="code">
        <TabItem value="ts" label="TypeScript">
          <div>
            {/* prettier-ignore */}
            <CodeBlock className="language-ts">{`
class MyFlagProvider implements Provider {
  //...
  resolveBooleanEvaluation(
    flagKey: string,
    defaultValue: boolean,
    context: Context,
    options: FlagEvaluationOptions | undefined
  ): Promise<ResolutionDetails<boolean>> {
    // your implementation
  }
  //...
}
            `}</CodeBlock>
          </div>
        </TabItem>
        <TabItem value="java" label="Java">
          {/* prettier-ignore */}
          <CodeBlock className="language-java">{`
class MyFlagProvider implements Provider {
  //...
  @Override
  public ProviderEvaluation<Boolean> getBooleanEvaluation(
    String flagKey,
    Boolean defaultValue,
    EvaluationContext ctx,
    FlagEvaluationOptions options) {
      // your implementation
  }
  //...
}
          `}</CodeBlock>
        </TabItem>
        <TabItem value="go" label="Go">
          {/* prettier-ignore */}
          <CodeBlock className="language-go">{`
type MyFlagProvider struct {}
//...
func (p MyFlagProvider) GetBooleanEvaluation(
  flag string,
  defaultValue bool,
  evalCtx EvaluationContext,
  options ...EvaluationOption) BoolResolutionDetail {
    // your implementation
}
//...
          `}</CodeBlock>
        </TabItem>
        <TabItem value="csharp" label="C#">
          {/* prettier-ignore */}
          <CodeBlock className="language-csharp">{`
public class MyFlagProvider : IFeatureProvider
{
  //...
  public Task<ResolutionDetails<bool>> ResolveBooleanValue(
    string flagKey,
    bool defaultValue,
    EvaluationContext? context = null,
    FlagEvaluationOptions? config = null)
  {
      // your implementation
  }
  //...
}
          `}</CodeBlock>
        </TabItem>
      </Tabs>
    ),
  },
  {
    title: 'Powerful extensions',
    iconDefinition: faBolt,
    description: (
      <Tabs groupId="code">
        <TabItem value="ts" label="TypeScript">
          <div>
            {/* prettier-ignore */}
            <CodeBlock className="language-ts">{`
class MyHook implements Hook {
  before(
    hookContext: BeforeHookContext,
    hookHints?: HookHints) {
    // do something before flag evaluation
  }

  after(
    hookContext: Readonly<HookContext<boolean>>,
    evaluationDetails: EvaluationDetails<boolean>,
    hookHints?: HookHints
  ) {
    // do something after flag evaluation
  }
}
            `}</CodeBlock>
          </div>
        </TabItem>
        <TabItem value="java" label="Java">
          {/* prettier-ignore */}
          <CodeBlock className="language-java">{`
class MyHook implements Hook {
  Optional<EvaluationContext> before(
    HookContext<T> ctx,
    Map<String, Object>
    hints) {
    // do something before flag evaluation
  }

  void after(
    HookContext<T> ctx,
    FlagEvaluationDetails<T> details,
    Map<String,
    Object> hints) {
    // do something after flag evaluation
  }
}
          `}</CodeBlock>
        </TabItem>
        <TabItem value="go" label="Go">
          {/* prettier-ignore */}
          <CodeBlock className="language-go">{`
type MyHook struct {}
//...
func (h MyHook) Before(
  ctx HookContext,
  details FlagEvaluationDetails,
  hints interface{}) error {
    // do something before flag evaluation
}

func (h MyHook) After(
  ctx HookContext,
  details FlagEvaluationDetails,
  hints interface{}) (EvaluationContext, error) {
    // do something after flag evaluation
}
//...
          `}</CodeBlock>
        </TabItem>
        <TabItem value="csharp" label="C#">
          {/* prettier-ignore */}
          <CodeBlock className="language-csharp">{`
public class MyHook : Hook
{
  //...
  public override Task<EvaluationContext> Before<T>(
    HookContext<T> context,
    IReadOnlyDictionary<string, object> hints = null)
  {
    // do something before flag evaluation
  }

  public override Task After<T>(
    HookContext<T> context,
    FlagEvaluationDetails<T> details,
    IReadOnlyDictionary<string, object> hints = null)
  {
    // do something after flag evaluation
  }
  //...
}
          `}</CodeBlock>
        </TabItem>
      </Tabs>
    ),
  },
];

function Feature({ title, iconDefinition, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <FontAwesomeIcon size={'3x'} icon={iconDefinition} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
