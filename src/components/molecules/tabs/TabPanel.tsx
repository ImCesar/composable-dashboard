import React, { FunctionComponent, useContext, useEffect } from 'react';
import { TabContext } from './Tabs';
import { TabPanelContainer } from './style';

type TablPanelProps = {
  forTab: string;
};

const TabPanel: FunctionComponent<TablPanelProps> = ({ children, forTab }) => {
  const { activeTab } = useContext(TabContext);

  return (
    <TabPanelContainer selected={forTab === activeTab}>
      {children}
    </TabPanelContainer>
  );
}

export default TabPanel;