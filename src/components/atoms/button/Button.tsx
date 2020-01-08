import styled from "styled-components";

export default styled("button")`
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border: none;
  outline: none;
  border-radius: 1rem;
  color: ${props => props.theme?.color?.accent};
  background-color: ${props => props.theme?.color?.secondary};
  cursor: pointer;
`;
