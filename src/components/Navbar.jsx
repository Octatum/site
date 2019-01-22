import React from 'react';
import { Flex, Box } from '@rebass/grid';
import OctatumLogo from '../assets/octatum-black.svg';
import Burger from '../assets/hamburguesita.svg';

const Navbar = () => {
  return (
    <Flex p={4} justifyContent="space-between">
      <Box>
        <img src={OctatumLogo} />
      </Box>
      <Box>
        <img src={Burger} />
      </Box>
    </Flex>
  );
}

export default Navbar;
