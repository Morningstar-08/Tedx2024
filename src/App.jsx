import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Tickets from "./components/Tickets/Tickets.jsx";
import Sponsors from "./components/Sponsors/Sponsors.jsx";
import Speakers from "./components/Speakers/Speakers.jsx";
import Aboutus from "./components/Aboutus/Aboutus.jsx";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import Rewind from "./components/Rewind/Rewind.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Speakers" element={<Speakers />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/Rewind" element={<Rewind />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/About-us" element={<Aboutus />} />
        </Routes>

        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>
              <img
                src="./TedxLogo.png"
                alt=""
                srcset=""
                className="logo-footer"
              />
            </h3>

            <p className="footer-links">
              <a href="#" className="link-1">
                Home
              </a>

              <a href="#">Speakers</a>

              <a href="#">Sponsors</a>

              <a href="#">Rewind</a>

              <a href="#">Tickets</a>

              <a href="#">About Us</a>
            </p>

            <p className="footer-company-name">Company Name © 2015</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>NIIT University Neemrana, Rajasthan </span>
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>
                Contact Us: +91 96771 97911 <br /> S. Aadhira <br />
                Organiser(Licensee)
              </p>
            </div>

            <div>
              <i className="FafaEnvelope"></i>
              <p>
                <a href="mailto:tedx@niituniversity.in">
                  tedx@niituniversity.in
                </a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the TEDXNIITUniversity</span>© TEDxNIITUniversity
              2023. All rights reserved. This independent TEDx event is operated
              under license from TED.
            </p>

            <div className="footer-icons">
              <a href="https://www.youtube.com/@TED">
                <FaYoutube className="youtube" />
              </a>
              <a href="#">
                <FaTwitter className="twitter" />
              </a>
              <a href="https://www.linkedin.com/school/tedxniituniversity/mycompany/">
                <FaLinkedin className="linkedin" />
              </a>
              <a href="https://www.instagram.com/tedxniituniversity/">
                <FaInstagram className="instagram" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
