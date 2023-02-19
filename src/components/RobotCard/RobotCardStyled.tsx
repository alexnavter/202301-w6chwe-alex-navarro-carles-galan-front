import styled from "styled-components";

const RobotStyled = styled.article`
  display: flex;
  flex-direction: column;

  min-height: 350px;
  width: 330px;

  border-radius: 15px;
  background-color: #fff;

  justify-content: space-between;

  color: black;

  .robot {
    display: flex;

    &__photo {
      justify-items: center;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }

  .robot-body {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 0 18px 18px;

    font-family: monospace;
    font-size: 0 1rem;

    justify-content: flex-start;

    &__title {
      display: flex;
      margin-top: 10px;
      font-family: monospace;
      font-size: 1.5rem;
    }

    &__specs {
      display: flex;
      flex-direction: column;
      padding-inline-start: 0;
    }
  }

  .specs {
    display: flex;
    font-size: 1rem;
    margin-top: 10px;
    gap: 10px;

    &__speed {
      display: flex;
      justify-content: space-between;
    }

    &__endurance {
      display: flex;
      justify-content: space-between;
    }

    &__creation-date {
      display: flex;
      flex-direction: column;
      font-weight: 800;
    }
  }

  .creation-date {
    &__title {
      font-weight: 800;
    }

    &__date {
      font-weight: 400;
      font-size: 0.8rem;
      color: #565a97;
    }
  }

  .speed {
    &__value {
      font-size: 1.2rem;
      font-weight: 800;
    }
  }

  .endurance {
    &__value {
      font-size: 1.2rem;
      font-weight: 800;
    }
  }
`;
export default RobotStyled;
