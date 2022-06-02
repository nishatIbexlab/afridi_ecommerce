import { Carousel } from "react-bootstrap";
function CustomBanner({ props }) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div style={{ height: "400px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/200"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: "400px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/200"
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: "400px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/200"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CustomBanner;
