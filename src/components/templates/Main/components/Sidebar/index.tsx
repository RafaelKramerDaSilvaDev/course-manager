import { useNavigate } from "react-router-dom";
import { SidebarRoutes } from "../../../../../core/constants/sidebar-routes";
import * as S from "./styles";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleClickRoute = (path: string) => {
    navigate(path);
  };

  return (
    <S.Sidebar>
      <S.SearchInput placeholder="Buscar" />

      <S.Divider />

      {SidebarRoutes.map(({ icon, name, path: pathGroup, children }) => {
        return (
          <S.WrapperRouterGroup key={name}>
            {children ? (
              <S.RouterGroupAction>
                {icon}
                <span>{name}</span>
              </S.RouterGroupAction>
            ) : (
              <S.RouterGroupAction onClick={() => handleClickRoute(pathGroup)}>
                {icon}
                <span>{name}</span>
              </S.RouterGroupAction>
            )}

            <S.WrapperRouter>
              {children &&
                children.map(({ icon, name, path }) => {
                  path = `${pathGroup}/${path}`;

                  return (
                    <S.RouteAction
                      key={name}
                      onClick={() => handleClickRoute(path)}
                    >
                      {icon}
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
