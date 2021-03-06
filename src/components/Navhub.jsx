import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Flex, Box } from '@rebass/grid';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Text from './Text';

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
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

const GreenIcon = styled(OutboundLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 50%;
  background: ${props => props.theme.color.green};
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.15em;
  color: ${props => props.theme.color.black};
  text-decoration: none;
`;

const socialLinks = [
  {
    icon: ['fab', 'facebook-f'],
    link: 'https://fb.com/octatum',
  },
];

export const navigationIds = {
  projects: 'proyectos',
  about: 'nosotros',
  contact: 'contacto',
};

const LinkBox = styled(Box).attrs({
  as: Link,
  flex: 1,
})`
  display: block;
  text-decoration: none;
`;

const Navhub = ({ closeNavhub, open }) => {
  const props = useSpring({
    delay: open ? 150 : 0,
    to: open
      ? [
          {
            display: 'flex',
            opacity: 1,
          },
        ]
      : [{ opacity: 0 }, { display: 'none' }],
  });

  return (
    <Container as={animated.div} style={props}>
      <Box
        onClick={closeNavhub}
        width={[0, 0, 1 / 2]}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      />
      <Box width={[1, 1, 1 / 2]} style={{ backgroundColor: '#050505' }}>
        <Flex
          px={[3, 4]}
          py={3}
          flexDirection="column"
          style={{ height: '100%' }}
        >
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
                &#99;&#111;&#110;&#116;&#97;&#99;&#116;&#111;&#64;&#111;&#99;&#116;&#97;&#116;&#117;&#109;&#46;&#99;&#111;&#109;
              </Text>
            </Box>
          </Box>
          <Box flex="1" py={4}>
            <Flex
              flexDirection="column"
              alignItems="flex-end"
              style={{ textAlign: 'right', height: '100%' }}
              pt={[2, 3, 5]}
            >
              <LinkBox to={`/#${navigationIds.projects}`}>
                <Text color="white" size={3} as="p">
                  Explora nuestro{' '}
                  <Text color="white" as="span" font="secondary" bold italic>
                    trayecto
                  </Text>
                </Text>
                <Text size={1} font="secondary" color="white">
                  proyectos
                </Text>
              </LinkBox>
              <LinkBox to={`/#${navigationIds.about}`}>
                <Text color="white" size={3} as="p">
                  Conoce nuestro{' '}
                  <Text color="white" as="span" font="secondary" bold italic>
                    presente
                  </Text>
                </Text>
                <Text size={1} font="secondary" color="white">
                  nosotros
                </Text>
              </LinkBox>
              <LinkBox to={`/#${navigationIds.contact}`}>
                <Text color="white" size={3} as="p">
                  Armemos un gran{' '}
                  <Text color="white" as="span" font="secondary" bold italic>
                    futuro
                  </Text>
                </Text>
                <Text size={1} font="secondary" color="white">
                  contacto
                </Text>
              </LinkBox>
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
                {socialLinks.map(item => (
                  <Box pl={4} key={item.link}>
                    <GreenIcon
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon icon={item.icon} />
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
