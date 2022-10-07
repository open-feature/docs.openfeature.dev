import { faGolang } from '@fortawesome/free-brands-svg-icons';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';

export class GoFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology="Go"
        iconDefinition={faGolang}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/go-sdk',
        }}
        artifact={{
          title: 'Go Package',
          href: 'https://pkg.go.dev/github.com/open-feature/go-sdk',
          instruction: 'go get github.com/open-feature/go-sdk',
          codeBlockLanguage: 'bash',
        }}
        providers={[
          {
            title: 'Cloudbees Provider',
            description: 'The official Cloudbees provider for OpenFeature',
            href: 'https://github.com/rollout/cloudbees-openfeature-provider-go',
            svg: CloudbeesSvg,
          },
          {
            title: 'flagd Provider',
            description: 'A provider for flagd',
            href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/flagd',
            svg: FlagdSvg,
          },
        ]}
        hooks={[]}
      />
    );
  }
}
