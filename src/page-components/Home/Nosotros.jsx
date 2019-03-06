import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

import CommonContainer from '../../components/CommonContainer';
import Text, { MarkdownText } from '../../components/Text';

const GreenBox = styled(Box)`
  background: ${props => props.theme.color.green};
`;

const Nosotros = props => (
  <section>
    <CommonContainer pt={4}>
      <Box w={1}>
        <Text as="p" bold size={1} size={2}>
          Descubre a
        </Text>
        <Text as="h2" font="secondary" size={10} bold>
          Octatum
        </Text>
      </Box>
      <Box py={4}>
        <Text align="right" size={2}>
          ¿Cómo
          <br />
          creamos arte web?
        </Text>
      </Box>
    </CommonContainer>
    <Flex>
      <GreenBox my={3} pt={1} width={2 / 3} />
      <GreenBox py={3} width={1 / 3} />
    </Flex>
    <CommonContainer pt={5} pb={4} justifyContent="flex-end">
      <Box width={2 / 3} ml="auto">
        <MarkdownText align="right" lineHeight={1.5}>
          {props.description}
        </MarkdownText>
      </Box>
    </CommonContainer>
  </section>
);

export default Nosotros;
