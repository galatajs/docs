import { defaultTheme, defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { EnglishSidebar } from "./i18n/en-US/sidebar";
import { TurkishSidebar } from "./i18n/tr-TR/sidebar";
import { EnglishNavbar } from "./i18n/en-US/navbar";
import { TurkishNavbar } from "./i18n/tr-TR/navbar";

export default defineUserConfig({
  lang: "en-US",
  title: "IstanbulJS",
  description: "Just playing around",
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
    repo: "istanbulnode/docs",
  }),
});
