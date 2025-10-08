export interface ProjectData {
  id: number;
  titleKey: string;
  technosKey: string;
  image: string;
  github: string;
  link: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    titleKey: "projects.card1.title",
    technosKey: "projects.card1.technos",
    image: "/images/kasa.png",
    github: "https://github.com/Julie-Des/Kasa",
    link: "#",
  },
  {
    id: 2,
    titleKey: "projects.card2.title",
    technosKey: "projects.card2.technos",
    image: "/images/nina-carducci.png",
    github: "https://github.com/Julie-Des/Nina-Carducci",
    link: "#",
  },
  {
    id: 3,
    titleKey: "projects.card3.title",
    technosKey: "projects.card3.technos",
    image: "/images/724-events.png",
    github: "https://github.com/Julie-Des/724-events",
    link: "#",
  },
  {
    id: 4,
    titleKey: "projects.card4.title",
    technosKey: "projects.card4.technos",
    image: "/images/sophie-bluel.png",
    github: "https://github.com/Julie-Des/Sophie-Bluel",
    link: "#",
  },
  {
    id: 5,
    titleKey: "projects.card5.title",
    technosKey: "projects.card5.technos",
    image: "/images/ohmyfood.png",
    github: "https://github.com/Julie-Des/Ohmyfood",
    link: "#",
  },
  {
    id: 6,
    titleKey: "projects.card6.title",
    technosKey: "projects.card6.technos",
    image: "/images/booki.png",
    github: "https://github.com/Julie-Des/Booki",
    link: "#",
  }
];