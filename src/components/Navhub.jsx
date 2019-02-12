import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 100%;
  padding: 1em;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
  transition: 0.7s right;

  &.open {
    right: 0;
  }
`

const ExitButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  padding: 0.5rem;
  font-size: 2em;
  cursor: pointer;
`

const Navhub = ({ toggleNavhub, open }) => (
  <Container className={open ? "open" : ''}>
    <ExitButton onClick={toggleNavhub}>
      <i className="fas fa-times"/>
    </ExitButton>
  </Container>
);

export default Navhub;
