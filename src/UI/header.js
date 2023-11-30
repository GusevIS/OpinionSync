import { Link } from "react-router-dom";
import logo from "../../src/logoOS.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center w-full px-3 bg-slate-300">
      {/* Logo on the left side */}
      <Link to="/">
        <div className="flex items-center z-50 mix-blend-multiply">
          <img
            src={logo}
            alt="Opinion Sync Logo"
            className="w-12 h-12 mix-blend-multiply"
          />
        </div>
      </Link>

      {/* Login on the right side */}
      <div class="relative flex justify-end items-center">
        <div class="absolute w-12 h-12 bg-slate-900 rounded-full"></div>
        <button class="text-black bg-transparent hover:underline mt-16">
          <Link to="/login"> Log in </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
