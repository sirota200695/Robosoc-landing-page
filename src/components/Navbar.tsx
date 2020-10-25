import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import BearIcon from '../assets/svg-icons/bear-logo.svg'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding: 50px 73px;
  width: 100%;
  z-index: 123;
  
  .icon-wrapper {
    opacity: 0;
  }
  
  @media(max-width: 600px) {
    padding: 28px 18px;
    
    .icon-wrapper {
      opacity: 1;
    }
  }
`

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="icon-wrapper">
        <BearIcon />
      </div>
      <Menu/>
    </Nav>
  )
}

export default Navbar
