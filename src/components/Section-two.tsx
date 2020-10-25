import React from 'react';
import styled from 'styled-components';
import 'typeface-montserrat';
import 'typeface-inter';
import Image from '../assets/images/section-2-image.png';

const SectionWrapper = styled.section`
  padding: 150px 120px;
  
  @media(max-width: 600px) {
    padding: 16px 26px;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  
  :not(:last-child) {
     margin-bottom: 200px;
  }
  
  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    
    :not(:last-child) {
     margin-bottom: 50px;
    }
  }
`;

const SectionContentTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.17;
  letter-spacing: 1px;
  
  span {
    color: #32b2ed;
  }
  
  @media(max-width: 600px) {
    font-size: 24px;
    letter-spacing: 0.5px;
    line-height: 1.25;
    
    span {
      color: #0d1f41;
    }
  }
  
`;

const SectionContentDescription = styled.p`
  font-family: Inter,sans-serif;
  font-size: 20px;
  margin-left: 130px;
  
  @media(max-width: 600px) {
    color: #5e6066;
    margin-left: 0;
    font-size: 14px;
    line-height: 1.57;
    
    img {
      width: 100%;
    }
  }
`;

const SectionTwo = () => {
  return (
    <SectionWrapper>
      <SectionContent>
        <SectionContentTitle data-sal="slide-right" data-sal-duration="500">
          The SOC market needs <span>disruptive</span> solutions
        </SectionContentTitle>
        <SectionContentDescription data-sal="fade" data-sal-delay="500" data-sal-duration="500">
          Organizations today face a shortage of SOC analysts. Along with a lack of workforce, the high demand creates a
          reality in which organizations are exposed to compromise. While understaffing, organizations need to analyze
          the flood of data and information to reduce Dwell time.
          <br />
          <br />
          Such a problem characterizes a significant portion of organizations today.
        </SectionContentDescription>
      </SectionContent>
      <SectionContent>
        <SectionContentTitle data-sal="slide-right" data-sal-duration="500">
          Say hello to <span>Robosoc</span>
        </SectionContentTitle>
        <SectionContentDescription data-sal="fade" data-sal-delay="500" data-sal-duration="500">
          How do you solve the problem? Say hello to RoboSOC - the first autonomous SOC analyst. <br/>
          RoboSOC is based on disruptive technology that uses unique and advanced artificial intelligence algorithms to
          investigate cyber incidents autonomously. <br/>
          The ability to continuously identify cyber-attacks allows RoboSOC to investigate and recognize attacks without
          working with pre-determined scripts, playbooks, or rules.
          RoboSOC will investigate all the incidents relating
          to your organization (no filters added), faster, without human mistakes.
        </SectionContentDescription>
      </SectionContent>
      <SectionContent>
        <div/>
        <SectionContentDescription>
          <img src={Image} width="600" alt="Example Image" />
        </SectionContentDescription>
      </SectionContent>
    </SectionWrapper>
  );
};

export default SectionTwo;
