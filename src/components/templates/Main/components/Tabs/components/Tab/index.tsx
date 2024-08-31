import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { Container } from "../../../../../../UI/atoms/Container";
import { MaterialSymbols } from "../../../../../../UI/atoms/MaterialSymbols";
import * as S from "./styles";

type TabProps = {
  page: string;
  module?: string;
  onTab: () => void;
  onCloseTab: () => void;
  getWidth?: (width: number) => void;
};

export const Tab = ({
  page,
  module,
  onTab,
  onCloseTab,
  getWidth,
}: TabProps) => {
  const tabRef = useRef<HTMLButtonElement>(null);

  const { colors } = useTheme();

  useEffect(() => {
    const tabWidth = tabRef.current?.clientWidth ?? 0;
    getWidth && getWidth(tabWidth);
  }, []);

  return (
    <S.Tab ref={tabRef} key={page} onClick={onTab}>
      <Container>
        {module && <S.PathText>{module}: </S.PathText>}

        <S.RouteText>{page}</S.RouteText>
      </Container>

      <MaterialSymbols
        icon="close_small"
        onClick={onCloseTab}
        color={colors.grey400}
      />
    </S.Tab>
  );
};
