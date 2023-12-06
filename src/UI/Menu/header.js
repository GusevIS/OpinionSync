import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";
import style from "./NavBar.module.css";
// import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <div className={style.NavBar}>
        <Navigation />
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Header;

// <header className="header px-4 bg-slate-300">
//   {/* Logo on the left side */}
//   <Link to="/">
//     <div className="flex items-center z-50 mix-blend-multiply">
//       <img
//         src={logo}
//         alt="Opinion Sync Logo"
//         className="w-36 h-36 mix-blend-multiply"
//       />
//     </div>
//   </Link>

//   {/* Login on the right side */}
//   <div className="relative text-center">
//     <div className="border-circle absolute"></div>
//     <button className="small-text mt-16 py-1 relative">
//       <Link to="/login" style={linkStyle}>
//         Log in
//       </Link>
//     </button>
//   </div>
// </header>

// const linkStyle = {
//   textDecoration: "none",
//   color: "inherit",
// };
