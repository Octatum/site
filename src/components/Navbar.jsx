import React from 'react';
import { Flex, Box } from '@rebass/grid';
import OctatumLogo from '../assets/octatum-black.svg';
import Burger from '../assets/hamburguesita.svg';

const Navbar = () => {
  return (
    <Flex p={4}>
      <Box width={1/4}>
        <img src={OctatumLogo} />
      </Box>
      <Box width={3/4} pl="auto">
        <img src={Burger} />
      </Box>
    </Flex>
  );
}

export default Navbar;
