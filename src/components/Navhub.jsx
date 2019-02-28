import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import Text from './Text';

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  right: -100%;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 2;
  height: 100%;
  width: 100%;

  ${({ open }) => open && 'right: 0;'}
`;


const Address = styled(Box)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 1.8em;
    border: 1px solid ${props => props.theme.color.green};
  }
`;

const GreenIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 50%;
  background: ${props => props.theme.color.green};
`;

const Icon = styled.i`
  font-size: 1.15em;
  color: ${props => props.theme.color.black};
`;

const Navhub = ({ closeNavhub, open }) => (
  <Container open={open}>
    <Box width={[1, 1, 1 / 2]} style={{ backgroundColor: 'black' }} ml="auto">
      <Flex px={4} py={3} flexDirection="column" style={{height: "100%"}}>
        <Box
          onClick={closeNavhub}
          style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
        >
          <Text color="white" size={8} style={{lineHeight: "0.5em"}}>
            &times;
          </Text>
        </Box>
        <Box>
          <Address>
            <Box mb={[2, 3, 4]} pb={2}>
              <Text
                font="secondary"
                size={3}
                color="white"
                as="a"
                href="https://goo.gl/maps/CeY48p9Umvz"
                target="_blank"
              >
                Av. Eugenio Garza Sada 427,
                <br />
                Roma, 64840 Monterrey,
                <br />
                N.L.
              </Text>
            </Box>
          </Address>
          <Box mb={2}>
            <Text font="secondary" size={1} color="white" as="p">
              +52 1 81 1910 8561
            </Text>
          </Box>
          <Text font="secondary" size={1} color="white" as="p">
            contacto@octatum.com
          </Text>
        </Box>
        <Box flex="1" py={4}>
          <Flex
            flexDirection="column"
            alignItems="flex-end"
            style={{ textAlign: 'right', height: "100%" }}
          >
            <Box flex="1">
              <Text size={4} as="p">
                Lo que{' '}
                <Text as="span" font="secondary" bold italic>
                  hacemos
                </Text>
              </Text>
              <Text size={1} font="secondary">
                servicios
              </Text>
            </Box>
            <Box flex="1">
              <Text size={4} as="p">
                Lo que{' '}
                <Text as="span" font="secondary" bold italic>
                  hicimos
                </Text>
              </Text>
              <Text size={1} font="secondary">
                portafolio
              </Text>
            </Box>
            <Box flex="1">
              <Text size={4} as="p">
                Lo que{' '}
                <Text as="span" font="secondary" bold italic>
                  haremos
                </Text>
              </Text>
              <Text size={1} font="secondary">
                contacto
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text as="p">
                2018,{' '}
                <Text font="secondary" as="span" bold>
                  INTERAXO LABS
                </Text>
                , S.A. de C.V.
              </Text>
            </Box>
            <Flex>
              {["fab fa-behance", "fab fa-instagram", "fab fa-facebook-f"].map((item)=> (
                <Box pl={4} key={item}>
                <GreenIcon>
                  <Icon className={item} />
                </GreenIcon>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Container>
);

export default Navhub;
