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
  OpenFeature
} from '@openfeature/js-sdk'

const client = OpenFeature.getClient('my-client');

const value = client
  .getBooleanValue('new-look', false);
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
          <a href="https://javadoc.io/doc/dev.openfeature/javasdk">Detailed documentation</a>
        </TabItem>
        <TabItem value="go" label="Go">
          {/* prettier-ignore */}
          <CodeBlock className="language-go">{`
import (
    "context"
	"github.com/open-feature/go-sdk/pkg/openfeature"
)

client := openfeature.NewClient("my-client")

value, err := client.
  BooleanValue(
    context.Background(), "new-look", true,
    openfeature.EvaluationContext{},
  )
          `}</CodeBlock>
        </TabItem>
        <TabItem value="csharp" label="C#">
          {/* prettier-ignore */}
          <CodeBlock className="language-csharp">{`
using OpenFeature;

var client = Api.Instance.GetClient("my-client");

var value = await client.GetBooleanValue("new-look", false);
          `}</CodeBlock>
        </TabItem>
        <TabItem value="php" label="PHP">
          {/* prettier-ignore */}
          <CodeBlock className="language-php">{`
use OpenFeature\\OpenFeatureAPI;

$api = OpenFeatureAPI::getInstance();
$client = $api->getClient("my-client");

$value = $client->getBooleanValue('new-look', true);
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
    EvaluationContext ctx) {
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
func (p MyFlagProvider) BooleanEvaluation(
  flag string,
  defaultValue bool,
  evalCtx openfeature.EvaluationContext,
) BoolResolutionDetail {
    // your implementation
}
//...
          `}</CodeBlock>
        </TabItem>
        <TabItem value="csharp" label="C#">
          {/* prettier-ignore */}
          <CodeBlock className="language-csharp">{`
public class MyFlagProvider : FeatureProvider
{
  //...
  public Task<ResolutionDetails<bool>> ResolveBooleanValue(
    string flagKey,
    bool defaultValue,
    EvaluationContext? context = null)
  {
      // your implementation
  }
  //...
}
          `}</CodeBlock>
        </TabItem>
        <TabItem value="php" label="PHP">
          {/* prettier-ignore */}
          <CodeBlock className="language-php">{`
class MyFlagProvider implements Provider
{
  //...
  public function resolveBooleanValue(
    string $flagKey,
    bool $defaultValue,
    ?EvaluationContext $context = null,
  ): ResolutionDetails
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
    hookContext: Readonly<HookContext<FlagValue>>,
    evaluationDetails: EvaluationDetails<FlagValue>,
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
  ctx openfeature.HookContext,
  hints openfeature.HookHints,
) (*EvaluationContext, error) {
    // do something before flag evaluation
}

func (h MyHook) After(
  ctx openfeature.HookContext,
  details openfeature.EvaluationDetails,
  hints openfeature.HookHints,
) error {
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
        <TabItem value="php" label="PHP">
          {/* prettier-ignore */}
          <CodeBlock className="language-php">{`
class MyHook implements Hook
{
  //...
  public function before(
    HookContext $context,
    HookHints $hints,
  ): ?EvaluationContext
  {
    // do something before flag evaluation
  }

  public function after(
    HookContext $context,
    ResolutionDetails $details,
    HookHints $hints,
  ): void
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
