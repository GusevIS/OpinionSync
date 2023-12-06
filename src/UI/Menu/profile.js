import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import ProfilePic from "../../../src/profile.png";

const Profile = () => {
  return (
    <div className={style.Profile}>
      {/* <div className="border-circle border-cyan-500 border-spacing-4"> </div> */}
      <img src={ProfilePic} alt="Logo" className={style.ProfilePic} />
      <Link
        to="/login"
        className="mt-9 text-white no-underline hover:underline"
      >
        Log in
      </Link>
    </div>
  );
};

export default Profile;
