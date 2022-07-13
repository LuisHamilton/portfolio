import React from 'react';
import '../App.css';
import './HeroSectionHobbies.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video class="baska" src='/videos/baska.mp4' autoPlay loop muted />
      <h1>HOBBIES</h1>
      <p>Free Time</p>
    </div>
  );
}

export default HeroSection;
