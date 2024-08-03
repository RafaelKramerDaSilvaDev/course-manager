import { DashboardPage } from "../pages/dashboard";
import { CoursePage } from "../pages/register/course";
import { EquipmentPage } from "../pages/register/equipment";
import { StudentPage } from "../pages/register/student";
import { TeacherPage } from "../pages/register/teacher";
import { Routes } from "../types/routes";

export const SidebarRoutes: Routes = [
  {
    name: "Dashboard",
    icon: "dashboard",
    page: DashboardPage,
  },
  {
    name: "Cadastros",
    icon: "add_circle_outline",
    children: [
      {
        name: "Estudante",
        icon: "person",
        page: StudentPage,
      },
      {
        name: "Professor",
        icon: "school",
        page: TeacherPage,
      },
      {
        name: "Curso",
        icon: "menu_book",
        page: CoursePage,
      },
      {
        name: "Equipamento",
        icon: "hardware",
        page: EquipmentPage,
      },
    ],
  },
];
