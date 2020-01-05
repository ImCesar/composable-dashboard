import React, { FunctionComponent } from 'react';
import { CardShell, CardTitle, CardBody } from '../../atoms';

type CardProps = {
  title: string;
}

const Card: FunctionComponent<CardProps> = ({ children, title }) => {
  return (
    <CardShell>
      <CardTitle>{title}</CardTitle>
      <CardBody>{children}</CardBody>
    </CardShell>
  )
};

export default Card;