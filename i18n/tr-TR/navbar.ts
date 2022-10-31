import { NavbarConfig } from "vuepress";

export const TurkishNavbar: NavbarConfig = [
  {
    text: "Dokümantasyon",
    link: "/tr/introduction/",
  },
  {
    text: "Hakkında",
    children: [
      {
        text: "GalataJS Hakkında",
        link: "/tr/about/",
      },
      {
        text: "Yayınlar",
        link: "/tr/about/releases",
      },
      {
        text: "Topluluk",
        link: "/tr/about/community",
      },
      {
        text: "Değişim Günlüğü",
        link: "/tr/about/change-log",
      },
    ],
  },
];
