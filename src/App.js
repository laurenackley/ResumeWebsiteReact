import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Opening from "./Opening";
import ReactGA from 'react-ga';

const TRACKING_ID = "G-2WZBD4FGV9";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Router>
      <div className="App">
        <title>Resume</title>
        <div className='app-header'>
          <h1>Lauren Ackley</h1>
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Opening />} />
            <Route exact path="/resume" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={< Portfolio/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
