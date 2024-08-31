import { useNavigate } from "react-router-dom";

import { useTheme } from "styled-components";
import { useTabsContext } from "../../../../../contexts/useTabsContext";
import { Button } from "../../../../UI/atoms/Button";
import { MaterialSymbols } from "../../../../UI/atoms/MaterialSymbols";
import { TabsDropdown } from "./components/TabsDropdown";
import { TabsHorizontal } from "./components/TabsHorizontal";
import * as S from "./styles";

type TabsProps = {
  openSidebar: boolean;
};

export const Tabs = ({ openSidebar }: TabsProps) => {
  const { tabs, close, tabContainerRef, calculateTabs, closeAll } =
    useTabsContext();
  const { colors } = useTheme();
  const navigate = useNavigate();
  const isMinimumOneTab = tabs.length > 0;

  const handleTab = (link: string) => {
    navigate(link);
  };

  const handleCloseTab = (pageKey: string) => {
    close(pageKey);
  };

  const handleCloseAllTabs = () => {
    closeAll();
  };

  return (
    <S.Wrapper>
      <TabsHorizontal
        tabs={tabs}
        onTab={handleTab}
        onCloseTab={handleCloseTab}
        calculateTabs={calculateTabs}
        openSidebar={openSidebar}
        ref={tabContainerRef}
      />

      {isMinimumOneTab && (
        <Button onClick={handleCloseAllTabs}>
          <MaterialSymbols icon="delete" color={colors.white100} />
        </Button>
      )}

      <TabsDropdown tabs={tabs} onTab={handleTab} onCloseTab={handleCloseTab} />
    </S.Wrapper>
  );
};
