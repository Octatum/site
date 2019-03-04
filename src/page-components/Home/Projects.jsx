import React from 'react';
import styled from 'styled-components';
import { Flex, Box as _Box } from '@rebass/grid';
import Text from '../../components/Text';
import CommonContainer from '../../components/CommonContainer';

const Box = styled(_Box)`
  height: 10rem;

  ::after {
    content: '';
    display: block;
    background: ${({ color }) => color};
    height: 100%;
    width: 100%;
  }
`;

const Projects = () => (
  <CommonContainer>
    <h1>
      <Text as="div" color="black" font="secondary" size={5}>
        Creando
      </Text>
      <Text size={2} color="black" style={{ letterSpacing: '11px' }}>
        Arte
        <Text as="span" color="green" bold>
          WEB
        </Text>
      </Text>
    </h1>
    <Flex my={2} flexWrap="wrap">
      <Box
        width={[2 / 3, 1 / 2, 2 / 6]}
        p={[1, 2]}
        pl={[0, 0]}
        color="#FF4136"
      />
      <Box width={[1 / 3, 2 / 6, 1 / 6]} p={[1, 2]} color="#0074D9" />
      <Box width={[1 / 3, 1 / 6, 3 / 10]} p={[1, 2]} color="#2ECC40" />
      <Box
        width={[2 / 3, 2 / 3, 2 / 10]}
        p={[1, 2]}
        color="#85144b"
        pr={[0, 0]}
      />
      <Box
        width={[1 / 3, 1 / 3, 1 / 6]}
        p={[1, 2]}
        pl={[0, 0]}
        color="#2ECC40"
      />
      <Box width={[1 / 3, 1 / 2, 1 / 2]} p={[1, 2]} color="#7FDBFF" />
      <Box
        width={[1 / 3, 1 / 2, 2 / 6]}
        p={[1, 2]}
        pr={[0, 0]}
        color="#39CCCC"
      />
    </Flex>
  </CommonContainer>
);

export default Projects;
