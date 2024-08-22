import { useNavigate } from "react-router-dom";

import { useTabsContext } from "../../../../../contexts/useTabsContext";
import { Tab } from "./components/Tab";
import * as S from "./styles";

type TabsProps = {
  openSidebar: boolean;
};

export const Tabs = ({ openSidebar }: TabsProps) => {
  const { tabs, close, tabContainerRef } = useTabsContext();

  const navigate = useNavigate();

  const handleClickTab = (link: string) => {
    navigate(link);
  };

  const handleClickCloseTab = (pageKey: string) => {
    close(pageKey);
  };

  // const { dispatchToast } = useToastContext();

  // const isMinimumOneTab = tabs.length > 0;

  // const handleClickCloseAllTabs = () => {
  //   closeAll();
  //   dispatchToast("Tabs Fechadas.");
  // };

  return (
    <S.TabContainer ref={tabContainerRef} $openSidebar={openSidebar}>
      {tabs?.map(({ page, module, link, dropdown }) => {
        if (dropdown) return null;

        return (
          <Tab
            key={page}
            page={page}
            module={module}
            onTab={() => handleClickTab(link)}
            onCloseTab={() => handleClickCloseTab(page)}
          />
        );
      })}

      {/* {isMinimumOneTab && (
        <HeaderAction
          icon="close"
          text="Fechar Todas"
          onClick={handleClickCloseAllTabs}
        />
      )} */}
    </S.TabContainer>
  );
};
