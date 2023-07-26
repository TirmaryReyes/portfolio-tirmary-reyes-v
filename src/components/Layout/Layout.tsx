import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import NavBar from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  return (
    <>
      <LayoutStyled>
        <NavBar />
        <Header />
        <AboutMe />
        <Outlet />
      </LayoutStyled>
    </>
  );
};

export default Layout;
