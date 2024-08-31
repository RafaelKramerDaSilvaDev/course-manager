import { useTheme } from "styled-components";
import { useClickOutside } from "../../../../../../../hooks/useClickOutside";
import { useToggle } from "../../../../../../../hooks/useToggle";
import { TabProps } from "../../../../../../../types/tab";
import { ClickOutsideContainer } from "../../../../../../UI/atoms/ClickOutsideContainer";
import { MaterialSymbols } from "../../../../../../UI/atoms/MaterialSymbols";
import { Tab } from "../Tab";
import * as S from "./styles";

type TabsDropdownProps = {
  tabs: TabProps[];
  onTab: (link: string) => void;
  onCloseTab: (page: string) => void;
};

export const TabsDropdown = ({
  tabs,
  onTab,
  onCloseTab,
}: TabsDropdownProps) => {
  const { colors } = useTheme();
  const { open, toggle, toggleOff } = useToggle(false);
  const { elementRef } = useClickOutside<HTMLDivElement>(toggleOff);

  const hasDropdownTab = tabs.some(({ dropdown }) => dropdown);

  return (
    <ClickOutsideContainer ref={elementRef}>
      <S.OpenButton $rotate={open && hasDropdownTab} onClick={toggle}>
        <MaterialSymbols icon="keyboard_arrow_up" color={colors.white100} />
      </S.OpenButton>

      {open && hasDropdownTab && (
        <S.DropdownContainer>
          {tabs.map(({ page, module, link, dropdown }) => {
            if (!dropdown) {
              return null;
            }

            return (
              <Tab
                key={page}
                page={page}
                module={module}
                onTab={() => onTab(link)}
                onCloseTab={() => onCloseTab(page)}
              />
            );
          })}
        </S.DropdownContainer>
      )}
    </ClickOutsideContainer>
  );
};
