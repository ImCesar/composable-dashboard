import React from "react";
import { StoryBookWrapper } from "../../storybook";
import InputSubmitComponent from './InputSubmit';

export default {
  title: "Molecules.Input Submit"
};

export const InputSubmit = () => {
  const handleInputSubmit = (text: string) => {
    // eslint-disable-next-line no-alert
    alert(text);
  }

  return (
    <StoryBookWrapper>
      <InputSubmitComponent handleSubmit={handleInputSubmit}/>
    </StoryBookWrapper>
  )
};
