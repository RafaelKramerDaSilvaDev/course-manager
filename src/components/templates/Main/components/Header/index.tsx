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
        srcImage="https://media.licdn.com/dms/image/D5603AQGaYJS-N-Q9LQ/profile-displayphoto-shrink_800_800/0/1722480413675?e=1727913600&v=beta&t=C1NrfadGTveFmeDaDol2G5BBvOydDoE12YQcw0o5xtQ"
        onProfile={handleClickProfile}
      />
    </S.Header>
  );
};
