import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import OctatumLogo from '../assets/octatum-black.svg';
import Navhub from './Navhub';
import BurgerMenu from './BurgerMenu';
import { Link } from 'gatsby';

const StyledFlex = styled(Flex)`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  mix-blend-mode: difference;
`;

const Navbar = () => {
  const [navhubOpen, setNavhubOpen] = useState(false);

  function closeNavhub() {
    setNavhubOpen(false);
  }

  function openNavhub() {
    setNavhubOpen(true);
  }

  return (
    <React.Fragment>
      <StyledFlex p={4} justifyContent="space-between">
        <Box>
          <Link style={{ display: 'block' }} to="/">
            <Image src={OctatumLogo} />
          </Link>
        </Box>
        <Box onClick={openNavhub}>
          <BurgerMenu open={navhubOpen} />
        </Box>
      </StyledFlex>
      <Navhub closeNavhub={closeNavhub} open={navhubOpen} />
    </React.Fragment>
  );
};

export default Navbar;
