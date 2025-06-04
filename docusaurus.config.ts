import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BOK Summer 2025',
  tagline: 'All the docs from the summer.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Human-written blog
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'human-blog',
        routeBasePath: 'human-blog', // URL: /human-blog
        path: './_human-blog',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    // AI-generated blog
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'ai-blog',
        routeBasePath: 'ai-blog', // URL: /ai-blog
        path: './_ai-blog',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'weeks',
        path: '_weeks',
        routeBasePath: 'weeks',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'people',
        path: '_people',
        routeBasePath: 'people',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: '_projects',
        routeBasePath: 'projects',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tools',
        path: '_tools',
        routeBasePath: 'tools',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'maneuvers',
        path: '_maneuvers',
        routeBasePath: 'maneuvers',
        sidebarPath: './sidebars.ts',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'weeksSidebar',
          docsPluginId: 'weeks',
          position: 'left',
          label: 'Weeks',
        },
        {
          type: 'docSidebar',
          sidebarId: 'peopleSidebar',
          docsPluginId: 'people',
          position: 'left',
          label: 'People',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          docsPluginId: 'projects',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'toolsSidebar',
          docsPluginId: 'tools',
          position: 'left',
          label: 'Tools',
        },
        {
          type: 'docSidebar',
          sidebarId: 'maneuversSidebar',
          docsPluginId: 'maneuvers',
          position: 'left',
          label: 'Maneuvers',
        },
        {to: '/human-blog', label: 'Human Blog', position: 'left'},
        {to: '/ai-blog', label: 'AI Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Human Blog',
              to: '/human-blog',
            },
            {
              label: 'AI Blog',
              to: '/ai-blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
