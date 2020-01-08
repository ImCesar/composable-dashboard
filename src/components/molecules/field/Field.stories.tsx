import React from "react";

import { StoryBookWrapper } from "../../storybook";
import FieldComponent from './Field';
import { TextInput } from "../../atoms";

export default {
  title: "Molecules.Field"
};

export const Field = () => (
  <StoryBookWrapper>
    <FieldComponent label="Field" value="Value" />
  </StoryBookWrapper>
);

export const ValueAsChild = () => (
  <StoryBookWrapper>
    <FieldComponent label="Field">
      <p>I&rsquo;m a child</p>
    </FieldComponent>
  </StoryBookWrapper>
);

export const NonStringChild = () => (
  <StoryBookWrapper>
    <FieldComponent label="Field">
      <TextInput placeholder="I'm an input" />
    </FieldComponent>
  </StoryBookWrapper>
);
