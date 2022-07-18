// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenFeature',
  tagline: 'An open standard for feature flags',
  url: 'https://docs.openfeature.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-light.svg',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/open-feature/docs.openfeature.dev/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/open-feature/docs.openfeature.dev/edit/main/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('@fortawesome/fontawesome-svg-core/styles.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'OpenFeature Logo',
          src: 'img/logo-dark.svg',
          srcDark: 'img/logo-light.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'reference/intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'getting-started/overview',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'tutorials/overview',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'doc',
            docId: 'explanations/overview',
            position: 'left',
            label: 'Explanations',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/open-feature',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sections',
            items: [
              {
                label: 'Docs',
                to: 'docs/reference/intro',
              },
              {
                label: 'Getting Started',
                to: 'docs/getting-started/overview',
              },
              {
                label: 'Tutorials',
                to: 'docs/tutorials/overview',
              },
              {
                label: 'Explanations',
                to: 'docs/explanations/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/openfeature',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/open-feature',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} OpenFeature | Documentation Distributed under CC BY 4.0 | All Rights Reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['typescript', 'go', 'java']
      },
    }),
};

module.exports = config;
