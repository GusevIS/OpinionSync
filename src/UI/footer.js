import { Typography } from "@material-tailwind/react";
import "../App.css";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export function Footer() {
    const linkStyle = {
        textDecoration: 'none',
        fontFamily: 'Sen, sans-serif',
        color: '#0A2440'
    };
  return (
      <footer className="footer p-8">
        <div className="footer-list-container">
          <ul className="footer-list">
            <li>
              <Typography
                  as="a"
                  href="#"
                  textDecoration='none'
                  style={linkStyle}
                  className="text-center font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Home
              </Typography>
            </li>
            <li>
              <Typography
                  as="a"
                  href="#"
                  style={linkStyle}
                  className="text-center font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About us
              </Typography>
            </li>
            <li>
              <Typography
                  as="a"
                  href="#"
                  style={linkStyle}
                  className="text-center font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                FAQ
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="hr my-3" />
        <Typography color='#EF7068' className="small-text text-center font-normal">
          &copy; 2023 OpinionSync
        </Typography>
      </footer>
  );
}

export default Footer;
