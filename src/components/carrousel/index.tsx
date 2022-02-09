import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./styles.scss";
import image1 from "../../assets/images/image2.jpeg";
import image2 from "../../assets/images/image3.jpeg";
import image3 from "../../assets/images/image4.jpeg";
import image4 from "../../assets/images/image5.jpeg";

function Slider() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={image1} alt="image" />
          <Carousel.Caption>
            <h3>Possivel Legenda</h3>
            <p>Possivel SubLegenda</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={image2} alt="image" />
          <Carousel.Caption>
            <h3>Possivel Legenda</h3>
            <p>Possivel SubLegenda</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={image3} alt="image" />
          <Carousel.Caption>
            <h3>Possivel Legenda</h3>
            <p>Possivel SubLegenda</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={image4} alt="image" />
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
