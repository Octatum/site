import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import Text from '../../components/Text';
import CommonContainer from '../../components/CommonContainer';

const ImageBox = styled(Box)`
  height: 12rem;

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
    <Flex justifyContent="flex-end">
      <Box pb={3} w={1}>
        <Text as="p" bold size={1} align="right" size={2}>
          Ve nuestros
        </Text>
        <Text as="h2" font="secondary" size={10} align="right" bold>
          proyectos
        </Text>
      </Box>
    </Flex>
    <Flex mb={2} flexWrap="wrap">
      <ImageBox
        width={[2 / 3, 1 / 2, 2 / 6]}
        p={[1, 2]}
        pl={[0, 0]}
        color="#FF4136"
      />
      <ImageBox width={[1 / 3, 2 / 6, 1 / 6]} p={[1, 2]} color="#0074D9" />
      <ImageBox width={[1 / 3, 1 / 6, 3 / 10]} p={[1, 2]} color="#2ECC40" />
      <ImageBox
        width={[2 / 3, 2 / 3, 2 / 10]}
        p={[1, 2]}
        color="#85144b"
        pr={[0, 0]}
      />
      <ImageBox
        width={[1 / 3, 1 / 3, 1 / 6]}
        p={[1, 2]}
        pl={[0, 0]}
        color="#2ECC40"
      />
      <ImageBox width={[1 / 3, 1 / 2, 1 / 2]} p={[1, 2]} color="#7FDBFF" />
      <ImageBox
        width={[1 / 3, 1 / 2, 2 / 6]}
        p={[1, 2]}
        pr={[0, 0]}
        color="#39CCCC"
      />
    </Flex>
  </CommonContainer>
);

export default Projects;
