import { useTabsContext } from "../../../../../contexts/useTabsContext";
import { normalize } from "../../../../../helpers/normalize";
import { useToggle } from "../../../../../hooks/useToggle";
import { SidebarRoutes } from "../../../../../routes/sidebar-routes";
import { Tab } from "../../../../../types/tab";
import { PathAction } from "./components/PathAction";
import { RouteAction } from "./components/RouteAction";
import * as S from "./styles";

export const Sidebar = () => {
  const { open, toggle } = useToggle();
  const { push } = useTabsContext();

  const handleClickPathToggle = () => {
    toggle();
  };

  const handleClickRouteNavigate = ({
    link,
    module,
    page,
  }: Omit<Tab, "redirect">) => {
    if (module) {
      push({ link, module, page });
      return;
    }

    push({ link, page });
  };

  return (
    <S.Sidebar>
      {SidebarRoutes?.map(
        ({ icon, name: namePath, link: linkPath, children }) => {
          if (!linkPath) {
            linkPath = normalize(namePath);
          }

          return (
            <S.WrapperPath key={namePath}>
              {children ? (
                <PathAction
                  icon={icon}
                  name={namePath}
                  onPath={handleClickPathToggle}
                />
              ) : (
                <PathAction
                  icon={icon}
                  name={namePath}
                  onPath={() =>
                    handleClickRouteNavigate({
                      link: linkPath,
                      page: namePath,
                    })
                  }
                />
              )}

              <S.WrapperRoute $open={open} $routeAmount={children?.length ?? 0}>
                {children &&
                  children?.map(({ icon, name, link }) => {
                    if (!link) {
                      link = normalize(name);
                    }

                    link = `${linkPath}/${link}`;

                    return (
                      <RouteAction
                        key={name}
                        icon={icon}
                        name={name}
                        onRoute={() =>
                          handleClickRouteNavigate({
                            link,
                            module: namePath,
                            page: name,
                          })
                        }
                      />
                    );
                  })}
              </S.WrapperRoute>
            </S.WrapperPath>
          );
        }
      )}
    </S.Sidebar>
  );
};
