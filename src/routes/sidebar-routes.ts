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
  {
    name: "Teste De Aba Grupo 1",
    icon: "star",
    page: EquipmentPage,
  },
  {
    name: "Teste De Aba Grupo 2",
    icon: "star",
    page: EquipmentPage,
  },
  {
    name: "Teste De Aba Grupo 3",
    icon: "star",
    page: EquipmentPage,
  },
  {
    name: "Teste De Aba Grupo 4",
    icon: "star",
    page: EquipmentPage,
  },
  {
    name: "Teste De Aba Grupo 5",
    icon: "star",
    page: EquipmentPage,
  },
  {
    name: "Teste De Aba Grupo 6",
    icon: "star",
    page: EquipmentPage,
  },
  {
    name: "Teste De Aba Grupo 7",
    icon: "star",
    page: EquipmentPage,
  },
];
