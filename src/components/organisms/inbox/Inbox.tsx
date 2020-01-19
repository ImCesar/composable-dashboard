import React, { FunctionComponent } from 'react';

import { Card, InputSubmit, MessageBox } from '../../molecules';
import { useMessages } from './useMessages';
import { Message } from '../../../models/message';

type InboxProps = {
  initMessages?: Message[];
}

const Inbox: FunctionComponent<InboxProps> = ({ initMessages }) => {
  const { messages, addMessage } = useMessages(initMessages);

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
