import styled from 'styled-components';

type MessageProps = {
  sent?: boolean;
}

export const MessageContainer = styled('div')<MessageProps>`
  display: flex;
  width: 40rem;
  flex-direction: column;
  align-items: ${({sent})=> sent ? 'flex-end' : 'flex-start'};
`;

export const MessageData = styled('p')<MessageProps>`
  display: flex;
  font-size: 1.2rem;
  justify-content: ${({sent})=> !sent ? 'flex-end' : 'flex-start'};
  opacity: 0.7;
  padding: 0;
  margin: 0;
`;