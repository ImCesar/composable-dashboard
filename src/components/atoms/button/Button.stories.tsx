import React from "react";
import { StoryBookWrapper } from "../../storybook";
import Button from "./Button";

export default {
  title: "Atoms.Button"
};

export const TextButton = () => (
  <StoryBookWrapper>
    <div style={{ padding: "0.8rem" }}>
      <Button>Hello Button</Button>
    </div>
  </StoryBookWrapper>
);
