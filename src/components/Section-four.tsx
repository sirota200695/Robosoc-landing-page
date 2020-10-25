import React from 'react';
import styled from 'styled-components';
import 'typeface-montserrat';
import 'typeface-inter';
import AttackerIcon from '../assets/svg-icons/icons-attacker-grey.svg';
import MailIcon from '../assets/svg-icons/icons-mail-grey.svg';
import AlertIcon from '../assets/svg-icons/icons-alert-grey.svg';
import MalwareIcon from '../assets/svg-icons/icons-malware-grey.svg';
import { graphql, useStaticQuery } from 'gatsby';

interface EventExampleStepNode {
  id: string;
  eventsCount: number;
  eventsKind: string;
  eventsAction: string;
}

interface AllContentfulExampleStep {
  allContentfulEventExampleStep: {
    nodes: EventExampleStepNode[]
  }
}

const Section = styled.section`
  padding: 175px 0;
  width: 100%;
  overflow-x: hidden;
  
  @media(max-width: 600px) {
    padding: 0;
  }
`;

const SectionContent = styled.div`
  display: flex;
  margin-bottom: 150px;
  
  @media(max-width: 600px) {
    margin-bottom: 70px;
  }
`;

const SectionContentDescription = styled.div`
  padding-left: 120px;
  width: 50%;
  
  @media(max-width: 600px) {
    width: 70%;
    padding: 0 25px;
    
    &:first-of-type {
      width: 100%;
    }
  }
`;

const SectionContentExamples = styled.div`
  width: 50%;
  
  @media(max-width: 600px) {
    width: 30%;
  }
`;

const SectionContentTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.17;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 50%;
  
  @media(max-width: 600px) {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.42px;
  }
`;

const SectionContentParagraph = styled.p`
  font-family: Inter, sans-serif;
  font-size: 20px;
  line-height: 1.6;
  width: 80%;
  
  @media(max-width: 600px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: normal;
    color: #5e6066;
  }
`;

const SectionLargeTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-size: 160px;
  font-weight: bold;
  color: #eaebec;
  margin-top: 36px;
`;

const ExampleSteps = styled.div`
   display: flex;
   flex-direction: column;
   padding-left: 120px;
   
   @media(max-width: 600px) {
       padding-left: 0;
   }
`;

const ExampleStep = styled.div`
  font-family: Montserrat, sans-serif;

  .step-count {
    margin-top: 70px;
    font-size: 120px;
    font-weight: bold;
    
    @media(max-width: 600px) {
       font-size: 48px;
       margin-top: 40px;
    }
  }
  
  .step-description {
    font-size: 48px;
    line-height: 1.1;
    width: 100px;
    
     @media(max-width: 600px) {
       font-size: 24px;
    }
  }
  
  .step-before-arrow {
    width: 2px;
    height: 94px;
    background: #979797;
    margin-left: 60px;
    margin-top: 100px;
    
    @media(max-width: 600px) {
       width: 1px;
      height: 61px;
      margin-left: 30px;
      margin-top: 40px;
    }
  }
  
  .step-inner-text {
    font-size: 38px;
    color: #b3b7bf;
    margin: 24px 0 24px 12px;
    
    @media(max-width: 600px) {
      font-size: 16px;
      margin: 16px 0 16px 12px;
    }
  }
  
  .step-after-arrow {
    width: 2px;
    height: 94px;
    background: #979797;
    margin-left: 60px;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      width: 0;
      height: 0;
      right: -7px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 16px solid #979797;
    }
    
    @media(max-width: 600px) {
      width: 1px;
      height: 61px;
      margin-left: 30px;
      
      &:after {
        content: '';
        position: absolute;
        bottom: -4px;
        width: 0;
        height: 0;
        right: -3px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 8px solid #979797;
      }
    }
  }
`;

