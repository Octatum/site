import React from 'react';
import styled from 'styled-components';
import { Box } from '@rebass/grid';

import CommonContainer from '../../components/CommonContainer';
import Text, { MarkdownText } from '../../components/Text';

const Header = styled.h1`
  padding: 1em 0;
`;

const RightAlign = styled.div`
  text-align: right;
`;

const GreenDivider = styled(Box)`
  position: relative;
  height: 1.5rem;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    width: 100%;
    background: ${props => props.theme.color.green};
  }
`;

const GreenBox = styled(Box)`
  height: 100%;
  background: ${props => props.theme.color.green};
`;

const Paragraph = styled.p`
  width: 70%;
  margin: 3em 0 1em auto;
  text-align: right;
`;

const Nosotros = props => (
  <CommonContainer py={4}>
    <Header>
      <Text bold>Descubre a</Text>
      <Text font="secondary" size={8} style={{ fontWeight: '800' }}>
        Octatum
      </Text>
    </Header>
    <RightAlign>
      <Text size={2} style={{ padding: '0.5em 0' }}>
        ¿Cómo
        <br />
        creamos arte web?
      </Text>
      <GreenDivider w={1} mx={-5}>
        <GreenBox width={[1 / 2, 3 / 7]} ml="auto" />
      </GreenDivider>
    </RightAlign>
    <Paragraph>
      <MarkdownText lineHeight={1.5}>{props.description}</MarkdownText>
    </Paragraph>
  </CommonContainer>
);

export default Nosotros;
