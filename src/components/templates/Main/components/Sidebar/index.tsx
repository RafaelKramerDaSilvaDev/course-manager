import { useTabsContext } from "../../../../../contexts/useTabsContext";
import { normalize } from "../../../../../helpers/normalize";
import { useToggle } from "../../../../../hooks/useToggle";
import { SidebarRoutes } from "../../../../../routes/sidebar-routes";
import { TabProps } from "../../../../../types/tab";
import { MenuButton } from "./components/MenuButton";
import { RouteAction } from "./components/RouteAction";
import * as S from "./styles";

type SidebarProps = {
  toggleMenu: () => void;
  toggleOnMenu: () => void;
};

export const Sidebar = ({ toggleMenu, toggleOnMenu }: SidebarProps) => {
  const {
    open: openPath,
    toggle: togglePath,
    toggleOff: toggleOffPath,
  } = useToggle(false);

  const { push } = useTabsContext();

  const handleClickRouteNavigate = ({
    link,
    module,
    page,
  }: Omit<TabProps, "redirect">) => {
    if (module) {
      push({ link, module, page });
      return;
    }

    push({ link, page });
  };

  const handleClickMenu = () => {
    toggleMenu();
    toggleOffPath();
  };

  const handleClickPath = () => {
    togglePath();
    toggleOnMenu();
  };

  return (
    <S.Sidebar>
      <MenuButton onMenu={handleClickMenu} />

      {SidebarRoutes?.map(
        ({ icon, name: namePath, link: linkPath, children }) => {
          const routeAmount = children?.length ?? 0;

          if (!linkPath) {
            linkPath = normalize(namePath);
          }

          return (
            <S.WrapperPath key={namePath}>
              {children ? (
                <RouteAction
                  icon={icon}
                  name={namePath}
                  onRoute={handleClickPath}
                />
              ) : (
                <RouteAction
                  icon={icon}
                  name={namePath}
                  onRoute={() =>
                    handleClickRouteNavigate({
                      link: linkPath,
                      page: namePath,
                    })
                  }
                />
              )}

              {children && (
                <S.WrapperRoute $isOpen={openPath} $routeAmount={routeAmount}>
                  {children?.map(({ icon, name, link }) => {
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
              )}
            </S.WrapperPath>
          );
        }
      )}
    </S.Sidebar>
  );
};
