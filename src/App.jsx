import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Sponsors from "./components/Sponsors/Sponsors";
import Rewind from "./components/Rewind/Rewind";
import Aboutus from "./components/Aboutus/Aboutus";
import Speakers from "./components/Speakers/Speakers";
import Tickets from "./components/Tickets/Tickets";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Speakers" element={<Home />} />
          <Route path="/Sponsors" element={<Home />} />
          <Route path="/Rewind" element={<Home />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/About-us" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
