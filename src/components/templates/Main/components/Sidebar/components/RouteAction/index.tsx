import { MaterialSymbols } from "../../../../../../UI/atoms/MaterialSymbols";
import * as S from "./styles";

type RouteActionProps = {
  name: string;
  icon: string;
  onRoute: () => void;
};

export const RouteAction = ({ name, icon, onRoute }: RouteActionProps) => {
  return (
    <S.RouteAction onClick={onRoute}>
      <MaterialSymbols icon={icon} fontSize={14} />
      {name}
    </S.RouteAction>
  );
};
