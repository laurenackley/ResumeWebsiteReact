import Carousel from "react-bootstrap/Carousel";

const Contact = () => {
  return (
    <div className="contact">
      <div id="contact">
      <h1> Thanks for visiting!</h1> 
       I created this so that way I could
        practice React as well as develop my web design skills. <br />
        If you'd like to reach out about a job opportunity, I am currently
        seeking a remote or hybrid position in San Antonio, Texas. The best way to contact me is by email. My email is below if you click on the link. 
        <br />
        <img
          id="email"
          src="https://t3.ftcdn.net/jpg/01/81/00/34/360_F_181003490_CxW4fQ0H3VypIIsPkFGpMDviO8ysWjOZ.jpg"
          alt="lackley127@gmail.com"
        ></img>
        Email: <a href="mailto:lackley127@gmail.com">Send me an email</a>
      </div>
      {/* <div class="carousel">

      <Carousel variant="dark">
        <Carousel.Item id="carouselImages">
          <img
            src="https://i.imgur.com/DGeV5N7.png"
            alt="First slide"
          />
          <Carousel.Caption>
          <div class="carousel-caption">

            <h5>My First Garden Attempt</h5>
            <p>
              Living in South Texas I definitely did not expect to have plants
              grow so well, but I was very proud of these sunflowers
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carouselImages">
          <img
            src="https://i.imgur.com/ib6ztwj.jpg"
            alt="Second slide"
            />
          <Carousel.Caption>
          <div class="carousel-caption">

            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carouselImages">
          <img
            src={"https://i.imgur.com/jmYBRjQ.jpg"}
            alt="Jack&Jules"
            />
          <Carousel.Caption>
          <div class="carousel-caption">

            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            </div> */}
    </div>
  );
};
export default Contact;
