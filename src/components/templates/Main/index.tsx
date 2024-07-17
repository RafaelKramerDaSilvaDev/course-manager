import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import * as S from "./styles";

export const MainTemplate = () => {
  return (
    <S.MainTemplate>
      <Sidebar />
      <Header />
      <Outlet />
    </S.MainTemplate>
  );
};
