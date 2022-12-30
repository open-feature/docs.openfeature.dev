// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const externalContentPlugin = require('./src/plugins/external-content');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenFeature',
  tagline: 'An open standard for feature flags',
  url: 'https://docs.openfeature.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      },
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon-precomposed.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicons/favicon-light.svg",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicons/favicon.ico",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/favicons/site.webmanifest",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#ffffff",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-config",
        content: "/favicons/browserconfig.xml",
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          editUrl: (params) => {
            if (params.docPath.startsWith('specification/')) {
              return `https://github.com/open-feature/spec/edit/main/${params.docPath}`;
            }
            return `https://github.com/open-feature/docs.openfeature.dev/edit/main/docs/${params.docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/open-feature/docs.openfeature.dev/edit/main/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('@fortawesome/fontawesome-svg-core/styles.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    [
      externalContentPlugin,
      {
        name: 'spec',
        sourcePath: 'specification/specification',
        destinationPath: 'specification',
      },
    ],
    'docusaurus-plugin-sass',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/opengraph.jpg',
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
            docId: 'specification/intro',
            position: 'left',
            label: 'Specification',
          },
          {
            type: 'doc',
            docId: '/category/getting-started',
            position: 'left',
            label: 'Tutorials',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/open-feature',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub organization',
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
                label: 'Specification',
                to: 'docs/specification',
              },
              {
                label: 'Tutorials',
                to: 'docs/category/getting-started',
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
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/openfeature/',
              },
              {
                label: 'Join the Community',
                href: 'https://github.com/open-feature/community/'
              }
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
              {
                label: 'Website',
                href: 'https://openfeature.dev/'
              },
              {
                html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} OpenFeature is a Cloud Native Computing Foundation sandbox project | Documentation Distributed under CC BY 4.0 | All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ['typescript', 'go', 'java', 'csharp', 'powershell', 'php'],
      },
    }),
};

module.exports = config;
