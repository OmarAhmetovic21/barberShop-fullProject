import React, {useState} from 'react';
import Video from'../../videos/barber_vid.mp4' ;
import {Button} from '../ButtonElements';
import{
       HeroContainer,
       HeroBg,
       VideoBg,
       HeroContent,
       HeroH1,
       HeroP, 
       HeroBtnWrapper,
       ArrowForward,
       ArrowRight } 
from './HeroElements';
import VideoGif from '../../videos/ezgif.com-gif-maker.gif'

// GET TOKEN FROM LOCALSTORAGE

const loginToken = localStorage.getItem("loginToken")

const goToCreateAppointment = () => {
  window.location = '/appointment'
}


const HeroSection = () => {
  

  const [hover,setHover] = useState(false);
    const onHover=() =>{
      setHover(!hover)
    }
    return (
    <HeroContainer >
        <HeroBg>
            {/*
            <VideoBg autoPlay loop muted src={Video} 
            type='video/mp4' />
             */}
            <div className="bk_Img" style={{backgroundImage: "url(" + VideoGif + ")",backgroundSize: "cover",height: "100vh",}}></div>
        </HeroBg>
        <HeroContent>
          <HeroH1>Welcome to <i>cuts</i></HeroH1>
          <HeroP>
             book an appointment with
             just the click of a button. 
          </HeroP>
              { loginToken && 
          <HeroBtnWrapper>
            <Button to='signup' 
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={goToCreateAppointment}
            primary='true'
            dark = 'true'
            >
              Book An Appointment {hover ? <ArrowForward/> 
              : <ArrowRight
              />}
            </Button>
          </HeroBtnWrapper>

          }
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;