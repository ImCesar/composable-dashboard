import React, { FunctionComponent } from "react";

import { Card, CardTitle } from '../../atoms';
import { Customer } from "../../../models/customer";
import { ProfileDetails } from "../../molecules";

type CustomerProfileProps = {
  imageSrc: string;
  customer: Customer;
}

const CustomerProfile: FunctionComponent<CustomerProfileProps> = ({ imageSrc, customer}) => {
  return (
    <Card>
      <CardTitle>Customer Profile</CardTitle>
      <ProfileDetails customer={customer} imageSrc={imageSrc} />
    </Card>
  );
};

export default CustomerProfile;
