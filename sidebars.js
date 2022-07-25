/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Docs',
      link: {type: 'doc', id: 'reference/intro'},
      collapsible: false,
      items: ['reference/evaluation-api/evaluation-api', 'reference/using-open-feature-with-your-flag-system/implement-a-provider'],
    },
  ],
  'getting-started': [
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'getting-started/overview'},
      collapsible: false,
      items: [],
    },
  ],
  tutorials: [
    {
      type: 'category',
      label: 'Tutorials',
      link: {type: 'doc', id: 'tutorials/overview'},
      collapsible: false,
      items: [],
    },
  ],
  explanations: [
    {
      type: 'category',
      label: 'Explanations',
      link: {type: 'doc', id: 'explanations/overview'},
      collapsible: false,
      items: ['explanations/operator'],
    },
  ],
};


module.exports = sidebars;
