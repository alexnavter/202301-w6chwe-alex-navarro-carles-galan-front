import RobotCardList from "../RobotCardList/RobotCardList";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="app-header">
        <h1 className="app-header__title">Robots App</h1>
      </header>
      <RobotCardList />
    </LayoutStyled>
  );
};

export default Layout;
