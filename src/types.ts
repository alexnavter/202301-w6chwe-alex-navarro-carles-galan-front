export interface RobotStructure {
  specs: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
  name: string;
  image: string;
}
export type RobotsStructure = RobotStructure[];
