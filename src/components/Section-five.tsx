import React from 'react';
import styled from 'styled-components';
import Video from '../assets/videos/section-5-video.mp4';
import 'typeface-montserrat';

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
      padding: 44px 36px 0 24px;
  }
`;

const SectionContent = styled.div`
  position: absolute;
  top: 95px;
  text-align: center;
  width: 65%;
  letter-spacing: 0.36px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1234;
  
  @media(max-width: 600px) {
    position: relative;
    transform: translateX(0);
    left: 0;
    top: 0;
    text-align: left;
    width: 100%;
  }
  
  .section-info {
    color: #f4f7ff;
    font-family: Montserrat ,sans-serif;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 0.36px;
  
    span {
     color: #32b2ed
    }
    
    @media(max-width: 600px) {
      letter-spacing: 0.7px;
      font-size: 24px;
      font-weight: 600;
      
      span {
        color: #f4f7ff;
      }
    }
  }
`

const SectionFive = () => {
  return <SectionWrapper>
    <div className="dark-overlay"/>
    <video autoPlay muted loop >
      <source src={Video} type="video/mp4" data-sal="fade"/>
    </video>
    <SectionContent data-sal="fade" data-sal-delay="500" data-sal-duration="500">
      <h4 className="section-info">
        <span>RoboSOC</span> converts suspicious issues into behavioral insights, helping organizations make <span>smarter decisions.</span>
      </h4>
    </SectionContent>
  </SectionWrapper>
}

export default SectionFive;
