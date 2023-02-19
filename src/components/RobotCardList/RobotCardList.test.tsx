import { screen, render } from "@testing-library/react";
import Wrapper from "../../mocks/wrapper";
import { RobotsStructure } from "../../types";
import RobotCardList from "./RobotCardList";

describe("Given de 'RobotCardList' component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of two robots with name 'R2d2' and 'Termomix'", () => {
      const mockRobotCardList: RobotsStructure = [
        {
          _id: "1",
          name: "R2d2",
          url: "",
          specs: {
            speed: 5,
            endurance: 8,
            creationDate: "",
          },
        },
        {
          _id: "2",
          name: "Termomix",
          url: "",
          specs: {
            speed: 5,
            endurance: 8,
            creationDate: "",
          },
        },
      ];

      jest.mock("../../store/hooks", () => ({
        ...jest.requireActual("../../store/hooks"),
        useAppSelector: () => mockRobotCardList,
      }));

      render(
        <Wrapper>
          <RobotCardList />
        </Wrapper>
      );

      const listOfRobots = screen.getAllByRole("list");

      listOfRobots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
