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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: 'doc',
      label: 'Documentation Overview',
      id: 'doc-overview'
    },
   {
      type: 'category',
      label: 'Community Rules',
      collapsible: true,
      collapsed: false,
      items: [
        'community-rules/discord-rules',
        'community-rules/server-rules',
      ],
    },
    {
      type: 'category',
      label: 'Server Docs',
      collapsible: true,
      collapsed: true,
      items: [
        'server-docs/proximity-chat',
      ],
    },
  ],
};

module.exports = sidebars;
