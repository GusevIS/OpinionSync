import NavLinks from "./navLinks";
import style from "./NavBar.module.css";
import Logo from "../../../src/OSLogo.png";
import { Link } from "react-router-dom";
import Profile from "./profile";

const Navigation = () => {
  return (
    <nav className={style.Navigation}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={style.Logo} />
      </Link>
      <NavLinks />
      <Profile />
    </nav>
  );
};

export default Navigation;
