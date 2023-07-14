import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding: 1px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    margin-right: 20px;
  }

  .burger-menu {
    &__links {
      color: white;
      position: absolute;
      top: -700px;
      left: -200px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;

      a {
      }
      @media (min-width: 760px) {
      }
    }

    &__links.active {
      width: 100vh;
      display: block;
      position: absolute;
      margin-right: auto;
      margin-left: auto;
      top: 150px;
      right: 0;
      text-align: center;
      a {
        color: #000;
        font-size: 2rem;
        display: block;
      }
      @media (min-width: 768px) {
        position: initial;
        margin: 0;
        a {
          font-size: 16px;
          color: #fff;
          display: inline;
        }
      }
    }

    &__button {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
`;

export default NavBarStyled;
