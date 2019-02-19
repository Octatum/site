import React from 'react';
import styled from 'styled-components';
import { Flex, Box as _Box } from '@rebass/grid';

const Container = styled.div`
  width: 100%;
  padding: 1em 2em;
`

const HeaderDiv = styled.div``

const Fancy = styled.h1`
  font-family: "Playfair Display", "Lato", sans-serif;
  font-size: 2.5em;
  padding-bottom: 0.5rem;
`

const Sleek = styled.h1`
  font-size: 1.2em;
  font-weight: 300;
  letter-spacing: 12px;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.color.green};
    text-transform: uppercase;
  }
`

const Box = styled(_Box)`
  position: relative;
  height: auto;

  &.square::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

const InnerBox = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: ${({ color, theme }) => color ? color : theme.color.green};;
`

const Projects = () => (
  <Container>
    <HeaderDiv>
      <Fancy>Creando</Fancy>
      <Sleek>Arte<span>Web</span></Sleek>
    </HeaderDiv>
    <Flex my={2} flexWrap='wrap'>
      <Box width={[2/3, 1/2, 2/6]} p={[1, 2]} className='square'>
        <InnerBox color='red'/>
      </Box>
      <Box width={[1/3, 2/6, 1/6]} p={[1, 2]}>
        <InnerBox color='blue'/>
      </Box>
      <Box width={[1/3, 1/6, 3/10]} p={[1, 2]} className='square'>
        <InnerBox />
      </Box>
      <Box width={[2/3, 2/3, 2/10]} p={[1, 2]}>
        <InnerBox color='purple'/>
      </Box>
      <Box width={[1/3, 1/3, 1/6]} p={[1, 2]} className='square'>
        <InnerBox />
      </Box>
      <Box width={[1/3, 1/2, 1/2]} p={[1, 2]} className='square'>
        <InnerBox color='turquoise'/>
      </Box>
      <Box width={[1/3, 1/2, 2/6]} p={[1, 2]} className='square'>
        <InnerBox color='cyan'/>
      </Box>
    </Flex>
  </Container>
);

export default Projects;
