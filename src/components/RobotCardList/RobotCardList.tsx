import { useEffect } from "react";
import useApi from "../../hook/useApi";
import { useAppSelector } from "../../store/hooks";
import RobotCard from "../RobotCard/RobotCard";
import RobotCardListStyled from "./RobotCardListStyled";

const RobotCardList = (): JSX.Element => {
  const { getRobots } = useApi();

  const robots = useAppSelector((state) => state.robots);

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <RobotCardListStyled className="robot-list">
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotCardListStyled>
  );
};

export default RobotCardList;
