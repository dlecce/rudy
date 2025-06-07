import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cura di Rudy',
  tagline: 'Informazioni utili',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rudy/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dlecce', // Usually your GitHub org/user name.
  projectName: 'rudy', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Cura di Rudy',
      items: [
        { label: '📅 Calendario', to: '/#calendario' },
        { label: '🥣 Cibo', to: '/#cibo' },
        { label: '💧 Acqua', to: '/#acqua' },
        { label: '🧻 Lettiera', to: '/#lettiera' },
        { label: '🧼 Pelo', to: '/#pelo' },
        { label: '🌬 Aria & Caldo', to: '/#aria-caldo' },
        { label: '🧶 Giochi', to: '/#giochi' },
        { label: '📶 Wi-Fi', to: '/#wifi' },
      ],
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
