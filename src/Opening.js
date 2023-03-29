// import Carousel from "react-bootstrap/Carousel";
// import Portfolio from "./Portfolio";
// import Contact from "./Contact";
// import Home from "./Home";
// import Carousel from "./Carousel";
const Opening = () => {
  return (
    <div className="opening">
      <h2>Thanks for Visiting!</h2>
      <p>
        I’m Lauren Ackley, thanks for visiting! I’m a developer looking for
        remote/hybrid positions specializing in Java, React, or Angular. I’ve
        got a special fondness for SQL as well. Take a look around my
        <a href="#portfolio" id="links"> portfolio</a> or check out my <a href="#resume"> resume</a>. If you think I’d be a good fit for a
        position you have open <a href="#contactInformation">contact me</a> and
        let’s chat!
      </p>
      <div>
        <div className="carouselDiv">
          {/* {IndividualIntervalsExample()} */}
          {/* <Carousel /> */}
        </div>
      </div>
    </div>
  );
};
export default Opening;

// function IndividualIntervalsExample() {
//   return (
//     <Carousel className="carousel">
//       <Carousel.Item interval={5000}>
//         <img
//           className="d-flex justify-content-center align-items-center w-auto h-100 m-auto"
//           src="https://i.imgur.com/lgpMZ1H.jpg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           {/* <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={5000}>
//         <img
//           className="d-flex justify-content-center w-auto h-100 m-auto"
//           src="https://i.imgur.com/VwIqFYH_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h3>Jack and Jules</h3>
//           <p></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={5000}>
//         <img
//           className="d-flex justify-content-center w-auto h-100 m-auto"
//           src="https://i.imgur.com/ib6ztwj.jpg"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h3>Elvira</h3>
//           {/* <p>This is my 2 year old Anatolian Shepard Great Pyrenees mix dog, Elvira.  </p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={5000}>
//         <img
//           className="d-flex justify-content-center w-auto h-100 m-auto"
//           src="https://i.imgur.com/xGi79Ca.jpg"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h3>Turtle the Cat</h3>
//           {/* <p>This is my 2 year old Anatolian Shepard Great Pyrenees mix dog, Elvira.  </p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }
