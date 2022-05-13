import React from 'react';
// import Video from'../../videos/barber_vid.mp4' ;
// import {VideoBg}
import{HeroContainer, HeroBg} 
from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer >
        <HeroBg>
          {/* VIDEO IS NOT WORKING */}
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
        </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;