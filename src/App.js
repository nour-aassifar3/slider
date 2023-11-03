import React from 'react';
import './App.css';
import Slider from './comp/Slider.js';
import { slides } from './comp/slides.js';

function App() {
  return (
    <div className="App">
      <h1>React Slider Nour</h1>
      <Slider slides={slides} />
    </div>
  );
}

export default App;

