import React, { FunctionComponent } from "react";

import { Customer } from "../../../models/customer";
import { Card, ProfileDetails } from "../../molecules";
import { CardBody } from "../../atoms";

type CustomerProfileProps = {
  imageSrc: string;
  customer: Customer;
}

const CustomerProfile: FunctionComponent<CustomerProfileProps> = ({ imageSrc, customer }) => (
    <Card title="Customer Profile">
      <CardBody>
        <ProfileDetails customer={customer} imageSrc={imageSrc} />
      </CardBody>
    </Card>
  );

export default CustomerProfile;
