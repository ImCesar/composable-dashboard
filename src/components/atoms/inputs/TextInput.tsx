import styled from 'styled-components';

export default styled('input').attrs({ type: 'text' })`
  width: 100%;
  font-size: 1.4rem;
  border: 0.1rem solid ${props => props.theme?.color?.accent};
  border-radius: 0.5rem;
  padding: 0.8rem;
  background-color: ${props => props.theme?.color?.main};
`;