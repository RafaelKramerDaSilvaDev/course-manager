import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "../helpers/debounce";
import { useResize } from "../hooks/useResize";
import { TabProps } from "../types/tab";

type TabsContextProps = {
  tabs: TabProps[];
  push: (props: TabProps) => void;
  close: (pageKey: string) => void;
  closeAll: () => void;
  tabContainerRef: React.RefObject<HTMLDivElement>;
  calculateTabs: (tabWidth?: number) => void;
};

const TabsContext = createContext({} as TabsContextProps);

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [tabs, setTabs] = useState<TabProps[]>([]);

  const tabContainerRef = useRef<HTMLDivElement>(null);
  const tabContentWidthRef = useRef(0);

  const navigate = useNavigate();

  const push = ({ link, page, module, redirect = true }: TabProps) => {
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

  const calculateTabs = (tabWidth?: number) => {
    const tabContainerWidth = tabContainerRef.current?.clientWidth ?? 0;

    if (tabWidth) {
      tabContentWidthRef.current += tabWidth;
    }

    if (tabContentWidthRef.current >= tabContainerWidth) {
      setTabs((prevTabs) => {
        const lastTabIndex = prevTabs.length - 1;
        const lastTab = prevTabs[lastTabIndex];

        prevTabs.splice(lastTabIndex, 1);

        return [...prevTabs, { ...lastTab, dropdown: true }];
      });
    }
  };

  const calculateTabsDebounce = debounce(calculateTabs);

  useResize(() => {
    calculateTabsDebounce();
  });

  return (
    <TabsContext.Provider
      value={{
        tabs,
        push,
        close,
        closeAll,
        tabContainerRef,
        calculateTabs,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  return useContext(TabsContext);
};
