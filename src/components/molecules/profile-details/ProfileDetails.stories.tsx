import React from "react";

import { StoryBookWrapper } from "../../storybook";
import ProfileDetailsComponent from "./ProfileDetails";
import { Customer } from "../../../models/customer";
import pug from "../../../assets/pug.jpg";

export default {
  title: "Molecules.Profile Details"
}

const customer: Customer = {
  username: "HappyFace",
  name: "Spot",
  email: "Pugtastic@dog.com",
  joinDate: new Date()
}

export const ProfileDetails = () => {
  return (
    <StoryBookWrapper>
      <ProfileDetailsComponent customer={customer} imageSrc={pug} />
    </StoryBookWrapper>
  )
}

