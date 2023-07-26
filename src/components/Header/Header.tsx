import { Outlet } from "react-router-dom";

const Header = (): React.ReactElement => {
  return (
    <>
      <span>Hello!</span>
      <h1>I am Tirmary Reyes</h1>
      <span>Full stack developer</span>
      <img src="/images/github.svg" alt="github logo" height={30} width={30} />
      <img
        src="/images/linkedin.svg"
        alt="linkedin logo"
        height={30}
        width={30}
      />
      <img
        src="/images/twitter.svg"
        alt="twitter logo"
        height={30}
        width={30}
      />

      <Outlet />
    </>
  );
};

export default Header;
