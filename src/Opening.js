import Carousel from 'react-bootstrap/Carousel';


const Opening = () => {
    return (
        <div className="opening">
            <h2>Opening</h2>
            {IndividualIntervalsExample()}
        </div>
    )
}
export default Opening;

function IndividualIntervalsExample() {
    return (
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="picture"
            src="https://i.imgur.com/ucPxv9k.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="picture"
            src="https://i.imgur.com/VwIqFYH_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="picture"
            src="https://i.imgur.com/ib6ztwj.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }