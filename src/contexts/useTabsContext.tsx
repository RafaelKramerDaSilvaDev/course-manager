import { useDebounce } from "@uidotdev/usehooks";
import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useResize } from "../hooks/useResize";
import { TabProps } from "../types/tab";

type TabsContextProps = {
  tabs: TabProps[];
  push: (props: TabProps) => void;
  close: (pageKey: string) => void;
  closeAll: () => void;

  tabContainerRef: React.RefObject<HTMLDivElement>;
  calculateTabs: () => void;
  calculateTabsDebounce: () => void;
};

const TabsContext = createContext({} as TabsContextProps);

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [tabs, setTabs] = useState<TabProps[]>([]);

  const tabContainerRef = useRef<HTMLDivElement>(null);
  const tabContainerWidthRef = useRef(0);

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

    calculateTabs();
  };

  const close = (pageKey: string) => {
    setTabs((prevTabs) => {
      return prevTabs.filter(({ page }) => page !== pageKey);
    });
  };

  const closeAll = () => {
    setTabs([]);
  };

  const calculateTabs = () => {
    console.log(tabContainerWidthRef.current);

    if (tabContainerWidthRef.current >= 4000) {
      setTabs(() => {
        // const lastTab = prevTabs[prevTabs.length - 1];
        // return [...prevTabs, { ...lastTab, dropdown: true }];
        return [];
      });
    }
  };

  const calculateTabsDebounce = useDebounce(calculateTabs, 200);

  useLayoutEffect(() => {
    tabContainerWidthRef.current = tabContainerRef.current?.clientWidth ?? 0;
  }, [tabContainerRef]);

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
        calculateTabsDebounce,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  return useContext(TabsContext);
};
