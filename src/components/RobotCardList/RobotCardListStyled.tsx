import styled from "styled-components";

const RobotCardListStyled = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 330px);
  flex-direction: column;
  gap: 35px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 330px);
    flex-flow: wrap;
    justify-content: space-around;
  }
`;

export default RobotCardListStyled;
