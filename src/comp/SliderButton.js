import React from 'react';

const SliderButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default SliderButton;
