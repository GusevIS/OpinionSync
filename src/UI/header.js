import { Link } from "react-router-dom";
import logo from "../../src/logoOS.png";
import Button from "./button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="flex w-full justify-between items-center px-3 bg-slate-300  ">
      {/* Logo on the left side */}
      <div className="flex justify-start flex-1 z-50 mix-blend-multiply">
        <Link to="/">
          <img
            src={logo}
            alt="Opinion Sync Logo"
            className="w-12 h-12 mix-blend-multiply"
          />
        </Link>
      </div>

      <h1 class="flex items-center mt-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        OpinionSync
      </h1>
      {/* Login on the right side */}
      <div className="flex flex-1 justify-end">
        {currentPath === "/" ? (
          <Button to="/login">Přihlásit ses</Button>
        ) : (
          <Button to="/">Domů</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
