import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>LUIS HAMILTON BALEM</h1>
      <p>System Developer</p>
    </div>
  );
}

export default HeroSection;
