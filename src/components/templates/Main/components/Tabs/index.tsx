import { useNavigate } from "react-router-dom";

import { useTabsContext } from "../../../../../contexts/useTabsContext";
import { Tab } from "./components/Tab";
import * as S from "./styles";

export const Tabs = () => {
  const { tabs, close } = useTabsContext();
  // const { tabs, close, closeAll } = useTabsContext();
  // const { dispatchToast } = useToastContext();
  const navigate = useNavigate();

  // const isMinimumOneTab = tabs.length > 0;

  const handleClickTab = (link: string) => {
    navigate(link);
  };

  const handleClickCloseTab = (textKey: string) => {
    close(textKey);
  };

  // const handleClickCloseAllTabs = () => {
  //   closeAll();
  //   dispatchToast("Tabs Fechadas.");
  // };

  return (
    <S.Wrapper>
      <S.WrapperTabs>
        {tabs?.map(({ page, module, link }) => (
          <Tab
            page={page}
            module={module}
            onTab={() => handleClickTab(link)}
            onCloseTab={() => handleClickCloseTab(page)}
          />
        ))}
      </S.WrapperTabs>

      {/* {isMinimumOneTab && (
        <HeaderAction
          icon="close"
          text="Fechar Todas"
          onClick={handleClickCloseAllTabs}
        />
      )} */}
    </S.Wrapper>
  );
};
