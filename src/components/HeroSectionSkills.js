import React from 'react';
import '../App.css';
import './HeroSectionSkills.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>SKILLS</h1>
      <p>Hard and Soft</p>
    </div>
  );
}

export default HeroSection;
