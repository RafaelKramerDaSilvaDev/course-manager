import { useNavigate } from "react-router-dom";
import { SidebarRoutes } from "../../../../../core/constants/sidebar-routes";
import { normalize } from "../../../../../helpers/normalize";
import { useToggle } from "../../../../../hooks/useToggle";
import * as S from "./styles";

export const Sidebar = () => {
  const { open, toggle } = useToggle();
  const navigate = useNavigate();

  const handleClickRouteGroupToggle = () => {
    toggle();
  };

  const handleClickRouteNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <S.Sidebar>
      <S.SearchInput placeholder="Buscar" />

      <S.Divider />

      {SidebarRoutes.map(({ name, path: pathGroup, children }) => {
        if (!pathGroup) {
          pathGroup = normalize(name);
        }

        return (
          <S.WrapperRouterGroup key={name}>
            {children ? (
              <S.RouteGroupAction onClick={handleClickRouteGroupToggle}>
                {/* {icon} */}
                <span>{name}</span>
              </S.RouteGroupAction>
            ) : (
              <S.RouteGroupAction
                onClick={() => handleClickRouteNavigate(pathGroup)}
              >
                {/* {icon} */}
                <span>{name}</span>
              </S.RouteGroupAction>
            )}

            <S.WrapperRouter $open={open} $routeAmount={children?.length ?? 0}>
              {children &&
                children.map(({ name, path }) => {
                  if (!path) {
                    path = normalize(name);
                  }

                  path = `${pathGroup}/${path}`;

                  return (
                    <S.RouteAction
                      key={name}
                      onClick={() => handleClickRouteNavigate(path)}
                    >
                      {/* {icon} */}
                      <span>{name}</span>
                    </S.RouteAction>
                  );
                })}
            </S.WrapperRouter>
          </S.WrapperRouterGroup>
        );
      })}
    </S.Sidebar>
  );
};
