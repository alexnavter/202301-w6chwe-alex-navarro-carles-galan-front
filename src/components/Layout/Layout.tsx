import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="app-header">
        <h1 className="app-header__title">Robots App</h1>
      </header>
    </LayoutStyled>
  );
};

export default Layout;
