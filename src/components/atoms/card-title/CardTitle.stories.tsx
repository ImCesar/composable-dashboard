import React from "react";
import { StoryBookWrapper } from "../../storybook";
import CardTitleComponent from "./CardTitle";

export default {
  title: "Atoms.Card Title"
};

export const CardTitle = () => (
  <StoryBookWrapper>
    <CardTitleComponent>Card Title</CardTitleComponent>
  </StoryBookWrapper>
);
