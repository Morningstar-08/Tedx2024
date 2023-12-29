import tedxlogo from "../../assets/TedxLogo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <img className="title--logo" src={tedxlogo} />
      <ul className="nav--pages">
        <CustomLink to="/Home">HOME</CustomLink>
        <CustomLink to="/Speakers">SPEAKERS</CustomLink>
        <CustomLink to="/Sponsors">SPONSORS</CustomLink>
        <CustomLink to="/Rewind">REWIND</CustomLink>
        <CustomLink to="/Merch">MERCH</CustomLink>
        <CustomLink to="/About-us">ABOUT</CustomLink>
      </ul>
      <div className="nav--social">
        <ul className="nav--social-icons">
          <li>
            <a href="">
              <FaInstagram className="instagram" />
            </a>
          </li>
          <li>
            <a href="">
              <FaYoutube className="youtube" />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebook className="facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter className="twitter" />
            </a>
          </li>
        </ul>

        {/* <div className="hamburger-menu">
                    <a href="#">
                        <GiHamburgerMenu />
                    </a>
                </div> */}
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
