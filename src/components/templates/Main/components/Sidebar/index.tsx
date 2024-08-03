import { useTabsContext } from "../../../../../contexts/useTabsContext";
import { normalize } from "../../../../../helpers/normalize";
import { useToggle } from "../../../../../hooks/useToggle";
import { SidebarRoutes } from "../../../../../routes/sidebar-routes";
import { Tab } from "../../../../../types/tab";
import { MenuButton } from "./components/MenuButton";
import { PathAction } from "./components/PathAction";
import { RouteAction } from "./components/RouteAction";
import * as S from "./styles";

type SidebarProps = {
  toggleMenu: () => void;
  toggleOffMenu: () => void;
};

export const Sidebar = ({ toggleMenu, toggleOffMenu }: SidebarProps) => {
  const {
    state: isOpen,
    toggle: togglePath,
    toggleOff: toggleOffPath,
  } = useToggle(false);

  const { push } = useTabsContext();

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

  const handleClickMenu = () => {
    toggleMenu();
    toggleOffPath();
  };

  const handleClickPath = () => {
    togglePath();
    toggleOffMenu();
  };

  return (
    <S.Sidebar>
      <MenuButton onMenu={handleClickMenu} />

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
                  onPath={handleClickPath}
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

              <S.WrapperRoute
                $isOpen={isOpen}
                $routeAmount={children?.length ?? 0}
              >
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
