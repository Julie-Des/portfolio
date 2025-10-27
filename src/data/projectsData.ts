export interface ProjectData {
  id: number;
  titleKey: string;
  technosKey: string;
  image: string;
  logo: string;
  github: string;
  link: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    titleKey: "projects.card1.title",
    technosKey: "projects.card1.technos",
    logo: "/images/logos/kasa-logo.png",
    image: "/images/projects/kasa.webp",
    github: "https://github.com/Julie-Des/Projet7-oc",
    link: "https://projet7-oc-deshayes-projects.vercel.app",
  },
  {
    id: 2,
    titleKey: "projects.card2.title",
    technosKey: "projects.card2.technos",
    image: "/images/projects/nina-carducci.webp",
    logo: "/images/logos/nina-carducci-logo.png",
    github: "https://github.com/Julie-Des/Projet8-oc-after",
    link: "https://julie-des.github.io/Projet8-oc-after",
  },
  {
    id: 3,
    titleKey: "projects.card3.title",
    technosKey: "projects.card3.technos",
    image: "/images/projects/724-events.webp",
    logo: "/images/logos/724-events-logo.png",
    github: "https://github.com/Julie-Des/Projet9-oc",
    link: "https://projet9-oc-724events.vercel.app/",
  },
  {
    id: 4,
    titleKey: "projects.card4.title",
    technosKey: "projects.card4.technos",
    image: "/images/projects/sophie-bluel.webp",
    logo: "/images/logos/sophie-bluel-logo.png",
    github: "https://github.com/Julie-Des/Projet6-oc",
    link: "https://projet6-oc-front.onrender.com",
  },
  {
    id: 5,
    titleKey: "projects.card5.title",
    technosKey: "projects.card5.technos",
    image: "/images/projects/ohmyfood.webp",
    logo: "/images/logos/ohmyfood-logo.png",
    github: "https://github.com/Julie-Des/Projet4-oc",
    link: "https://julie-des.github.io/Projet4-oc",
  },
  {
    id: 6,
    titleKey: "projects.card6.title",
    technosKey: "projects.card6.technos",
    image: "/images/projects/booki.webp",
    logo: "/images/logos/booki-logo.png",
    github: "https://github.com/Julie-Des/Booki",
    link: "https://julie-des.github.io/Booki",
  }
];