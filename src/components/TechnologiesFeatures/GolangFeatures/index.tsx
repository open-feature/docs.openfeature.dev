import { faGolang } from '@fortawesome/free-brands-svg-icons';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';


export class GolangFeatures
 extends React.Component {
  override render() {
    return <OpenFeatureTechnologiesPage 
      technology="Go"
      iconDefinition={ faGolang }
      sdkRepoLink={{
        title: 'Github repository',
        href: 'https://github.com/open-feature/golang-sdk'
      }}
      artifact={{
        title: 'Go Package',
        href: 'https://pkg.go.dev/github.com/open-feature/golang-sdk',
        instruction: 'go get github.com/open-feature/golang-sdk',
        codeBlockLanguage: 'bash'
      }}
      providers={[
        {
          title: 'flagd Provider',
          description: 'A provider for flagd',
          href: 'https://github.com/open-feature/golang-sdk-contrib/tree/main/providers/flagd',
          svg: FlagdSvg
        }
      ]}
      hooks={[]}
      />;
  }
}
