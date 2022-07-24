import { SidebarConfig } from "vuepress";

export const EnglishSidebar: SidebarConfig = [
  {
    text: "Introduction",
    link: "/introduction/",
  },
  {
    text: "Essentials",
    collapsible: false,
    children: [
      {
        text: "Istanbul's Lifecycle",
        link: "/essentials/lifecycle",
      },
      {
        text: "Module Based Architecture",
        link: "/essentials/module-based-architecture",
      },
    ],
  },
  {
    collapsible: false,
    text: "Core Packages",
    children: [
      {
        text: "Application",
        link: "/packages/app",
      },
      {
        text: "Create Istanbul",
        link: "/packages/create-istanbul",
      },
      {
        text: "Http",
        link: "/packages/http",
      },
      {
        text: "Websocket",
        link: "/packages/websocket",
      },
      {
        text: "TypeORM",
        link: "/packages/typeorm",
      },
      {
        text: "Events",
        link: "/packages/events",
      },
      {
        text: "Internationalization",
        link: "/packages/i18n",
      },
      {
        text: "Inject",
        link: "/packages/inject",
      },
      {
        text: "Validate",
        link: "/packages/validate",
      },
      {
        text: "Rules",
        link: "/packages/rules",
      },
    ],
  },
  {
    collapsible: true,
    text: "FAQ",
    children: [
      {
        text: "Why Istanbul?",
        link: "/faq/why-istanbul",
      },
      {
        text: "Passwordless Architecture",
        link: "/faq/passwordless-architecture",
      },
      {
        text: "Middleware Based Architecture",
        link: "/faq/middleware-based-architecture",
      },
    ],
  },
  {
    collapsible: true,
    text: "Migration Guide",
    children: [
      {
        text: "From Express",
        link: "/migration/express/",
      },
      {
        text: "From Fastify",
        link: "/migration/fastify/",
      },
      {
        text: "From NestJS",
        link: "/migration/nestjs/",
      },
    ],
  },
  {
    collapsible: true,
    text: "Discover Istanbul",
    children: [],
  },
  {
    text: "Support Us",
    link: "/other/support-us",
  },
];
