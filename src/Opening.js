import Carousel from "react-bootstrap/Carousel";

const Opening = () => {
  return (
    <div className="opening">
      <h2>Thanks for Visiting!</h2>
      <p>
        I worked as a Technical Support Specialist for 3 years before deciding
        to make a career change and pursue my passion of programming.
      </p>
      {IndividualIntervalsExample()}
    </div>
  );
};
export default Opening;

function IndividualIntervalsExample() {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={5000}>
        <img
          className="d-flex justify-content-center align-items-center w-auto h-100 m-auto"
          src="https://i.imgur.com/lgpMZ1H.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex justify-content-center w-auto h-100 m-auto"
          src="https://i.imgur.com/VwIqFYH_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Jack and Jules</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex justify-content-center w-auto h-100 m-auto"
          src="https://i.imgur.com/ib6ztwj.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Elvira</h3>
          {/* <p>This is my 2 year old Anatolian Shepard Great Pyrenees mix dog, Elvira.  </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex justify-content-center w-auto h-100 m-auto"
          src="https://i.imgur.com/xGi79Ca.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Turtle the Cat</h3>
          {/* <p>This is my 2 year old Anatolian Shepard Great Pyrenees mix dog, Elvira.  </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
