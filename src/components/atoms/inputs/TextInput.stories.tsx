import React from "react";
import { StoryBookWrapper } from "../../storybook";
import TextInputComponent from './TextInput';

export default {
  title: "Atoms.Text Input"
};

export const TextInput = () => (
  <StoryBookWrapper>
    <TextInputComponent />
  </StoryBookWrapper>
);
