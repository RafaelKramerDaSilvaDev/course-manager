import { Outlet } from "react-router-dom";
import { useToggle } from "../../../hooks/useToggle";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Tabs } from "./components/Tabs";
import * as S from "./styles";

export const MainTemplate = () => {
  const {
    state: collapseSidebar,
    toggle: toggleMenu,
    toggleOff: toggleOffMenu,
  } = useToggle(true);

  return (
    <S.MainTemplate $collapseSidebar={collapseSidebar}>
      <Sidebar toggleMenu={toggleMenu} toggleOffMenu={toggleOffMenu} />
      <Header />

      <S.Content>
        <Tabs />
        <Outlet />
      </S.Content>
    </S.MainTemplate>
  );
};
