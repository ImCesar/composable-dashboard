import React, { 
  createContext, 
  FunctionComponent, 
  useEffect,
  useState,
} from 'react';

type TabContextTypes = {
  activeTab: string;
  setActiveTab: (activeTab: string) => void; 
}

export const TabContext = createContext<Partial<TabContextTypes>>({});

type TabsStateProps = {
  defaultTab: string;
};

export const TabState: FunctionComponent<TabsStateProps> = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab])

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab}}>
      {children}
    </TabContext.Provider>
  )
}