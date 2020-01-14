import React, { createContext, FunctionComponent, useContext, useState, useEffect } from 'react';
import { Tab, TabsContainer } from './style';

type TabContextTypes = {
  activeTab: string;
  setActiveTab: (activeTab: string) => void; 
}

export const TabContext = createContext<Partial<TabContextTypes>>({}); 

type TabsProps = {
  tabs: {
    value: string;
    label: string;
  }[];
  defaultTab: string;
};

const Tabs: FunctionComponent<TabsProps> = ({ children, defaultTab, tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab])

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab}}>
      <TabsContainer>
        {tabs.map(tab => (
          <Tab 
            key={tab.value}
            selected={activeTab === tab.value}
            onClick={() => setActiveTab(tab.value)}
          >
              {tab.label}
          </Tab>
        ))}
      </TabsContainer>
      {children}
    </TabContext.Provider>
  );
}

export default Tabs;