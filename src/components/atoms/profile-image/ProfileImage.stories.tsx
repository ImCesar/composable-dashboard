import React from "react";

import { StoryBookWrapper } from "../../storybook";
import ProfileImageComponent from './ProfileImage';
import pug from '../../../assets/pug.jpg';

export default {
  title: "Atoms.Profile Image"
};

export const ProfileImage = () => (
  <StoryBookWrapper>
    <ProfileImageComponent src={pug} />
  </StoryBookWrapper>
);
