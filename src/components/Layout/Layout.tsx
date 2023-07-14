import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import NavBar from "../NavBar/NavBar";
import BurguerButton from "../BurgerButton/BurgerButton";

const Layout = (): React.ReactElement => {
  return (
    <>
      <LayoutStyled>
        <NavBar />
        <BurguerButton />
        <Outlet />
      </LayoutStyled>
    </>
  );
};

export default Layout;
