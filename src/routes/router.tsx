import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../components/templates/Main";
import { DashboardPage } from "../pages/dashboard";

export const router = createBrowserRouter([
  {
    element: <MainTemplate />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);
