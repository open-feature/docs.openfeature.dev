import { faGolang, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import CSharpNoFillSvg from '@site/static/img/c-sharp-no-fill.svg';
import React from 'react';
import { OpenFeatureComponentTable } from '../OpenFeatureComponentTable/';

// high level component for SDK table rendering, so we can avoid putting too much TS in .mdx files.
export class SdkTable extends React.Component {
  override render() {
    return (
      <OpenFeatureComponentTable
        items={[
          {
            href: 'https://github.com/open-feature/java-sdk',
            iconDefinition: faJava,
            title: 'Java',
            description: 'OpenFeature SDK for Java',
          },
          {
            href: 'https://github.com/open-feature/node-sdk',
            iconDefinition: faNodeJs,
            title: 'Node.JS',
            description: 'OpenFeature SDK for Node.JS',
          },
          {
            href: 'https://github.com/open-feature/dotnet-sdk',
            title: '.NET',
            description: 'OpenFeature SDK for .NET',
            svg: CSharpNoFillSvg,
          },
          {
            href: 'https://github.com/open-feature/golang-sdk',
            iconDefinition: faGolang,
            title: 'Go',
            description: 'OpenFeature SDK for Golang',
          },
        ]}
      />
    );
  }
}
