import React from "react";
import { Slideshow, Slide, TextoSlide, TextoContent } from "./Slideshow";
import { Titulo, SlideContainer, SliderWrapper } from "./SliderElements.js";

const Slider = ({ banners }) => {
  return (
    <SlideContainer>
      <SliderWrapper>
        <Titulo>Featured Banners</Titulo>
        <Slideshow controles={true}>
       
          {banners.map((banners, index) => {
            return (
              <Slide key={index + banners.data.title}>
                <a href="/">
                  <img
                    src={banners.data.main_image.url}
                    alt=""
                    height="450px"
                    width="1150px"
                  />
                </a>
                <TextoSlide>
                  <TextoContent>{banners.data.title}</TextoContent>
                </TextoSlide>
              </Slide>
            );
          })}
        </Slideshow>
      </SliderWrapper>
    </SlideContainer>
  );
};

export default Slider;
