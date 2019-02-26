import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import OctatumLogo from '../assets/octatum-black.svg';
import Burger from '../assets/hamburguesita.svg';

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

const Navbar = ({ openNavhub }) => {
  return (
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
  );
};

export default Navbar;
