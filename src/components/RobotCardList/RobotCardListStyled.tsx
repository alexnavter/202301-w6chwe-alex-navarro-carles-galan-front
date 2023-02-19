import styled from "styled-components";

const RobotCardListStyled = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  flex-direction: column;
  gap: 50px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    flex-flow: wrap;
    justify-content: space-around;
  }
`;

export default RobotCardListStyled;
