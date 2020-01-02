import React, { FormEvent } from "react";
import { StoryBookWrapper } from "../../storybook";
import InputSubmitComponent from './InputSubmit';

export default {
  title: "Molecules.Input Submit"
};

export const InputSubmit = () => {
  const handleInputSubmit = (text: string, event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    alert(text);
  }

  return (
    <StoryBookWrapper>
      <InputSubmitComponent handleSubmit={handleInputSubmit}/>
    </StoryBookWrapper>
  )
};
