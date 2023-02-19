import styled from "styled-components";

const RobotStyled = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: #3a4f41;
  color: #fff;
  padding: 10px;
  width: 390px;

  .robot {
    display: flex;

    &__name {
      margin: 0;
      font-size: 1rem;
      padding: 20px;
    }

    &__photo {
      size-adjust: inherit;
    }

    &__specs {
      display: flex;
      flex-direction: column;
      width: 390px;
      justify-content: left;
    }

    &__actions {
      display: flex;
    }
  }
`;
export default RobotStyled;
