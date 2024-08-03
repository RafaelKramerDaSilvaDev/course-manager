import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Tabs } from "./components/Tabs";
import * as S from "./styles";

export const MainTemplate = () => {
  return (
    <S.MainTemplate>
      <Sidebar />
      <Header />

      <S.Content>
        <Tabs />
        <Outlet />
      </S.Content>
    </S.MainTemplate>
  );
};
