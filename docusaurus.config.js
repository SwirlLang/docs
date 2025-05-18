// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Swirl Docs",
    tagline: "Swirl Programming Language",
    favicon:
        "favicon.png",

    // Set the production url of your site here
    url: "https://swirl-lang.netlify.app",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "SwirlLang", // Usually your GitHub org/user name.
    projectName: "website", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/SwirlLang/swirl-docs-v2/tree/main",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/SwirlLang/swirl-docs-v2/tree/main",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: "https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png",
            colorMode: {
                defaultMode: "dark",
            },
            navbar: {
                title: "Swirl",
                logo: {
                    alt: "Swirl logo",
                    src: "https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png",
                    srcDark:
                        "https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo-transparent.png",
                    style: { borderRadius: "1rem" },
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Docs",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/SwirlLang/swirl",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Swirl",
                        items: [
                            {
                                html: "A modern, beginner-friendly language that combines power, performance, and simplicity.",
                            },
                        ],
                    },
                    {
                        title: "Info",
                        items: [
                            {
                                label: "Download",
                                href: "https://swirl-lang.netlify.app/download",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/SwirlLang/swirl",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/SwirlLang",
                            },
                        ],
                    },
                ],
                copyright: `Made by <a href="https://github.com/MrinmoyHaloi" target="_blank">Mrinmoy Haloi</a>`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: [
                    "bash"
                ]
            },
        }),
};

export default config;
