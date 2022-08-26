import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import OtelNoFill from '@site/static/img/otel-no-fill.svg';

export class JavascriptFeatures
 extends React.Component {
  override render() {
    return <OpenFeatureTechnologiesPage 
      technology="JavaScript"
      iconDefinition={ faSquareJs }
      sdkRepoLink={{
        title: 'Github repository',
        href: 'https://github.com/open-feature/node-sdk'
      }}
      artifact={{
        title: 'NPM',
        href: 'https://www.npmjs.com/package/@openfeature/nodejs-sdk',
        instruction: 'npm install @openfeature/nodejs-sdk',
        codeBlockLanguage: 'bash'
      }}
      providers={[
        {
          title: 'flagd Provider',
          description: 'A provider for flagd',
          href: 'https://github.com/open-feature/node-sdk-contrib/tree/main/libs/providers/flagd',
          svg: FlagdSvg
        }
      ]}
      hooks={[
        {
          title: 'OpenTelemetry Hook',
          description: 'A hook for OpenTelemetry integration',
          href: 'https://github.com/open-feature/node-sdk-contrib/tree/main/libs/hooks/open-telemetry',
          svg: OtelNoFill
        }
      ]}
      />;
  }
}
