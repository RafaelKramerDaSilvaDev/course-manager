import { forwardRef } from "react";
import { TabProps } from "../../../../../../../types/tab";
import { Tab } from "../Tab";
import * as S from "./styles";

type TabsHorizontalProps = {
  tabs: TabProps[];
  onTab: (link: string) => void;
  onCloseTab: (page: string) => void;
  calculateTabs: (tabWidth?: number) => void;
  openSidebar: boolean;
};

export const TabsHorizontal = forwardRef<HTMLDivElement, TabsHorizontalProps>(
  ({ tabs, onTab, onCloseTab, calculateTabs, openSidebar }, ref) => {
    return (
      <S.Wrapper $openSidebar={openSidebar} ref={ref}>
        {tabs?.map(({ page, module, link, dropdown }) => {
          if (dropdown) {
            return null;
          }

          return (
            <Tab
              key={page}
              page={page}
              module={module}
              onTab={() => onTab(link)}
              onCloseTab={() => onCloseTab(page)}
              getWidth={calculateTabs}
            />
          );
        })}
      </S.Wrapper>
    );
  }
);
