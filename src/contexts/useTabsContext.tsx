import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab } from "../types/tab";

type TabsContextProps = {
  tabs: Tab[];
  push: (props: Tab) => void;
  close: (pageKey: string) => void;
  closeAll: () => void;
};

const TabsContext = createContext({} as TabsContextProps);

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  const navigate = useNavigate();

  const push = ({ link, page, module, redirect = true }: Tab) => {
    setTabs((prevTabs) => {
      const isTabAlreadyExists = prevTabs.some(
        ({ page: prevPage }) => prevPage === page
      );

      if (isTabAlreadyExists) return [...prevTabs];

      return [...prevTabs, { link, page, module }];
    });

    if (redirect) {
      navigate(link);
    }
  };

  const close = (pageKey: string) => {
    setTabs((prevTabs) => {
      return prevTabs.filter(({ page }) => page !== pageKey);
    });
  };

  const closeAll = () => {
    setTabs([]);
  };

  return (
    <TabsContext.Provider value={{ tabs, push, close, closeAll }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  return useContext(TabsContext);
};
