import React, { useState } from "react";
import styled from 'styled-components';
// import { SlideCard, StyledSlider } from "./SlideCard";

import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const Slider = ({ slides }) => {
  console.log('slides', slides)
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="grid-cols-1 flex-col-center">
      <StyledSlider>
        {slides.map((slide, index) => {
          return (
            <section key={index}>
              {index === current && (
                <>
                  <p className="review-text">{slide.quote}</p>
                  <p className="customer-name">{slide.name}</p>
                </>
              )}
            </section>
          );
        })}
      </StyledSlider>
      <div className="arrow-slider-container">
        <FaChevronLeft
          className="left-arrow"
          onClick={prevSlide}
        />
        <FaChevronRight
          className="right-arrow"
          onClick={nextSlide}
        />
      </div>
      
    </div>
  );
};

export default Slider;


const StyledSlider= styled.div `
  padding: 0 1rem;
}
`;