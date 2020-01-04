import React, { FunctionComponent } from "react";

import { Label } from '../../atoms';
import { FieldContainer } from './style';

type FieldProps = {
  label: string;
  value?: string;
}

const Field: FunctionComponent<FieldProps> = ({ label, value, children }) => {
  return (
    <FieldContainer>
      <Label>{label}: </Label>
      {value ? <><p>{value}</p>{children}</> : children}
    </FieldContainer>
  )
} 

export default Field;