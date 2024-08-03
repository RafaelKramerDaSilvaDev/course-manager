import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TabsProvider } from "./contexts/useTabsContext";
import { ToastProvider } from "./contexts/useToastContext";
import { GlobalStyles } from "./styles/global/global-styles";
import { lightTheme } from "./styles/themes/light";

export const AppProviders = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      <TabsProvider>
        <ToastProvider>
          <Outlet />
        </ToastProvider>
      </TabsProvider>
    </ThemeProvider>
  );
};
