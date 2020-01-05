import React from "react";

import { StoryBookWrapper } from "../../storybook";
import MessageBoxComponent from './MessageBox';
import { Message } from '../../../models/message';
import { CardShell } from "../../atoms";

export default {
  title: "Molecules.Message Box"
};

const messages: Message[] = [
  {
    id: '0',
    text: "Hey how's it going?",
    sentFromUser: false,
    sentFrom: "Cesar",
    timeStamp: new Date()

  },
  {
    id: '1',
    text: "It's going good, and you?",
    sentFromUser: true,
    sentFrom: "Dog",
    timeStamp: new Date()
  },
  {
    id: '2',
    text: "Going good too, want to go to a movie?",
    sentFromUser: false,
    sentFrom: "Cesar",
    timeStamp: new Date()
  },
]

export const MessageBox = () => (
  <StoryBookWrapper>
    <CardShell>
      <MessageBoxComponent messages={messages}/>
    </CardShell>
  </StoryBookWrapper>
);