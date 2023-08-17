import { Outlet } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <div className="main-title">
        <span className="main-title__msg ">Hi I am</span>
        <h1 className="main-title__name">Tirmary Reyes</h1>
        <span className="main-title__profession">Systems Engineer </span>
        <span className="main-title__profession">Full stack developer</span>
      </div>
      <div className="image-logo">
        <a
          href="https://github.com/TirmaryReyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="image-logo__github"
            src="/images/github-logo.svg"
            alt="github logo"
            height={48}
            width={48}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tirmary-reyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="image-logo__linkedin"
            src="/images/linkedin.svg"
            alt="linkedin logo"
            height={48}
            width={48}
          />
        </a>
        <a
          href="https://twitter.com/TirmaryR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="image-logo__twitter"
            src="/images/twitter.svg"
            alt="twitter logo"
            height={48}
            width={48}
          />
        </a>
      </div>

      <Outlet />
    </HeaderStyled>
  );
};

export default Header;
