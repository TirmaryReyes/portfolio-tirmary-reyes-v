import MyStackStyled from "./MyStackStyled";

const MyStack = (): React.ReactElement => {
  return (
    <MyStackStyled>
      <span className="title-myStack">My Stack</span>
      <div className="logo-stack">
        <img
          src="/images/javascript.svg"
          alt="javascript logo"
          height={50}
          width={50}
        />
        <img
          src="/images/typeScript.svg"
          alt="typeScript logo"
          height={50}
          width={50}
        />
        <img src="/images/react.svg" alt="react logo" height={50} width={50} />
        <img src="/images/redux.svg" alt="redux logo" height={50} width={50} />
        <img src="/images/css.svg" alt="css logo" height={50} width={50} />
        <img src="/images/html.svg" alt="html logo" height={50} width={50} />
        <img
          src="/images/nodejs.svg"
          alt="node.js logo"
          height={60}
          width={48}
        />
        <img src="/images/figma.svg" alt="figma logo" height={65} width={50} />
        <img src="/images/sass.svg" alt="sass logo" height={50} width={50} />
        <img src="/images/next.svg" alt="next logo" height={50} width={50} />
        <img
          src="/images/mongodb.svg"
          alt="mongoDB logo"
          height={48}
          width={80}
        />
        <img src="/images/jest.svg" alt="jest logo" height={50} width={50} />
        <img src="/images/vite.svg" alt="vite logo" height={50} width={50} />
        <img src="/images/git.svg" alt="git logo" height={50} width={50} />
        <img
          src="/images/githubLogo.svg"
          alt="github logo"
          height={50}
          width={50}
        />
      </div>
    </MyStackStyled>
  );
};

export default MyStack;