const EventsExamplesWrapper = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  width: 60vw;
  
  @media(max-width: 600px) {
    font-size: 8px;
    letter-spacing: 0.08px;
  }
  

  .events-table-row {
    width: 100%;
    display: flex;
    align-content: center;
    padding: 18px 9px;
    
    @media(max-width: 600px) {
      padding: 8px 4px;
    }
    
    &--header {
      color: #b3b7bf;
    }
    
    &--body {
      border-radius: 3px;
      background-color: rgba(179, 183, 191, 0.2);
      margin-bottom: 8px;
      letter-spacing: 0.14px;

        @media(max-width: 600px) {
          margin-bottom: 6px;
        }
     
      svg {
        height: 24px;
        width: 24px;
        
        @media(max-width: 600px) {
          width: 17px;
          height: 17px;
        }
      }
    }
    
    &_col {
      padding: 0 18px;
      display: flex;
      align-items: center;
      
      @media(max-width: 600px) {
        padding: 0 7px;
      }
      
      &--xs {
        flex: 5%;
      }
      
      &--sm {
        flex: 10%;
        
        @media(max-width: 600px) {
          flex: 15%;
        }
      }
      
      &--md {
        flex: 40%;
      }
      
      &--lg {
        flex: 45%;
        
        @media(max-width: 600px) {
          flex: 85%;
        }
      }
    }
  }
`;

const EventSeverityIndicate = styled.div<{ backgroundColor: string }>`
  background: ${props => props.backgroundColor || 'red'};
  width: 5px;
  height: 24px;
