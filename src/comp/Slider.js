import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Slide from './Slide';
//import SliderButton from './SliderButton';
import './Slider.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <Slide slide={slides[currentSlide]} />
      <div className="slider-buttons">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
  
};

export default Slider;
