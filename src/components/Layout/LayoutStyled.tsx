import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .app-header {
    &__title {
      display: flex;
      font-family: helvetica;
      font-weight: 800;
      font-size: 40px;
    }
  }
`;

export default LayoutStyled;
