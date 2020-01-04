import styled from 'styled-components';

export const FieldContainer = styled('div')` 
  display: flex;
  width: fit-content;

  * {
    display: flex;
  }

  & label {
    margin-right: 0.8rem;
    align-items: center;
  }
`;