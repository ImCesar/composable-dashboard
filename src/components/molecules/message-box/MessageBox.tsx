import React, { FunctionComponent, useRef, useEffect } from 'react';

import { MessageBoxContainer } from './style';
import { Message } from '../../../models/message';
import InstantMessage from '../instant-message/InstantMessage';

type MessageBoxProps = {
  messages: Message[];
}

const MessageBox: FunctionComponent<MessageBoxProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const bottom = bottomRef.current;
    if (bottom) {
      bottom.scrollIntoView({ behavior: "smooth"});
    }
  }, [messages, bottomRef])

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
      <div ref={bottomRef} /> 
    </MessageBoxContainer>
  );
}

export default MessageBox;