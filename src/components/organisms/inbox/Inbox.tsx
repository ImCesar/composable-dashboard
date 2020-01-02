import React, { FunctionComponent, ComponentProps } from 'react';
import styled from 'styled-components';

import { Card, CardTitle } from '../../atoms';
import { InputSelect, MessageBox } from '../../molecules';
import { useInbox } from './useInbox';
import { message } from '../../molecules/models/message';

const Inbox: FunctionComponent = () => {
  const { messages, addMessage } = useInbox();

  const handleInputSubmit = (text: string) => {
    const message: message = {
      id: Math.random().toString(),
      sentFromUser: true,
      sentFrom: "Cesar Avitia",
      timeStamp: new Date(),
      text,
    }

    addMessage(message);
  }

  return (
    <Card>
      <CardTitle>Inbox</CardTitle>
      <MessageBox messages={messages}/>
      <InputSelect handleSubmit={handleInputSubmit}/>
    </Card>
  )
  
}

export default Inbox;
