import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import OctatumLogo from '../assets/octatum-black.svg';
import Burger from '../assets/hamburguesita.svg';
import Navhub from './Navhub';

const StyledFlex = styled(Flex)`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const Navbar = () => {
  const [navhubOpen, setNavhubOpen] = useState(true);

  function openNavhub() {
    setNavhubOpen(true);
  }

  function closeNavhub() {
    setNavhubOpen(false);
  }

  function toggleNavhub() {
    setNavhubOpen(!navhubOpen);
  }
  return (
    <React.Fragment>
      <StyledFlex p={4} justifyContent="space-between">
        <Box>
          <a href="/">
            <Image src={OctatumLogo} />
          </a>
        </Box>
        <Box onClick={openNavhub}>
          <Image src={Burger} />
        </Box>
      </StyledFlex>
      <Navhub closeNavhub={toggleNavhub} open={navhubOpen} />
    </React.Fragment>
  );
};

export default Navbar;
