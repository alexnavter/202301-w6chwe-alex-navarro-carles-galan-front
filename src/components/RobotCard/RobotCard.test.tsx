import { render, screen } from "@testing-library/react";
import { RobotStructure } from "../../types";
import RobotCard from "./RobotCard";

describe("Given the RobotCardComponent", () => {
  const robotCard: RobotStructure = {
    _id: "1",
    name: "R2d2",
    url: "",
    specs: {
      speed: 5,
      endurance: 8,
      creationDate: "",
    },
  };

  describe("When rendered", () => {
    test("Then is should show the name of the robot", () => {
      const expectedName = "R2d2";

      render(<RobotCard robot={robotCard} />);
      const text = screen.getByRole("heading", { name: expectedName });

      expect(text).toBeInTheDocument();
    });

    test("Then it should show and image of a robot", () => {
      const expectedAlternativeText = `${robotCard.name} robot`;

      render(<RobotCard robot={robotCard} />);
      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
