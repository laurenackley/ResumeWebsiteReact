import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";
import Opening from "./Opening";
import Carousel from "./Carousel";
import { useEffect } from "react";
const OnePage = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="OnePage">
      <div className="opening">
        <Opening />
      </div>
      <Carousel />
      <div id="resume">
        <Home />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contactInformation">
        <Contact />
      </div>
      <img
        src="https://www.clipartmax.com/png/middle/5-50817_transparent-arrow-left-clip-art-at-clker-com-vector-left-arrow-no.png"
        alt="up"
        className="top"
        onClick={handleScrollToTop}
      ></img>

      {/* <button className="top" onClick={handleScrollToTop}>
        Top
      </button> */}
    </div>
  );
};
export default OnePage;
