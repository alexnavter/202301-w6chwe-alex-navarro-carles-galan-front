import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .app-header {
    display: flex;
    width: 100%;
    justify-content: center;

    &__title {
      display: flex;
      font-family: monospace;
      font-weight: 800;
      font-size: 70px;
      color: #fff;
      padding: 0 0 35px;
    }
  }
`;

export default LayoutStyled;
