import NavLinks from "./navLinks";
import style from "./NavBar.module.css";
import Logo from "../../../src/OSLogo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const HamburgerIcon = (
    <AiOutlineMenu
      className={style.Hamburger}
      color="white"
      size="40px"
      onClick={toggleMenu}
    />
  );

  const CloseHamburgerIcon = (
    <AiOutlineClose
      className={style.Hamburger}
      color="white"
      size="40px"
      onClick={toggleMenu}
    />
  );
  //zavře mobile navigation afterClick
  const CloseMobileMenu = () => setMenuOpen(false);

  return (
    <nav className={style.MobileNavigation}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={style.Logo} />
      </Link>

      {menuOpen ? CloseHamburgerIcon : HamburgerIcon}
      {menuOpen && (
        <NavLinks isMobile={true} onCloseMobileMenu={CloseMobileMenu} />
      )}
    </nav>
  );
}

export default MobileNavigation;
