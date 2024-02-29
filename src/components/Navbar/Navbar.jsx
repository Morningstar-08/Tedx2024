import tedxlogo from "../../assets/TedxLogo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="nav abril-fatface-regular">
      <img className="title--logo" src={tedxlogo} />
      <ul
        className={
          showMediaIcons ? "nav--pages mobile-menu-link" : "nav--pages"
        }
      >
        <CustomLink to="/Home">HOME</CustomLink>
        <CustomLink to="/Speakers">SPEAKERS</CustomLink>
        <CustomLink to="/Sponsors">SPONSORS</CustomLink>
        <CustomLink to="/Rewind">REWIND</CustomLink>
        <CustomLink to="/Tickets">TICKETS</CustomLink>
        <CustomLink to="/About-us">ABOUT</CustomLink>
      </ul>
      <div className="nav--social">
        <ul className="nav--social-icons">
          <li>
            <a
              href="https://www.instagram.com/tedxniituniversity/"
              target="_blank"
            >
              <FaInstagram className="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@TED" target="_blank">
              <FaYoutube className="youtube" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/school/tedxniituniversity/mycompany/"
              target="_blank"
            >
              <FaLinkedin className="linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter className="twitter" />
            </a>
          </li>
        </ul>

        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!setShowMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
