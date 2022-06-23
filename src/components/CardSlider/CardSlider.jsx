import React from "react";
import Slider from "react-slick";

import {CardSliderContainer, CardSliderWrapper, CardSliderTitle, 
    CardContainer,
    CardImage} from './CardSliderElements';

const CardSlider = ({ categories }) => {
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };
  console.log(categories);
  return (
    <CardSliderContainer>
    <CardSliderWrapper>

      <CardSliderTitle> Featured Categories</CardSliderTitle>
      <Slider {...settings} style={{display:'flex'}}>
        {categories.map((category, index) => {
          return (
            


            <CardContainer>
              <h3> {category.data.name} </h3>
              <CardImage src={category.data.main_image.url}/>
            </CardContainer>
            
          );
        })}
      </Slider>

    </CardSliderWrapper>
    </CardSliderContainer>
  );
};

export default CardSlider;
