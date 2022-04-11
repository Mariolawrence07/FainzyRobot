import React from 'react';
import Slider from 'react-slick';
import './products.css';

export default function ProductDetailSlider (props) {
  const {products} = props;
  const settings = {
    customPaging: function (i) {
      return (
        <img
          src={products[i]}
          alt=""
          className="product-slider-image image-sliders"
        />
      );
    },
    dots: true,
    dotsClass: 'slick-dots product-slider-thumb',
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {products.map (product => (
          <div className="flex justify-center w-full">
            <img src={product} className="product-slider-image active" alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
