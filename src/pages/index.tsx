import * as React from 'react';

import Layout from '../components/Layout';
import SectionOne from '../components/Section-one';
import SectionTwo from '../components/Section-two';
import SectionThree from '../components/Section-three';
import styled, { createGlobalStyle } from 'styled-components';
import SectionFour from '../components/Section-four';
import SectionFive from '../components/Section-five';
import SectionSix from '../components/Section-six';
import BearIcon from '../assets/svg-icons/bear-logo.svg'
import MobileIntro from '../components/MobileIntro';

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
   line-height: 1;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}

  .mobile-d-none {
    @media(max-width: 600px) {
      display: none;
    }
  }
  
  .desktop-d-none {
    @media(min-width: 600px) {
      display: none;
    }
  }
  
  .dark-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.9;
    top: 0;
    left: 0;
    z-index: 123;
    background-image: linear-gradient(to top, rgba(24, 43, 70, 0) 41%, #0f1b2c);
  }
`;



const IndexPage: React.FC = () => (
  <Layout>
    <GlobalStyles/>
    <SectionOne/>
    <SectionTwo/>
    {/*<SectionThree/>*/}
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <MobileIntro/>
  </Layout>
);

export default IndexPage;
