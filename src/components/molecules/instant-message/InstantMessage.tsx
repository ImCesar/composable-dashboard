import React, { FunctionComponent, useContext } from 'react';
import  { ThemeContext } from 'styled-components';

import { Message } from '../../atoms';
import { MessageContainer, MessageData } from './style';

type InstantMessageProps = {
  sent?: boolean;
  sentBy: string;
  timeSent: string;
}

const InstantMessage: FunctionComponent<InstantMessageProps> = ({ sentBy, timeSent, sent, children }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <MessageContainer sent={sent}>
      <div>
        <MessageData>{sentBy} - {timeSent}</MessageData>
        <Message 
          color={sent ? themeContext?.color?.accent : ""} 
          backgroundColor={sent ? themeContext?.color?.background : ""}
        >
          {children}
        </Message>
      </div>
    </MessageContainer>
  )
} 

export default InstantMessage;