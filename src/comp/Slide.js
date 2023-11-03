import React from 'react';
import '../comp/Slider.css';

const Slide = ({ slide }) => {
  return (
    <div className="slide">
      <img src={slide.image} alt={slide.title} />
      <h2>{slide.title}</h2>
      <p>{slide.description}</p>
    </div>
  );
};

export default Slide;