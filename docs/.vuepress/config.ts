import { defaultTheme, defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";
import { EnglishSidebar } from "../../i18n/en-US/sidebar";
import { TurkishSidebar } from "../../i18n/tr-TR/sidebar";
import { EnglishNavbar } from "../../i18n/en-US/navbar";
import { TurkishNavbar } from "../../i18n/tr-TR/navbar";

export default defineUserConfig({
  lang: "en-US",
  title: "IstanbulJS",
  description:
    "The Progressive, Flexible and Friendly Full Stack NodeJS Framework",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#f08080" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#48cae4" }],
    ["meta", { name: "theme-color", content: "#1a1a1f" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "NodeJS, TypeScript, Http, Websocket, JavaScript, Istanbul, Framework, nodejs framework, istanbul framework, istanbul javascript",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content:
          "IstanbulJS | The Progressive, Flexible and Friendly Full Stack NodeJS Framework",
      },
    ],
    [
      "meta",
      {
        property: "og:image:type",
        content: "image/png",
      },
    ],
    [
      "meta",
      {
        property: "og:image:width",
        content: "500",
      },
    ],
    [
      "meta",
      {
        property: "og:image:height",
        content: "500",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://istanbuljs.org/logo.png",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://istanbuljs.org/",
      },
    ],
    ["meta", { property: "og:site_name", content: "IstanbulJS" }],
    [
      "meta",
      {
        property: "twitter:title",
        content:
          "IstanbulJS | The Progressive, Flexible and Friendly Full Stack NodeJS Framework",
      },
    ],
    [
      "meta",
      {
        property: "twitter:site",
        content: "@istanbuljs",
      },
    ],
    [
      "meta",
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image:src",
        content: "https://istanbuljs.org/logo.png",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image:width",
        content: "500",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image:height",
        content: "500",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      description:
        "The Progressive, Flexible and Friendly Full Stack NodeJS Framework",
    },
    "/tr/": {
      lang: "tr-TR",
      description:
        "İlerici, Esnek ve Kullanıcı Dostu Tam Yığın NodeJS Çerçevesi",
    },
  },
  plugins: [
    googleAnalyticsPlugin({
      id: "G-33CFH4WMVL",
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/tr/": {
          placeholder: "Ara",
        },
      },
      // options
    }),
    pwaPlugin({}),
    pwaPopupPlugin({
      locales: {
        "/": {
          message: "New content is available.",
          buttonText: "Refresh",
        },
        "/tr/": {
          message: "Yeni içerik var.",
          buttonText: "Yenile",
        },
      },
    }),
  ],
  theme: defaultTheme({
    logo: "/img/framework-logo.png",
    locales: {
      "/": {
        sidebar: EnglishSidebar,
        navbar: EnglishNavbar,
        selectLanguageName: "English",
        editLinkText: "Edit this page on GitHub",
      },
      "/tr/": {
        sidebar: TurkishSidebar,
        navbar: TurkishNavbar,
        selectLanguageName: "Türkçe",
        selectLanguageText: "Diller",
        editLinkText: "Bu sayfayı GitHub'da düzenle",
        lastUpdatedText: "Son Güncelleme",
        contributorsText: "Katkıda Bulunanlar",
        tip: "İpucu",
        selectLanguageAriaLabel: "Dil Seç",
        toggleColorMode: "Temayı Değiştir",
        toggleSidebar: "Kenar Çubuğunu Aç/Kapat",
      },
    },
  }),
});
