import React from 'react';
import styled from 'styled-components';

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  outline: none;
  
  div {
    width: 100%;
    height: 20%;
    background: #fff;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
  }
  
  @media(max-width: 600px) {
    height: 18px;
    width: 32px;
  
    div {
      background: #768fbf
    }
  }
`;

const Menu = () => {
  return (
    <MenuIcon>
      <div />
      <div />
      <div />
    </MenuIcon>
  );
};

export default Menu;
