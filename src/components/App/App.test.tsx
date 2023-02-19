import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/wrapper";

import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Robots'", () => {
      const headingText = "Robots App";

      render(
        <Wrapper>
          <App />
        </Wrapper>
      );

      const expectedHeadingText = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeadingText).toBeInTheDocument();
    });
  });
});
