import React from "react";

import { StoryBookWrapper } from "../../storybook";
import TabsComponent from './Tabs';
import TabPanelComponent from './TabPanel';

export default {
  title: "Molecules.Tabs"
};

export const Card = () =>  {
  const tabs = [
    { label: "Tab 1", value:"Tab1" }, 
    { label: "Tab 2", value: "Tab2" }
  ]; 

  return (
    <StoryBookWrapper>
      <TabsComponent tabs={tabs} defaultTab="Tab1">
        <TabPanelComponent forTab="Tab1">
          <p>Tab 1</p>
        </TabPanelComponent> 
        <TabPanelComponent forTab="Tab2">
          <p>Tab 2</p>
        </TabPanelComponent> 
      </TabsComponent>
    </StoryBookWrapper>
  );
}