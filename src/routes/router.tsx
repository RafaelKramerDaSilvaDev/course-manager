import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../components/templates/Main";
import { SidebarRoutes } from "../core/constants/sidebar-routes";
import { convertRoutes } from "../helpers/convert-routes";

export const router = createBrowserRouter([
  {
    element: <MainTemplate />,
    children: convertRoutes(SidebarRoutes),
  },
]);
