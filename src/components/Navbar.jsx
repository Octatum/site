import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import OctatumLogo from '../assets/octatum-black.svg';
import Burger from '../assets/hamburguesita.svg';

const StyledFlex = styled(Flex)`
  position: sticky;
  top: 0;
`

const Navbar = () => {
  return (
    <StyledFlex p={4} justifyContent="space-between">
      <Box>
        <img src={OctatumLogo} />
      </Box>
      <Box>
        <img src={Burger} />
      </Box>
    </StyledFlex>
  );
}

export default Navbar;
