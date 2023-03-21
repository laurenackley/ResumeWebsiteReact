import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <title>Resume</title>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={< Projects/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
