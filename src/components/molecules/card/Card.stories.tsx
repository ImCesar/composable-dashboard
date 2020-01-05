import React from "react";

import { StoryBookWrapper } from "../../storybook";
import CardComponent from "./Card";

export default {
  title: "Molecules.Card"
};

export const Card = () => (
  <StoryBookWrapper>
    <CardComponent title="Card Title">
      <p>This is the card body</p>
    </CardComponent>
  </StoryBookWrapper>
);