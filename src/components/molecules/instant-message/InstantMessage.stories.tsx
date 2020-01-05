import React from "react";

import { StoryBookWrapper } from "../../storybook";
import { CardShell } from "../../atoms";
import InstantMessageComponent from './InstantMessage';

export default {
  title: "Molecules.Instant Message"
};


export const InstantMessage = () => (
  <StoryBookWrapper>
    <CardShell>
      <InstantMessageComponent sentBy="Cesar Avitia" timeSent="12:35:02">This is the Message</InstantMessageComponent>
    </CardShell>
  </StoryBookWrapper>
);

export const SentInstantMessage = () => (
  <StoryBookWrapper>
    <CardShell>
      <InstantMessageComponent sentBy="Cesar Avitia" timeSent="12:42:29" sent>This is the Message</InstantMessageComponent>
    </CardShell>
  </StoryBookWrapper>
);