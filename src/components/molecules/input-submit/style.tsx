import styled from 'styled-components';
import { TextInput } from '../../atoms';

export const InputSelectContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-content: space-between;

  & ${TextInput} {
    width: 75%;
  }
`;