import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .app-header {
    &__title {
      display: flex;
      font-family: monospace;
      font-weight: 800;
      font-size: 40px;
      color: #fff;
      padding: 15px 0 20px;
    }
  }
`;

export default LayoutStyled;
