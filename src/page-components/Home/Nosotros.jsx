import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

import CommonContainer from '../../components/CommonContainer';
import Text, { MarkdownText } from '../../components/Text';

const GreenBox = styled(Box)`
  background: ${props => props.theme.color.green};
`;

const Nosotros = props => (
  <React.Fragment>
    <CommonContainer pt={4}>
      <Box py={3}>
        <Text bold>Descubre a</Text>
        <Text font="secondary" size={8} bold>
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
    <CommonContainer pt={4} justifyContent="flex-end">
      <Box width={2 / 3} ml="auto">
        <MarkdownText align="right" lineHeight={1.5}>
          {props.description}
        </MarkdownText>
      </Box>
    </CommonContainer>
  </React.Fragment>
);

export default Nosotros;
