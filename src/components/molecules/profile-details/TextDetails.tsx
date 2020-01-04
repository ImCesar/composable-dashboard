import React, { FunctionComponent } from 'react';
import { Customer } from '../../../models/customer';
import  Field from '../field/Field';

type ProfileDetailsProps = {
  customer: Customer;
}
const TextDetails: FunctionComponent<ProfileDetailsProps> = ({ customer }) => {
  let formattedDate = customer.joinDate.toISOString();
  formattedDate = formattedDate.slice(0, formattedDate.indexOf("T"));

  return (
    <div>
      <Field label="Name" value={customer.name} />
      <Field label="username" value={customer.username} />
      <Field label="email" value={customer.email} />
      <Field label="Member Since"><p>{formattedDate}</p></Field>
    </div>
  );
};

export default TextDetails;