import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "Reboot-Codes";
const projectName = "oxifluxion";

const config: Config = {
  title: 'OxiFluxion',
  tagline: 'A precision floating math library for Rust and an accompanying program to use it. ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://oxifluxion.reboot-codes.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: 'warn',
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
            `https://github.com/${organizationName}/${projectName}/tree/main/docs`,
        },
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
      title: 'OxiFluxion',
      logo: {
        alt: 'OxiFluxion Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'fluxionSidebar',
          position: 'left',
          label: 'Fluxion',
        },
        {
          type: 'docSidebar',
          sidebarId: 'oxiMathSidebar',
          position: 'left',
          label: 'OxiMath',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'Source',
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
              label: 'Fluxion',
              to: '/docs/fluxion/intro',
            },
            {
              label: 'OxiMath',
              to: '/docs/oximath/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Source',
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Reboot/Fitz.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
