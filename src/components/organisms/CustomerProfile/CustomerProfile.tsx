import React, { FunctionComponent } from "react";

import { Customer } from "../../../models/customer";
import { Card, ProfileDetails } from "../../molecules";

type CustomerProfileProps = {
  imageSrc: string;
  customer: Customer;
}

const CustomerProfile: FunctionComponent<CustomerProfileProps> = ({ imageSrc, customer }) => (
    <Card title="Customer Profile">
      <ProfileDetails customer={customer} imageSrc={imageSrc} />
    </Card>
  );

export default CustomerProfile;
