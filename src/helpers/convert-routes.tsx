import { RouteObject } from "react-router-dom";
import { Routes } from "../types/routes";
import { normalize } from "./normalize";

export const convertRoutes = (sidebarRoutes: Routes): RouteObject[] => {
  const allRoutes: RouteObject[] = [];

  sidebarRoutes.forEach(({ name, path: pathGroup, page: Page, children }) => {
    if (!pathGroup) {
      pathGroup = normalize(name);
    }

    if (!children && Page) {
      allRoutes.push({
        path: pathGroup,
        element: <Page />,
      });

      return;
    }

    allRoutes.push({
      path: pathGroup,
      children: children?.map(({ name, path, page: Page }) => {
        if (!path) {
          path = normalize(name);
        }

        return {
          path,
          element: <Page />,
        };
      }),
    });
  });

  return allRoutes;
};
