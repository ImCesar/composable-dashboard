import styled from 'styled-components';

type MessageProps = {
  backgroundColor?: string;
  color?: string;
}

const Message = styled('p')<MessageProps>`
  font-size: 1.4rem;
  padding: 0.8rem 0.8rem;
  background-color: ${({theme, backgroundColor}) => backgroundColor ? backgroundColor : theme?.color?.accent};
  color: ${({theme, color})=> color ? color : theme?.color?.main};
  border-radius: 0.4rem;
  margin: 0.4rem 0 0.8rem 0;
`;

export default Message;