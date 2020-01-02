import styled from "styled-components";

export default  styled("div")`
  height: fit-content; 
  min-height: 50vh;
  width: 30vw;
  margin: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme?.color?.main};
`;