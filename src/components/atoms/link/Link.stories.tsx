import React from "react";

import { StoryBookWrapper } from "../../storybook";
import LinkComponent from "./Link";

export default {
  title: "Atoms.Link"
};

export const Link = () => (
  <StoryBookWrapper>
    <LinkComponent>Click Me</LinkComponent>
  </StoryBookWrapper>
);