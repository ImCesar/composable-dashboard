import styled from 'styled-components';

export default styled('h2')`
  font-size: 1.8rem;
  color: ${props => props.theme?.color?.accent};
  border-bottom: 0.1rem solid ${props => props.theme?.color?.accent};
  padding: 0.8rem 1.6rem;
`;

