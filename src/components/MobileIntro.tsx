import React, { useState } from 'react';
import BearIcon from '../assets/svg-icons/bear-logo.svg';
import styled from 'styled-components';
import 'typeface-montserrat';
import 'typeface-inter';

const MobileIntroWrapper = styled.div`
  display: none;

  @media(max-width: 600px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(circle at 50% 38%, #182b46, #0f1b2c 60%);
    z-index: 9999;
    transition: transform .5s ease-in;
    transform: translateY(${props => props.hideIntro ? 0 : '-100%'});
    
    .sub-wrapper {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: 27px;
      font-family: Montserrat, sans-serif;
      
      svg {
        width: 100px;
        height: 100px;
      }
      
      span {
        color: #768fbf;
      }
      
      h2 {
        color: #fff;
        font-size: 48px;
        font-weight: bold;
      }
      
      button {
        margin-top: 16px;
        width: 122px;
        height: 32px;
        border-radius: 1px;
        background-color: #32b2ed;
        box-shadow: 0 0 30px 1px #32b2ed, 0 0 15px 1px rgba(0, 0, 0, 0.5);
        outline: none;
        border: none;
        color: #fff;
        font-family: Inter, sans-serif;
        font-weight: 600;
        letter-spacing: 0.14px;
      }
    }
  }
`

const MobileIntro = () => {
  const [isInitialLoad, setIsInitialLoad] =  useState(true);

  return (
     <MobileIntroWrapper hideIntro={isInitialLoad}>
      <div className="sub-wrapper">
        <BearIcon/>
      </div>
      <div className="sub-wrapper">
        <span>Welcome to</span>
        <h2>Robosoc</h2>
        <button onClick={() => setIsInitialLoad(false)}>Start</button>
      </div>
    </MobileIntroWrapper>
  )
};

export default MobileIntro;

// <MobileIntro>
//   <BearIcon/>
// </MobileIntro>
