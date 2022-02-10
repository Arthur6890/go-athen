import Carousel from "react-bootstrap/Carousel";
import "./styles.scss";
import photo1 from "../../assets/images/image2.jpeg";
import photo2 from "../../assets/images/image3.jpeg";
import photo3 from "../../assets/images/image4.jpeg";
import photo4 from "../../assets/images/image5.jpeg";

function Slider() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={photo1} alt="image1" />
          <Carousel.Caption>
            <h3>Possivel Legenda</h3>
            <p>Possivel SubLegenda</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={photo2} alt="image2" />
          <Carousel.Caption>
            <h3>Possivel Legenda</h3>
            <p>Possivel SubLegenda</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={photo3} alt="image3" />
          <Carousel.Caption>
            <h3>Possivel Legenda</h3>
            <p>Possivel SubLegenda</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={photo4} alt="image4" />
          <Carousel.Caption>
            <h3>Possivel Legenda</h3>
            <p>Possivel SubLegenda</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
