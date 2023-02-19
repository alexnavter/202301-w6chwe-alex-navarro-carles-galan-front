interface RobotStructure {
  specs: {
    speed: number;
    endurance: number;
    creationData: string;
  };
  name: string;
  image: string;
}
export type RobotsStructure = RobotStructure[];
