import { NavbarConfig } from "vuepress";

export const EnglishNavbar: NavbarConfig = [
  {
    text: "Documentation",
    link: "/introduction/",
  },
  {
    text: "About",
    children: [
      {
        text: "About Istanbul",
        link: "/about/",
      },
      {
        text: "Releases",
        link: "/about/releases",
      },
      {
        text: "Community",
        link: "/about/community",
      },
      {
        text: "Change Log",
        link: "/about/change-log",
      },
    ],
  },
];