`;

const EVENT_SEVERITY_COLORS = [
  '#ff0151',
  '#ffb000',
  '#fff400',
];

const EVENT_TYPE_ICONS = [
  <AttackerIcon />,
  <MailIcon />,
  <AlertIcon />,
  <MalwareIcon />,
];

const BEHAVIOR_NAMES = [
  'Dropper via Spear phishing to 13 users',
  'SQLinjection attack blocked in Web Appilcation FW……',
  'Active Directory Policy Violation',
  'Emotet Trojan quarantined',
];

const INCIDENT_NAMES = [
  'Download executable failed',
  'Many attacks to the same IP',
  'Application user was created by un-authrized user',
  '02',
];

const IP_NAMES = [
  '233.43.56.45',
  'alison_miller@gmail.com',
  'kuphal.vincenzo@hotmail.com',
  'alfonzo_kirlin@swaniawski.org',
  'simonis_dennis@gmail.com',
  'cary_robel@arlie.info',
  'www.frejdjxz.co'
]

const getRandomNumber = (max: number) => {
  return Math.round(Math.random() * max);
};

const EventsTable = () => {
  return <EventsExamplesWrapper>
    <div className="events-table-row events-table-row--header">
      <div className="events-table-row_col events-table-row_col--xs" />
      <div className="events-table-row_col events-table-row_col--sm">Type</div>
      <div className="events-table-row_col events-table-row_col--md">Behavior name</div>
      <div className="events-table-row_col events-table-row_col--lg">Incident name</div>
    </div>
    {Array(44).fill('1').map((item, index) => {
      return (
        <div key={index} className="events-table-row events-table-row--body">
          <div className="events-table-row_col events-table-row_col--xs">
            <EventSeverityIndicate backgroundColor={EVENT_SEVERITY_COLORS[getRandomNumber(EVENT_SEVERITY_COLORS.length - 1)]} />
          </div>
          <div className="events-table-row_col events-table-row_col--sm">
            {EVENT_TYPE_ICONS[getRandomNumber(EVENT_TYPE_ICONS.length - 1)]}
          </div>
          <div className="events-table-row_col events-table-row_col--md">
            {BEHAVIOR_NAMES[getRandomNumber(BEHAVIOR_NAMES.length - 1)]}
          </div>
          <div className="events-table-row_col events-table-row_col--lg">
            {INCIDENT_NAMES[getRandomNumber(INCIDENT_NAMES.length - 1)]}
          </div>
        </div>
      );
    })}
  </EventsExamplesWrapper>;
};

const EventsTableMobile = () => {
  return <EventsExamplesWrapper>
    <div className="events-table-row events-table-row--header">
      <div className="events-table-row_col events-table-row_col--sm" />
      <div className="events-table-row_col events-table-row_col--lg">IP</div>
    </div>
    {Array(44).fill('1').map((item, index) => {
      return (
        <div key={index} className="events-table-row events-table-row--body">
          <div className="events-table-row_col events-table-row_col--sm">
            {EVENT_TYPE_ICONS[getRandomNumber(EVENT_TYPE_ICONS.length - 1)]}
          </div>
          <div className="events-table-row_col events-table-row_col--lg">
            {IP_NAMES[getRandomNumber(IP_NAMES.length - 1)]}
          </div>
        </div>
      );
    })}
  </EventsExamplesWrapper>;
};

const ExampleStepsList = () => {
  const data: AllContentfulExampleStep = useStaticQuery(graphql`
  {
    allContentfulEventExampleStep(sort: {fields: order}) {
      nodes{
        id
        eventsCount
        eventsKind
        eventsAction
      }
    }
  }`)

  return <ExampleSteps>
    {data.allContentfulEventExampleStep.nodes.map(node => {
      return <ExampleStep key={node.id} data-sal="fade" data-sal-duration="500">
        <h3 className="step-count">{node.eventsCount}</h3>
        <p className="step-description">{ node.eventsKind }</p>
        { node.eventsAction ? <div data-sal="fade" data-sal-delay="250" data-sal-duration="500">
          <div className="step-before-arrow" />
          <p className="step-inner-text">{node.eventsAction}</p>
          <div className="step-after-arrow" />
          </div> : null }
      </ExampleStep>
    })}
  </ExampleSteps>


}

const SectionFour = () => {
  return (
    <Section>
      <SectionContent>
        <SectionContentDescription data-sal="slide-right" data-sal-duration="500">
          <SectionContentTitle>
            Here is an example
          </SectionContentTitle>
          <SectionContentParagraph data-sal="fade" data-sal-delay="500" data-sal-duration="500">
            RoboSOC investigates and understands the context of 17k events, groups them into campaigns, and understands
            the attack vector. Next, RoboSOC recommends mitigation steps.
          </SectionContentParagraph>
        </SectionContentDescription>
        <SectionContentExamples className="mobile-d-none">
          <SectionLargeTitle data-sal="slide-left" data-sal-delay="1000" data-sal-duration="500">
            17k events
          </SectionLargeTitle>
        </SectionContentExamples>
      </SectionContent>
      <SectionContent>
        <SectionContentDescription>
          {/*<ExampleSteps>*/}
          {/*  <ExampleStep data-sal="fade">*/}
          {/*    <h3 className="step-count">01</h3>*/}
          {/*    <p className="step-description" data-sal="fade" data-sal-delay="250">Suspicious Senders</p>*/}
          {/*    <div className="step-before-arrow" />*/}
          {/*    <p className="step-inner-text">send</p>*/}
          {/*    <div className="step-after-arrow" />*/}
          {/*  </ExampleStep>*/}
          {/*  <ExampleStep  data-sal="fade">*/}
          {/*    <h3 className="step-count">50</h3>*/}
          {/*    <p className="step-description" data-sal="fade" data-sal-delay="250">Emails</p>*/}
          {/*    <div className="step-before-arrow" />*/}
          {/*    <p className="step-inner-text">there were opened by</p>*/}
          {/*    <div className="step-after-arrow" />*/}
          {/*  </ExampleStep>*/}
          {/*  <ExampleStep>*/}
          {/*    <h3 className="step-count">04</h3>*/}
          {/*    <p className="step-description">Users</p>*/}
          {/*    <div className="step-before-arrow" />*/}
          {/*    <p className="step-inner-text">and directed to</p>*/}
          {/*    <div className="step-after-arrow" />*/}
          {/*  </ExampleStep>*/}
          {/*  <ExampleStep>*/}
          {/*    <h3 className="step-count">02</h3>*/}
          {/*    <p className="step-description">Suspicious domains</p>*/}
          {/*    <div className="step-before-arrow" />*/}
          {/*    <p className="step-inner-text">and download</p>*/}
          {/*    <div className="step-after-arrow" />*/}
          {/*  </ExampleStep>*/}
          {/*  <ExampleStep>*/}
          {/*    <h3 className="step-count">01</h3>*/}
          {/*    <p className="step-description">File</p>*/}
          {/*  </ExampleStep>*/}
          {/*</ExampleSteps>*/}
          <ExampleStepsList/>
        </SectionContentDescription>
        <SectionContentExamples>
          <div className="mobile-d-none">
            <EventsTable/>
          </div>
          <div className="desktop-d-none">
            <EventsTableMobile/>
          </div>
        </SectionContentExamples>
      </SectionContent>
    </Section>
  );
};

export default SectionFour;
