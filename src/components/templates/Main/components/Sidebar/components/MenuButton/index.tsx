import { MaterialSymbols } from "../../../../../../UI/atoms/MaterialSymbols";
import * as S from "./styles";

type MenuButtonProps = {
  onMenu: () => void;
};

export const MenuButton = ({ onMenu }: MenuButtonProps) => {
  return (
    <S.MenuButton onClick={onMenu}>
      <S.IconContainer>
        <MaterialSymbols icon="menu" fontSize={18} />
      </S.IconContainer>
    </S.MenuButton>
  );
};
