import React from "react";

import { StoryBookWrapper } from "../../storybook";
import MessageComponent from "./Message";

export default {
  title: "Atoms.Message"
};

export const Message = () => (
  <StoryBookWrapper>
    <div style={{ padding: "0.8rem" }}>
      <MessageComponent>This is a message from someone</MessageComponent>
    </div>
  </StoryBookWrapper>
);

export const CustomColorMessage = () => (
  <StoryBookWrapper background="white">
    <div style={{ padding: "0.8rem" }}>
      <MessageComponent color="white" backgroundColor="black">This is a message I sent</MessageComponent>
    </div>
  </StoryBookWrapper>
);
