import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="flex w-full pr-3 justify-end items-center">
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
