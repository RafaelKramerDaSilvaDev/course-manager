import { useTheme } from "styled-components";
import { MaterialSymbols } from "../../../../../../UI/atoms/MaterialSymbols";
import * as S from "./styles";

type TabProps = {
  page: string;
  module?: string;
  onTab: () => void;
  onCloseTab: () => void;
};

export const Tab = ({ page, module, onTab, onCloseTab }: TabProps) => {
  const { colors } = useTheme();

  return (
    <S.Tab key={page} onClick={onTab}>
      {module && <S.PathText>{module}: </S.PathText>}

      <S.RouteText>{page}</S.RouteText>

      <MaterialSymbols
        icon="close_small"
        onClick={onCloseTab}
        color={colors.grey400}
      />
    </S.Tab>
  );
};
