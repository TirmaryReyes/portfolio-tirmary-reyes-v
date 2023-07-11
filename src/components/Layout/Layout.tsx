import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <img
        className="image-logo"
        src="/images/bars-solid.svg"
        alt="Hello"
        height={30}
        width={30}
      />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
