import React from "react";

import { StoryBookWrapper } from "../../storybook";
import CustomerProfileComponent from './CustomerProfile';
import pug from "../../../assets/pug.jpg";
import { Customer } from "../../../models/customer";

export default {
  title: "Organisms.Customer Profile"
};

const customer: Customer = {
  username: "HappyFace",
  name: "Spot",
  email: "Pugtastic@dog.com",
  joinDate: new Date()
}

export const CustomerProfile = () => (
  <StoryBookWrapper>
    <CustomerProfileComponent customer={customer} imageSrc={pug} />
  </StoryBookWrapper>
);

