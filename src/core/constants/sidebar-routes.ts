import { Routes } from "../../types/routes";

export const SidebarRoutes: Routes = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: "dashboard",
  },
  {
    name: "Cadastros",
    path: "cadastros",
    icon: "cadastros",
    children: [
      {
        name: "Estudante",
        icon: "",
      },
      {
        name: "Professor",
        icon: "",
      },
      {
        name: "Curso",
        icon: "",
      },
      {
        name: "Equipamento",
        icon: "",
      },
    ],
  },
];
