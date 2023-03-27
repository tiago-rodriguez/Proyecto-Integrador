import React from "react";
import "../styles/cards.css";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";

//Hacer una carpetita assets
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
    <div className="card">
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

        <h4 className="card-title">{title}</h4>

        <p>
          <h6 className="card-subtitle mb-2 text-muted"> {description} </h6>
        </p>

        <div className="favoritos">
          <button type="button" class="btn btn-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-square-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
