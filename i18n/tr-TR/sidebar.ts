import { SidebarConfig } from "vuepress";

export const TurkishSidebar: SidebarConfig = [
  {
    text: "giriş",
    link: "/tr/introduction/",
  },
  {
    text: "Temeller",
    collapsible: false,
    children: [
      {
        text: "İstanbul'un Yaşam Döngüsü",
        link: "/tr/essentials/lifecycle",
      },
      {
        text: "Modül Tabanlı Mimari",
        link: "/tr/essentials/module-based-architecture",
      },
    ],
  },
  {
    collapsible: false,
    text: "Çekirdek Paketleri",
    children: [
      {
        text: "Application",
        link: "/tr/packages/app",
      },
      {
        text: "Create Istanbul",
        link: "/tr/packages/create-istanbul",
      },
      {
        text: "Http",
        link: "/tr/packages/http",
      },
      {
        text: "Websocket",
        link: "/tr/packages/websocket",
      },
      {
        text: "Events",
        link: "/tr/packages/events",
      },
      {
        text: "Internationalization",
        link: "/tr/packages/i18n",
      },
      {
        text: "Inject",
        link: "/tr/packages/inject",
      },
      {
        text: "Validate",
        link: "/tr/packages/validate",
      },
      {
        text: "Rules",
        link: "/tr/packages/rules",
      },
    ],
  },
  {
    collapsible: false,
    text: "Veritabanları",
    children: [
      {
        text: "MongoDB",
        link: "/databases/mongo",
      },
      {
        text: "TypeORM",
        link: "/databases/typeorm",
      },
    ],
  },
  {
    collapsible: true,
    text: "SSS",
    children: [
      {
        text: "Neden Istanbul?",
        link: "/tr/faq/why-istanbul",
      },
      {
        text: "Şifresiz Mimari",
        link: "/tr/faq/passwordless-architecture",
      },
      {
        text: "Middleware Bazlı Mimari",
        link: "/tr/faq/middleware-based-architecture",
      },
    ],
  },
  {
    collapsible: true,
    text: "Göç Kılavuzu",
    children: [
      {
        text: "Express'den",
        link: "/tr/migration/express/",
      },
      {
        text: "Fastify'dan",
        link: "/tr/migration/fastify/",
      },
      {
        text: "NestJS'den",
        link: "/tr/migration/nestjs/",
      },
    ],
  },
  {
    collapsible: true,
    text: "Istanbul'u Keşfet",
    children: [],
  },
  {
    text: "Bizi Destekle",
    link: "/tr/other/support-us",
  },
  {
    text: "Katkıda Bulun",
    link: "/tr/other/contrubuting",
  },
];
