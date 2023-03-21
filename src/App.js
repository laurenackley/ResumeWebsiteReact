import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import ExampleNavBar from "./ExampleNavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <title>Resume</title>
        <ExampleNavBar />
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
