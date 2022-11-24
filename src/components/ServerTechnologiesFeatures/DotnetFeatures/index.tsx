import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import CSharpNoFillSvg from '@site/static/img/c-sharp-no-fill.svg';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import LaunchDarklySvg from '@site/static/img/launchdarkly-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';

export class DotnetFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology=".NET"
        svg={CSharpNoFillSvg}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/dotnet-sdk',
        }}
        artifact={{
          title: 'NuGet package',
          href: 'https://www.nuget.org/packages/OpenFeature',
          instruction: 'dotnet add package OpenFeature',
          codeBlockLanguage: 'powershell',
        }}
        providers={[
          {
            title: 'CloudBees Provider',
            description: 'The official CloudBees provider for OpenFeature',
            href: 'https://github.com/rollout/cloudbees-openfeature-provider-dotnet',
            svg: CloudbeesSvg,
            vendorOfficial: true
          },
          {
            title: 'LaunchDarkly Provider',
            description: 'The official LaunchDarkly provider for OpenFeature',
            href: 'https://github.com/launchdarkly/openfeature-dotnet-server',
            svg: LaunchDarklySvg,
            vendorOfficial: true
          },
          {
            title: 'Split Provider',
            description: 'The official Split provider for OpenFeature',
            href: 'https://github.com/splitio/split-openfeature-provider-dotnet',
            svg: SplitSvg,
            vendorOfficial: true
          },
        ]}
        hooks={[]}
      />
    );
  }
}
