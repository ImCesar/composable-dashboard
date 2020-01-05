import React from "react";

import { StoryBookWrapper } from "../../storybook";
import NavBarComponent from "./Navbar";

export default {
  title: "Atoms.Navbar"
};

export const Card = () => (
  <StoryBookWrapper>
    <NavBarComponent />
  </StoryBookWrapper>
);
