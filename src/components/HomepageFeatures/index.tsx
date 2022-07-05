/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple API',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Tabs>
        <TabItem value="ts" label="TypeScript">
          <div>
            {/* prettier-ignore */}
            <CodeBlock className="language-ts">{`
const value = client
  .getBooleanValue('new-look', false );
            `}</CodeBlock>
          </div>
        </TabItem>
        <TabItem value="java" label="Java">
          {/* prettier-ignore */}
          <CodeBlock className="language-java">{`
Boolean value = client
  .getBooleanValue("new-look", false);
          `}</CodeBlock>
        </TabItem>
        <TabItem value="go" label="Go">
          {/* prettier-ignore */}
          <CodeBlock className="language-go">{`
value, err := client
  .GetBooleanValue("new-look", true, nil)
          `}</CodeBlock>
        </TabItem>
      </Tabs>
    ),
  },
  {
    title: 'Easy integration',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Tabs>
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
      </Tabs>
    ),
  },
  {
    title: 'Powerful extensions',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Tabs>
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
      </Tabs>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
