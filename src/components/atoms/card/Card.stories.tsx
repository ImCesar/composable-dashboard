import React from "react";

import { StoryBookWrapper } from "../../storybook";
import CardComponent from "./Card";

export default {
  title: "Atoms.Card"
};

export const Card = () => (
  <StoryBookWrapper>
    <CardComponent />
  </StoryBookWrapper>
);
