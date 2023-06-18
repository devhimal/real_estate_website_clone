import React, { useEffect, useState } from "react";
import "../style/module.product.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FcNext, FcPrevious } from "react-icons/fc";
import data from "../utils/slider.json";

const Card = (props) => {
  console.log(props.value);
  return (
    <div className="carousel_container">
      <h2>{props.value.name}</h2>
    </div>
  );
};

const Property = () => {
  const sliderRef = React.createRef<Slider>();
  const settings = {
    dots: false,
    infinite: true,
    arrow: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="product">
      <div className="title_and_buttons">
        <h1>populor residences</h1>
        <div>
          <button
            onClick={() => {
              sliderRef.current?.slickPrev();
            }}
          >
            <FcPrevious />
          </button>
          <button
            onClick={() => {
              sliderRef.current?.slickNext();
            }}
          >
            <FcNext />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {data.map((items, index) => {
          return (
            <div className="carousel" key={index}>
              <div className="img">
                <img src={items.image} alt={items.name} />
              </div>
              <div className="description">
                <p className="price">$ {items.price}</p>
                <h2>{items.name}</h2>
                <p className="detail">{items.detail}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Property;
