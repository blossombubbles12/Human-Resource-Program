import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
  {
    id: 3,
    title: "Programs",
    newTab: false,
    path: "/programs",
    submenu: [
      {
        id: 31,
        title: "HR Analytics Certificate",
        newTab: false,
        path: "/programs/hr-analytics-certificate",
      },
      {
        id: 32,
        title: "Strategic HR Diploma",
        newTab: false,
        path: "/programs/strategic-hr-diploma",
      },
      {
        id: 33,
        title: "Diversity & Inclusion Certificate",
        newTab: false,
        path: "/programs/diversity-inclusion-certificate",
      },
      {
        id: 34,
        title: "All Programs",
        newTab: false,
        path: "/programs",
      },
      {
        id: 35,
        title: "Apply Now",
        newTab: false,
        path: "/enrollment",
      },
    ],
  },
  {
    id: 4,
    title: "Admissions",
    newTab: false,
    path: "/programs#cta",
  },
  {
    id: 5,
    title: "FAQ",
    newTab: false,
    path: "/faq",
  },
  {
    id: 6,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
