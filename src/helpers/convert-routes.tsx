import { RouteObject } from "react-router-dom";
import { Routes } from "../types/routes";
import { normalize } from "./normalize";

export const convertRoutes = (sidebarRoutes: Routes): RouteObject[] => {
  const allRoutes: RouteObject[] = [];

  sidebarRoutes.forEach(({ name, link: linkGroup, page: Page, children }) => {
    if (!linkGroup) {
      linkGroup = normalize(name);
    }

    if (!children && Page) {
      allRoutes.push({
        path: linkGroup,
        element: <Page />,
      });

      return;
    }

    allRoutes.push({
      path: linkGroup,
      children: children?.map(({ name, link, page: Page }) => {
        if (!link) {
          link = normalize(name);
        }

        return {
          path: link,
          element: <Page />,
        };
      }),
    });
  });

  return allRoutes;
};
