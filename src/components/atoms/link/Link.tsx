import styled from 'styled-components';

export default styled('a')` 
  color: ${props => props.theme?.color?.secondary};
  font-size: 1.4rem;
`;