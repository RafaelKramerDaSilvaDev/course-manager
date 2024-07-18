import { Routes } from "../../types/routes";

export const SidebarRoutes: Routes = [
  {
    name: "Dashboard",
    icon: "dashboard",
  },
  {
    name: "Cadastros",
    icon: "add_circle_outline",
    children: [
      {
        name: "Estudante",
        icon: "person",
      },
      {
        name: "Professor",
        icon: "school",
      },
      {
        name: "Curso",
        icon: "menu_book",
      },
      {
        name: "Equipamento",
        icon: "hardware",
      },
    ],
  },
];
