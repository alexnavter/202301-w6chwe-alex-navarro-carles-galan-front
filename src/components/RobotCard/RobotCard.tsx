import { RobotStructure } from "../../types";
import RobotStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    _id,
    name,
    url,
    specs: { speed, endurance, creationDate },
  },
}: RobotCardProps): JSX.Element => {
  return (
    <>
      <RobotStyled className="robot" key={_id}>
        <img
          className="robot__photo"
          src={url}
          alt={`${name} robot`}
          height={250}
          width={330}
        />
        <div className="robot-body">
          <h1 className="robot-body__title">{name}</h1>
          <ul className="robot-body__specs specs">
            <li className="specs__speed speed">
              <span className="speed__title">Speed</span>
              <span className="speed__value">{speed}</span>
            </li>
            <li className="specs__endurance endurance">
              <span className="endurance__title">Endurance</span>
              <span className="endurance__value">{endurance}</span>
            </li>
            <li className="specs__creation-date creation-date">
              <span className="creation-date__title">Created on:</span>
              <span className="creation-date__date">{creationDate}</span>
            </li>
          </ul>
        </div>
      </RobotStyled>
    </>
  );
};
export default RobotCard;
