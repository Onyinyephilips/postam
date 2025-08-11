import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import About from "./Pages/About";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        {/* You can add more routes later like below */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
