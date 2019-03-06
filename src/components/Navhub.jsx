import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Flex, Box } from '@rebass/grid';
import Text from './Text';

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 100%;
  width: 50%;
  right: -50%;
`;

const Address = styled(Box)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 2em;
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

const Navhub = ({ closeNavhub, open }) => {
  const props = useSpring({
    delay: open ? 150 : 0,
    to: open ? [{ right: '0%' }] : [{ right: '-50%' }],
  });

  return (
    <Container as={animated.div} style={props}>
      <Box width={1} style={{ backgroundColor: '#050505' }}>
        <Flex px={4} py={3} flexDirection="column" style={{ height: '100%' }}>
          <Box
            onClick={closeNavhub}
            style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
          >
            <Text color="white" size={8} style={{ lineHeight: '0.5em' }}>
              &times;
            </Text>
          </Box>
          <Box>
            <Address>
              <Box mb={[2, 3, 3]} pb={3}>
                <Text
                  color="white"
                  as="p"
                  align="left"
                  size={1}
                  lineHeight="1"
                  uppercase
                >
                  Ponte en
                </Text>
                <Text
                  as="h2"
                  font="secondary"
                  lineHeight="1"
                  size={7}
                  align="left"
                  style={{ marginTop: '-0.1em' }}
                  bold
                  italic
                  color="white"
                >
                  contacto
                </Text>
              </Box>
            </Address>
            <Box pt={3}>
              <Text font="secondary" color="white" as="p">
                contacto@octatum.com
              </Text>
            </Box>
          </Box>
          <Box flex="1" py={4}>
            <Flex
              flexDirection="column"
              alignItems="flex-end"
              style={{ textAlign: 'right', height: '100%' }}
              pt={5}
            >
              <Box flex="1">
                <Text color="white" size={3} as="p">
                  Explora nuestro{' '}
                  <Text color="white" as="span" font="secondary" bold italic>
                    pasado
                  </Text>
                </Text>
                <Text size={1} font="secondary" color="white">
                  proyectos
                </Text>
              </Box>
              <Box flex="1">
                <Text color="white" size={3} as="p">
                  Conoce nuestro{' '}
                  <Text color="white" as="span" font="secondary" bold italic>
                    presente
                  </Text>
                </Text>
                <Text size={1} font="secondary" color="white">
                  nosotros
                </Text>
              </Box>
              <Box flex="1">
                <Text color="white" size={3} as="p">
                  Armemos un gran{' '}
                  <Text color="white" as="span" font="secondary" bold italic>
                    futuro
                  </Text>
                </Text>
                <Text size={1} font="secondary" color="white">
                  contacto
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Text color="white" font="secondary">
                  Creando{' '}
                  <Text as="span" weight="900" color="white">
                    arte web{' '}
                  </Text>
                  desde el 2018.
                </Text>
              </Box>
              <Flex>
                {[
                  'fab fa-behance',
                  'fab fa-instagram',
                  'fab fa-facebook-f',
                ].map(item => (
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
};

export default Navhub;
