import styled from "styled-components";

export default  styled("div")`
  height: fit-content; 
  width: fit-content;
  min-width: 45rem;
  min-height: 10rem;
  margin: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme?.color?.main};
`;