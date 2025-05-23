import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// Main docs sidebar
const tutorialSidebar: SidebarsConfig = {
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
};

const weeksSidebar: SidebarsConfig = {
  weeksSidebar: [{type: 'autogenerated', dirName: '.'}],
};

const peopleSidebar: SidebarsConfig = {
  peopleSidebar: [{type: 'autogenerated', dirName: '.'}],
};

const projectsSidebar: SidebarsConfig = {
  projectsSidebar: [{type: 'autogenerated', dirName: '.'}],
};

const toolsSidebar: SidebarsConfig = {
  toolsSidebar: [{type: 'autogenerated', dirName: '.'}],
};

const maneuversSidebar: SidebarsConfig = {
  maneuversSidebar: [{type: 'autogenerated', dirName: '.'}],
};

export default {
  ...tutorialSidebar,
  ...weeksSidebar,
  ...peopleSidebar,
  ...projectsSidebar,
  ...toolsSidebar,
  ...maneuversSidebar,
};
