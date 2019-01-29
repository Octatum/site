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

const Grid = styled.div`
  margin-bottom: 2em;
`

const Box = styled(_Box)`
  background: ${({ color, theme }) => color ? color : theme.color.green};
  height: auto;

  &.square::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

const Projects = () => (
  <Container>
    <HeaderDiv>
      <Fancy>Creando</Fancy>
      <Sleek>Arte<span>Web</span></Sleek>
    </HeaderDiv>
    <Grid>
      <Flex my={2}>
        <Box flex={2} mr={2} className='square' color='red'/>
        <Box flex={1} color='blue'/>
      </Flex>
      <Flex my={2}>
        <Box flex={1} mr={2} className='square'/>
        <Box flex={2} color='purple'/>
      </Flex>
      <Flex my={2}>
        <Box flex={1} mr={2} className='square' />
        <Box flex={1} mr={2} className='square' color='turquoise'/>
        <Box flex={1} className='square' color='cyan'/>
      </Flex>
    </Grid>
  </Container>
);

export default Projects;
