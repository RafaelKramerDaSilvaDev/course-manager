import { Image } from "../../../../../../UI/atoms/Image";
import * as S from "./styles";

type ProfileIconProps = {
  srcImage: string;
  onProfile: () => void;
};

export const ProfileIcon = ({ srcImage, onProfile }: ProfileIconProps) => {
  return (
    <S.Circle onClick={onProfile}>
      <Image src={srcImage} />
    </S.Circle>
  );
};
