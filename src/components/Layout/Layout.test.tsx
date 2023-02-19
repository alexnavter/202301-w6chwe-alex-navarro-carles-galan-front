import Wrapper from "../../mocks/wrapper";
import GlobalStyles from "../../styles/GlobalStyles";
import Layout from "./Layout";
import { render, screen } from "@testing-library/react";

describe("Given a Layout", () => {
  describe("When it is rendered in App", () => {
    test("Then it render a header with a title in a heading with the text 'Robots App'", () => {
      const appTitle = "Robots App";

      render(
        <Wrapper>
          <GlobalStyles />
          <Layout />
        </Wrapper>
      );

      const expectedTitle = screen.getByRole("heading", { name: appTitle });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
