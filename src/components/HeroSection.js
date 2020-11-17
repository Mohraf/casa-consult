import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome to InkedBiker Rider Training</h1>
      <p>The Best place in Kenya to Learn how to ride a motorcycle and further develop your riding skills.</p>
      {/* <div className='hero-btns'>
        <Button
          className='btn btn--primary'
        >
          GET STARTED
        </Button>
        
      </div> */}
      <div className="elfsight-app-6eb30413-780e-405d-80ee-60179c01ac1f"></div>
    </div>
  );
}

export default HeroSection;
