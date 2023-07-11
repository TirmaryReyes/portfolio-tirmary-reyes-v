import { Outlet } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="image-logo"
        src="/images/bars-solid.svg"
        alt="Hello"
        height={30}
        width={30}
      />
      <Outlet />
    </HeaderStyled>
  );
};

export default Header;
