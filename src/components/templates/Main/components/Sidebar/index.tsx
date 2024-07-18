import { useNavigate } from "react-router-dom";
import { SidebarRoutes } from "../../../../../core/constants/sidebar-routes";
import { normalize } from "../../../../../helpers/normalize";
import { useToggle } from "../../../../../hooks/useToggle";
import { MaterialSymbols } from "../../../../UI/atoms/MaterialSymbols";
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

      {SidebarRoutes.map(({ icon, name, path: pathGroup, children }) => {
        if (!pathGroup) {
          pathGroup = normalize(name);
        }

        return (
          <S.WrapperRouterGroup key={name}>
            {children ? (
              <S.RouteGroupAction onClick={handleClickRouteGroupToggle}>
                <MaterialSymbols icon={icon} fontSize={14} />
                <span>{name}</span>
              </S.RouteGroupAction>
            ) : (
              <S.RouteGroupAction
                onClick={() => handleClickRouteNavigate(pathGroup)}
              >
                <MaterialSymbols icon={icon} fontSize={14} />
                <span>{name}</span>
              </S.RouteGroupAction>
            )}

            <S.WrapperRouter $open={open} $routeAmount={children?.length ?? 0}>
              {children &&
                children.map(({ icon, name, path }) => {
                  if (!path) {
                    path = normalize(name);
                  }

                  path = `${pathGroup}/${path}`;

                  return (
                    <S.RouteAction
                      key={name}
                      onClick={() => handleClickRouteNavigate(path)}
                    >
                      <MaterialSymbols icon={icon} fontSize={14} />
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
