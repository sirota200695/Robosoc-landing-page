import * as React from 'react';

import Layout from '../components/Layout';
import SectionOne from '../components/Section-one';
import SectionTwo from '../components/Section-two';
import SectionThree from '../components/Section-three';
import { createGlobalStyle } from 'styled-components';
import SectionFour from '../components/Section-four';
import SectionFive from '../components/Section-five';
import SectionSix from '../components/Section-six';

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
`;

const IndexPage: React.FC = () => (
  <Layout>
    <GlobalStyles/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
  </Layout>
);

export default IndexPage;
