import React, { FunctionComponent } from 'react';
import { Customer } from '../../../models/customer';
import { ProfileDetailsContainer } from './style';
import TextDetails from './TextDetails';
import { ProfileImage } from '../../atoms';

type ProfileDetailsProps = {
  customer: Customer;
  imageSrc: string;
}

const ProfileDetails: FunctionComponent<ProfileDetailsProps> = ({ customer, imageSrc }) => {
  return (
    <ProfileDetailsContainer>
      <ProfileImage src={imageSrc} />
      <TextDetails customer={customer} />
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;