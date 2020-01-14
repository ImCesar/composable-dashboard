import styled from 'styled-components';

type TabProps = {
  selected: boolean;
}

export const TabsContainer = styled('div')` 
  display: flex;
`;

export const Tab = styled('div')<TabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0.4rem 1.6rem;
  background-color: ${props => props.selected ? props.theme.color.background : props.theme?.color?.secondary};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 1px solid ${props => props.theme?.color?.accent};
  border-bottom: none;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const TabPanelContainer = styled('div')<TabProps>` 
  display: ${props => props.selected ? 'block' : 'none'};
  border: 1px solid ${props => props.theme?.color?.accent};
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 0.8rem 1.6rem;
`;