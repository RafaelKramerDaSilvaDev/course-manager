import { Image } from "../../../../../../UI/atoms/Image";
import * as S from "./styles";

type ProfileDropdownProps = {
  srcProfile: string;
};

export const ProfileDropdown = ({ srcProfile }: ProfileDropdownProps) => {
  return (
    <S.Circle>
      <Image src={srcProfile} />
    </S.Circle>
  );
};
