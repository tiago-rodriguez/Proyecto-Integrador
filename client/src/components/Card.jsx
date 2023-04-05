import React from "react";
import "../styles/card.css";
import Carousel from "react-bootstrap/Carousel";

//Props es un objeto que lo desestructuro
function Card({
  title,
  image,
  image_2,
  image_3,
  image_4,
  image_5,
  description,
}) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 " src={image} alt="..." />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image_2} alt="..." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image_3} alt="..." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={image_4} alt="..." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={image_5} alt="..." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h4 className="card-title "> {title.slice(0, 25)}[...]</h4>

        <p>
          <h6 className="card-subtitle mb-2 text-muted">
            {description.slice(0, 152)}[...]
          </h6>
        </p>
      </div>
    </div>
  );
}

export default Card;
