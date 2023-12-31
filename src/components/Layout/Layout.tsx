import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import NavBar from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import MyStack from "../MyStack/MyStack";
import MyProject from "../MyProject/MyProject";
import ProfessionalOpinions from "../ProfessionalOpinions/ProfessionalOpinions";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <NavBar />
      <Header />
      <AboutMe />
      <MyStack />
      <MyProject />
      <ProfessionalOpinions />
      <Contact />
      <Footer />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
