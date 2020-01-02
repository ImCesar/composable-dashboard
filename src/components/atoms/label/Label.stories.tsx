import React from "react";

import { StoryBookWrapper } from "../../storybook";
import LabelComponent from "./Label";

export default {
  title: "Atoms.Label"
};

export const Label = () => (
  <StoryBookWrapper>
    <div style={{ padding: "0.8rem" }}>
      <LabelComponent>Label</LabelComponent>
    </div>
  </StoryBookWrapper>
);
