import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import OctatumLogo from '../assets/octatum-black.svg';
import Burger from '../assets/hamburguesita.svg';

const StyledFlex = styled(Flex)`
  position: sticky;
  top: 0;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
`

const Navbar = () => {
  return (
    <StyledFlex p={4} justifyContent="space-between">
      <Box>
        <Image src={OctatumLogo} />
      </Box>
      <Box>
        <Image src={Burger} />
      </Box>
    </StyledFlex>
  );
}

export default Navbar;
