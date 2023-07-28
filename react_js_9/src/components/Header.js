import { useState } from "react";
import closeMenu from "../image/close-svgrepo-com.svg";
import menu from "../image/menu-svgrepo-com.svg";
import { styled } from "styled-components";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>
          PMJ<span>DEV</span>
        </h1>
      </HeaderLeft>
      <HeaderRight>
        <img src={menu} alt="menu" />
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="project">Project</Link>
          </li> */}
        </ul>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.Header`
  padding: 17px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled.div``;

const HeaderRight = styled.nav`
  position: relative;
  img {
    width: 27px;
    object-fit: contain;
  }
`;
