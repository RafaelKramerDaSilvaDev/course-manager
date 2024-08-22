import { Outlet } from "react-router-dom";
import { useToggle } from "../../../hooks/useToggle";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Tabs } from "./components/Tabs";
import * as S from "./styles";

export const MainTemplate = () => {
  const { open, toggle: toggleMenu, toggleOff: toggleOnMenu } = useToggle(true);

  return (
    <S.MainTemplate $openSidebar={open}>
      <Sidebar toggleMenu={toggleMenu} toggleOnMenu={toggleOnMenu} />

      <Header />

      <S.Content>
        <Tabs openSidebar={open} />
        <Outlet />
      </S.Content>
    </S.MainTemplate>
  );
};
