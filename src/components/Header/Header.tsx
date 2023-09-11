import { Outlet } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <div className="main-title">
        <span className="main-title__welcome">Hello! I am</span>
      </div>
      <div className="image-container">
        Tirmary Reyes
        <img
          className="image-container__photo"
          src="/images/photo-tirmary.svg"
          alt=""
          width={250}
          height={170}
        />
      </div>
      <Outlet />
    </HeaderStyled>
  );
};

export default Header;
