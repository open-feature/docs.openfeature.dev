import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';

export class WebFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology="the web"
        iconDefinition={faSquareJs}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/js-sdk',
        }}
        artifact={{
          title: 'NPM',
          href: 'https://www.npmjs.com/package/@openfeature/js-sdk',
          instruction: 'npm install @openfeature/js-sdk',
          codeBlockLanguage: 'bash',
        }}
        providers={[
          {
            title: 'CloudBees Provider',
            description: 'The official CloudBees browser provider for OpenFeature',
            href: 'https://github.com/rollout/cloudbees-openfeature-provider-browser',
            svg: CloudbeesSvg,
            vendorOfficial: true
          },
        ]}
        hooks={[]}
      />
    );
  }
}
