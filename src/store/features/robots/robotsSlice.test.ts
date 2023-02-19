import { RobotsStructure, RobotStructure } from "../../../types";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given a robotsReducer function", () => {
  describe("When it receives a list with two robots named r2d2 and termomix and a load r2d2 action", () => {
    const R2d2: RobotStructure = {
      specs: {
        speed: 7,
        endurance: 8,
        creationDate: "",
      },
      name: "",
      image: "",
    };
    const Termomix: RobotStructure = {
      specs: {
        speed: 1,
        endurance: 10,
        creationDate: "",
      },
      name: "",
      image: "",
    };

    const robots: RobotsStructure = [R2d2, Termomix];
    test("Then it should return a list with both robots", () => {
      const loadRobotsAction = loadRobotsActionCreator(robots);
      const expectedRobotsToLoad: RobotsStructure = robots;

      const newRobots = robotsReducer([], loadRobotsAction);

      expect(newRobots).toStrictEqual(expectedRobotsToLoad);
    });
  });
});
