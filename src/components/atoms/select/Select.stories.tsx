import React from "react";
import { StoryBookWrapper } from "../../storybook";
import SelectComponent from './Select';

export default {
  title: "Atoms.Select"
};

export const Select = () => (
  <StoryBookWrapper>
    <SelectComponent>
      <option value="one">One</option>
      <option value="two">Two</option>
    </SelectComponent>
  </StoryBookWrapper>
);
