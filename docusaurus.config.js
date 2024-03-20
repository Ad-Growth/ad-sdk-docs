// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AdGrowth - Adserver SDK",
  tagline: "Mobile advertisement SDK docs",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://ad-growth.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ad-sdk-docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Ad-Growth", // Usually your GitHub org/user name.
  projectName: "ad-sdk-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ad-growth/ad-sdk-docs/tree/main/",
          lastVersion: "1.1.x",
          versions: {
            "1.1.x": {
              label: "1.1.x (Latest)",
              path: "",
            },
            "1.0.x": {
              label: "1.0.x",
              path: "1.0.x",
            },
            current: {
              label: "Next",
              path: "next",
            },
          },
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/ad-growth/ad-sdk-docs/tree/main/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      customFields: {
        currentVersion: "1.1.0", // Defina a versão atual
      },
      image: "img/social-card.jpg",
      navbar: {
        title: "AdGrowth - Adserver SDK",
        logo: {
          alt: "AdGrowth Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "getting_started",
            position: "left",
            label: "Docs",
          },
          { to: "/docs/usage", label: "Usage", position: "left" },
          { to: "/docs/category/api", label: "API", position: "left" },
          {
            type: "docsVersionDropdown",
            position: "right",
            // dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/ad-growth",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/getting_started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/adgrowth-ad-sdk",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/adgrowth-ad-sdk",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/adgrowth-ad-sdk",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ad-growth",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AdGrowth Ad SDK.`,
      },
      prism: {
        additionalLanguages: ["java", "kotlin","csharp","gdscript", "swift", "gradle"],

        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        contextualSearch: true,
      },
    }),
};

module.exports = config;
