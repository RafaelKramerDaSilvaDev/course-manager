import { useTheme } from "styled-components";
import { MaterialSymbols } from "../../../../../../UI/atoms/MaterialSymbols";
import * as S from "./styles";

type IconProps = {
  icon: string;
  onClick: () => void;
};

export const Icon = ({ icon, onClick }: IconProps) => {
  const { colors } = useTheme();

  return (
    <S.Circle onClick={onClick}>
      <MaterialSymbols icon={icon} color={colors.grey300} fontSize={18} />
    </S.Circle>
  );
};
