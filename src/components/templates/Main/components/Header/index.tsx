import { Icon } from "./components/Icon";
import { ProfileIcon } from "./components/ProfileIcon";
import * as S from "./styles";

export const Header = () => {
  const handleClickNotification = () => {};

  const handleClickProfile = () => {};

  return (
    <S.Header>
      <Icon icon="notifications" onClick={handleClickNotification} />

      <ProfileIcon
        srcImage="https://avatars.githubusercontent.com/u/135643864?v=4"
        onProfile={handleClickProfile}
      />
    </S.Header>
  );
};
