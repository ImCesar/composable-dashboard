import React, { FunctionComponent } from 'react';

import { MessageBoxContainer } from './style';
import { message } from '../models/message';
import InstantMessage from '../instant-message/InstantMessage';

type MessageBoxProps = {
  messages: message[];
}

const MessageBox: FunctionComponent<MessageBoxProps> = ({ messages }) => {
  return (
    <MessageBoxContainer>
      {messages.map(message => {
        let formattedTime: string = message.timeStamp?.toTimeString() ?? '';
        formattedTime = formattedTime.slice(0, formattedTime.indexOf(' '));

        return (
          <InstantMessage 
            key={message.id}
            sentBy={message.sentFrom ?? 'Unknown'} 
            timeSent={formattedTime} 
            sent={message.sentFromUser}
          >
            {message.text}
          </InstantMessage>
        )
      })}
    </MessageBoxContainer>
  );
}

export default MessageBox;