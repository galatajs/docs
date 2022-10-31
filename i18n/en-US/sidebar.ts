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
        text: "GalataJS's Lifecycle",
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
        children: [
          {
            text: "Modules",
            link: "/packages/app/modules",
          },
          {
            text: "Plugins",
            link: "/packages/app/plugins",
          },
          {
            text: "App Methods",
            link: "/packages/app/app-methods",
          },
        ],
      },
      {
        text: "Create GalataJS",
        link: "/packages/create-galatajs",
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
    collapsible: false,
    text: "Databases",
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
    text: "FAQ",
    children: [
      {
        text: "Why GalataJS?",
        link: "/faq/why-galatajs",
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
    text: "Discover GalataJS",
    children: [],
  },
  {
    text: "Support Us",
    link: "/other/support-us",
  },
  {
    text: "Contributing",
    link: "/other/contributing",
  },
];
