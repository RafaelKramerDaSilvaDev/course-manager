import { MaterialSymbols } from "../../../../../../UI/atoms/MaterialSymbols";
import * as S from "./styles";

type PathActionProps = {
  name: string;
  icon: string;
  onPath: () => void;
};

export const PathAction = ({ name, icon, onPath }: PathActionProps) => {
  return (
    <S.PathAction onClick={onPath}>
      <MaterialSymbols icon={icon} fontSize={14} />
      {name}
    </S.PathAction>
  );
};
