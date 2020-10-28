import React from 'react';
import Video from '../assets/videos/section-1-video.mp4';
import Icon from '../assets/svg-icons/bear-logo.svg';
import Icon2 from '../assets/svg-icons/bear-logo-2.svg';
import styled from 'styled-components';
import 'typeface-montserrat';
import 'typeface-inter';

const SectionWrapper = styled.section`
  height: 100vh;
  position: relative;
  padding: 100px;
  box-sizing: border-box;
  
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media(max-width: 600px) {
       padding: 0;
    }
`;

const SectionContentWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 100px;
  
  svg {
    height: 100px;
    width: 100px;
    margin-bottom: 30px;
    margin-left: 12px;
  }
  
  
  @media(max-width: 600px) {
       width: 100%;
       bottom: 24px;
       left: 50%;
       transform: translateX(-50%);
       
       svg {
          display: none;
       }
    }
`

const SectionContentTitle = styled.h1`
    font-family: Montserrat ,sans-serif;
    font-size: 98px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: #f4f7ff;
    text-shadow: 0 0 24px rgba(0, 0, 0, 0.97);
    margin-bottom: 10px;
    
    span {
      text-shadow: none;
      font-size: 108px;
      background: -webkit-linear-gradient(#f4f7ff,#1c9bd5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    @media(max-width: 600px) {
        font-size: 48px;
        letter-spacing: normal;
        text-align: center;
        color: #f4f7ff;
        
        span {
           font-size: 48px;
          letter-spacing: normal;
          text-align: center;
          color: #f4f7ff;
          
          background: none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
        }
    }
`;

const SectionContentSubTitle = styled.h2`
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.31px;
  margin-left: 8px;
  
   @media(max-width: 600px) {
      text-align: center;
      color: #768fbf; 
      font-size: 12px;
      letter-spacing: 0.3px;
      margin-bottom: 18px;
   }
`;


const AltArrowDown = styled.div`
  display: none;
  
  @media(max-width: 600px) {
    width: 12px;
    height: 12px;
    border-right: 2px solid #32b2ed;
    border-bottom: 2px solid #32b2ed;
    transform: rotate(45deg);
    margin: 12px auto;
    display: block;
  }
`

const SectionOne = () => {
  return (
    <SectionWrapper>
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="dark-overlay"/>
      <SectionContentWrapper data-sal="fade" data-sal-delay="1000" data-sal-duration="500">
        <Icon2 />
        <SectionContentTitle>
          Robo<span>SOC</span>
        </SectionContentTitle>
        <SectionContentSubTitle>
          The world's first SOC Virtual cyber analyst
        </SectionContentSubTitle>
        <AltArrowDown/>
      </SectionContentWrapper>
    </SectionWrapper>
  );
};

export default SectionOne;
