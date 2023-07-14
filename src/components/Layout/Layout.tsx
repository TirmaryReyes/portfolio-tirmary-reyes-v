import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import NavBar from "../NavBar/NavBar";

const Layout = (): React.ReactElement => {
  return (
    <>
      <LayoutStyled>
        <NavBar />
        <Outlet />
      </LayoutStyled>
    </>
  );
};

export default Layout;
