import React from "react";

import { StoryBookWrapper } from "../../storybook";
import InboxComponent from "./Inbox";

export default {
  title: "Organisms.Inbox"
};

export const Inbox = () => (
  <StoryBookWrapper>
    <InboxComponent />
  </StoryBookWrapper>
);
