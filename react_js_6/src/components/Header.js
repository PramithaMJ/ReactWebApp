import { useState } from "react";
import closeMenu from "../image/close-svgrepo-com.svg";
import menu from "../image/menu-svgrepo-com.svg";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <header className="header_container">
      <h1>
        PMJ <span>DEV</span>
      </h1>
      <nav>
        <ol>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
        </ol>
        <img
          className="header___menuClick"
          src={menu}
          alt="menu"
          style={{
            width: "30px",
            cursor: "pointer",
          }}
          onClick={() => {
            setMenuClick((pre) => (!pre ? true : pre));
          }}
        />
        <ul
          style={{
            right: `${menuClick ? "-20px" : "-250px"}`,
            //to hide overflow 
            display:`${menuClick? "flex":"none"}` 
          }}
        >
          <div
            className="header___menuClose"
            onClick={() => {
              setMenuClick((pre) => (pre ? false : pre));
            }}
          >
            <img src={closeMenu} alt="close image" />
          </div>
          <div className="header__menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

//Stop at 07:24:47
