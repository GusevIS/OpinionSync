import { Typography } from "@material-tailwind/react";
import "../App.css";
import "../styles/Footer.css";
import {Link} from "react-router-dom";

export function Footer() {
  return (
      <footer className="w-full bg-white p-8">
        <div className="footer-list-container">
          <ul className="footer-list">
            <li>
              <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="text-center font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                  <Link to="/"> Home </Link>
              </Typography>
            </li>
            <li>
              <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="text-center font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                  <Link to="/"> About us </Link>
              </Typography>
            </li>
            <li>
              <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="text-center font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                  <Link to="/"> FAQ </Link>
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023 OpinionSync
        </Typography>
      </footer>
  );
}

export default Footer;