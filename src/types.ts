export interface RobotStructure {
  _id: string;
  name: string;
  url: string;
  specs: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}
export type RobotsStructure = RobotStructure[];
