import { faGolang, faJava, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import CSharpNoFillSvg from '@site/static/img/c-sharp-no-fill.svg';
import React from 'react';
import { OpenFeatureComponentTable } from '../custom/OpenFeatureComponentTable';

// high level component for SDK table rendering, so we can avoid putting too much TS in .mdx files.
export class TechnologiesTable extends React.Component {
  override render() {
    return (
      <OpenFeatureComponentTable
        items={[
          {
            href: '/docs/reference/technologies/java',
            iconDefinition: faJava,
            title: 'Java',
            description: 'SDK and components for Java',
          },
          {
            href: '/docs/reference/technologies/javascript',
            iconDefinition: faSquareJs,
            title: 'JavaScript',
            description: 'SDK and components for JavaScript',
          },
          {
            href: '/docs/reference/technologies/dotnet',
            title: '.NET',
            description: 'SDK and components for .NET',
            svg: CSharpNoFillSvg,
          },
          {
            href: '/docs/reference/technologies/go',
            iconDefinition: faGolang,
            title: 'Go',
            description: 'SDK and components for Go',
          },
        ]}
      />
    );
  }
}
