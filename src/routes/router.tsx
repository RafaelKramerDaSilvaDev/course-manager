import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppProviders } from "../AppProviders";
import { MainTemplate } from "../components/templates/Main";
import { convertRoutes } from "../helpers/convert-routes";
import { SidebarRoutes } from "./sidebar-routes";

export const router = createBrowserRouter([
  {
    element: <AppProviders />,
    children: [
      {
        element: <MainTemplate />,
        children: convertRoutes(SidebarRoutes),
      },
      {
        path: "*",
        element: <Navigate to="/dashboard" replace />,
      },
    ],
  },
]);
