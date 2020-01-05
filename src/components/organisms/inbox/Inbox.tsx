import React, { FunctionComponent } from 'react';

import { Card, InputSubmit, MessageBox } from '../../molecules';
import { useInbox } from './useInbox';
import { Message } from '../../../models/message';

const Inbox: FunctionComponent = () => {
  const { messages, addMessage } = useInbox();

  const handleInputSubmit = (text: string) => {
    const message: Message = {
      id: Math.random().toString(),
      sentFromUser: true,
      sentFrom: "Cesar Avitia",
      timeStamp: new Date(),
      text,
    }

    addMessage(message);
  }

  return (
    <Card title="inbox">
      <MessageBox messages={messages}/>
      <InputSubmit handleSubmit={handleInputSubmit}/>
    </Card>
  )
  
}

export default Inbox;
