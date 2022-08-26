import { faJava } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';


export class JavaFeatures
 extends React.Component {
  override render() {
    return <OpenFeatureTechnologiesPage 
      technology="Java"
      iconDefinition={ faJava }
      sdkRepoLink={{
        title: 'Github repository',
        href: 'https://github.com/open-feature/java-sdk'
      }}
      artifact={{
        title: 'Maven Central repository',
        href: 'https://search.maven.org/artifact/dev.openfeature/javasdk/',
        instruction: `
<dependency>
  <groupId>dev.openfeature</groupId>
  <artifactId>javasdk</artifactId>
  <version>\${openfeature.version}</version>
</dependency>
        `,
        codeBlockLanguage: 'xml'
      }}
      providers={[]}
      hooks={[]}
      />;
  }
}
