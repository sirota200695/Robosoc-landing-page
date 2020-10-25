import React from 'react';
import styled from 'styled-components';
import 'typeface-montserrat';
import 'typeface-inter';
import BearIcon from '../assets/svg-icons/bear-logo.svg';

const SectionWrapper = styled.section`
  padding: 148px 176px;
  background-image: radial-gradient(circle at 50% 38%, #182b46, #0f1b2c 47%);
  color: #fff;
  
  @media(max-width: 600px) {
    padding: 38px;
    height: 100vh;
  }
  
  .section-heading {
    font-family: Montserrat, sans-serif;
    font-size: 48px;
    letter-spacing: 1px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    
    @media(max-width: 600px) {
      font-size: 20px;
      letter-spacing: 0.42px;
      text-align: left;
    }
  }
  
  .content-wrapper {
    margin-top: 97px;
    display: flex;
    width: 100%;
    
    &_item {
      flex: 3;
      
      &--sm {
        flex: 1
      }
      
      &_heading {
        font-size: 24px;
        font-weight: bold;
      }
    }
    
    @media(max-width: 600px) {
      margin-top: 0;
      display: block;
    }
  }
`;

const FormWrapper = styled.div`
  button {
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 600;
    width: 455px;
    height: 32px;
     background: #32b2ed;
     box-shadow: 0 0 30px 1px #32b2ed, 0 0 15px 1px rgba(0, 0, 0, 0.5);
     border-radius: 1px;
     color: #fff;
     letter-spacing: 0.1px;
     border: unset;
     outline: unset;
     
    @media(max-width: 600px) {
       width: 100%;
     }
    }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    font-family: Inter, sans-serif;
    font-size: 14px;
    color: #768fbf;
    
    @media(max-width: 600px) {
      font-size: 10px;
    }
  }
  
  input {
    height: 32px;
    width: 452px;
    border-radius: 1px;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.17);
    padding: 0 7px;
    outline: unset;
    border: unset;
    
    &::placeholder {
      color: #b3b7bf;
    }
    
    @media(max-width: 600px) {
      width: 100%;
      height: 29px;
      font-size: 10px;
    }
  }
  
  textarea {
      width: 452px;
      border-radius: 1px;
      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.17);
      padding: 7px;
      outline: unset;
      border: unset;
      margin-bottom: 27px;
      
      &::placeholder {
        color: #b3b7bf;
      }
      
      @media(max-width: 600px) {
        width: 100%;
        font-size: 10px;
      }
    }
`;

const ContactDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: Inter, sans-serif;
  margin-top: 68px;
  
  .primary-text  {
    color: #f4f7ff;
    margin-bottom: 11px;
  }
  
  .secondary-text {
    margin-bottom: 6px;
    color: #768fbf;
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
  padding: 200px 0 100px 0;
  
  svg {
    width: 100px;
    height: 100px;
  }
`;

const SEND_US_MESSAGE_FIELDS = [
  {
    label: 'What is your name',
    name: 'full-name',
    placeHolder: 'Full name',
    type: 'string',
  },
  {
    label: 'What is your company name',
    name: 'company-name',
    placeHolder: 'Company name',
    type: 'string',
  },
  {
    label: 'What is your role',
    name: 'role',
    placeHolder: 'Your role',
    type: 'string',
  },
  {
    label: 'What is your email',
    name: 'email',
    placeHolder: 'Your email',
    type: 'email',
  },
  {
    label: 'How can we help you?',
    name: 'text',
    placeHolder: 'Your message here',
    type: 'text',
    isTextArea: true,
  },
];

const DEMO_FORM_FIELDS = [
  {
    label: 'Enter your email and we will send you a demo',
    name: 'demo-request-email',
    placeHolder: 'Your email',
    type: 'email',
  },
];

const SendUsMessageForm = () => {
  return <FormWrapper>
    {SEND_US_MESSAGE_FIELDS.map((field, index) => {
      return <InputWrapper key={index}>
        <label htmlFor={field.name}>{field.label}</label>
        {field.isTextArea ? <textarea name={field.name} rows={5} placeholder={field.placeHolder}>
        </textarea> : <input type={field.type} name={field.name} placeholder={field.placeHolder} />}
      </InputWrapper>;
    })}
    <button>Send</button>
  </FormWrapper>;
};

const SendDemoForm = () => {
  return <FormWrapper style={{ display: 'flex', alignItems: 'flex-end' }}>
    {DEMO_FORM_FIELDS.map((field, index) => {
      return <InputWrapper style={{ marginTop: '11px' }} key={index}>
        <label htmlFor={field.name}>{field.label}</label>
        <input style={{ width: '325px' }} type={field.type} name={field.name} placeholder={field.placeHolder} />
      </InputWrapper>;
    })}
    <button style={{ width: '120px', marginLeft: '10px' }}>Send me the demo</button>
  </FormWrapper>;
};

const ContactDetails = () => {
  return <ContactDetailsWrapper>
    <span className="primary-text">Israel Office</span>
    <span className="secondary-text">21 Harakevet st. Tel Aviv</span>
    <span className="secondary-text">Info@cybear.co</span>
    <span className="secondary-text">+972(0)3-5763-423</span>
  </ContactDetailsWrapper>;
};

const SectionSix = () => {
  return <SectionWrapper>
    <h4 className="section-heading">
      Want to know more? Contact us
    </h4>
    <div className="content-wrapper">
      <div className="content-wrapper_item">
        <h5 className="content-wrapper_item_heading mobile-d-none">Send us a message</h5>
        <SendUsMessageForm />
      </div>
      <div className="content-wrapper_item mobile-d-none">
        <h5 className="content-wrapper_item_heading">Do you want to see how it works?</h5>
        <SendDemoForm />
      </div>
      <div className="content-wrapper_item content-wrapper_item--sm mobile-d-none">
        <h5 className="content-wrapper_item_heading">Come an visit</h5>
        <ContactDetails />
      </div>
    </div>
    <LogoWrapper className="mobile-d-none">
      <BearIcon />
    </LogoWrapper>
  </SectionWrapper>;
};

export default SectionSix;
