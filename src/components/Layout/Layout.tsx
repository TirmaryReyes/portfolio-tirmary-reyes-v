import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import NavBar from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import MyStack from "../MyStack/MyStack";
import MyProject from "../MyProject/MyProject";

const Layout = (): React.ReactElement => {
  return (
    <>
      <LayoutStyled>
        <NavBar />
        <Header />
        <AboutMe />
        <MyStack />
        <MyProject />
        <Outlet />
      </LayoutStyled>
    </>
  );
};

export default Layout;
