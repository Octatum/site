import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

const Container = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 100%;
  padding: 0 1em;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
  transition: 0.7s right cubic-bezier(.23, 1, .32, 1);

  &.open {
    right: 0;
  }
`

const ExitButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  padding: 0.5rem;
  font-size: 2em;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 4em 1em 1em;
  overflow-y: scroll;
`

const Details = styled.div`
  height: 100%;
  width: 100%;
  padding-right: 25%;
  font-family: "Playfair Display", "Lato", sans-serif;
  line-height: 1.3;
`

const Address = styled.p`
  position: relative;
  font-size: 2em;
  padding-bottom: 0.3em;
  margin-bottom: 1em;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 48px;
    border: 2px solid ${props => props.theme.color.green};
  }
`

const Contact = styled.p`
  line-height: 1.6;
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-left: 25%;
  text-align: right;
  line-height: 1.3;
`

const LinkItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LinkHeader = styled.h3`
  font-size: 2em;

  span {
    font-family: "Playfair Display", "Lato", sans-serif;
    font-weight: bold;
    font-style: italic;
  }
`

const LinkDetail = styled.p`
  font-family: "Playfair Display", "Lato", sans-serif;
`

const FooterMessage = styled.p`
  font-size: 0.8em;

  span {
    font-family: "Playfair Display", "Lato", sans-serif;
    font-weight: bold;
  }
`

const GreenIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 50%;
  margin: 0 1em;
  background: ${props => props.theme.color.green};
`

const Icon = styled.i`
  font-size: 1.15em;
  color: ${props => props.theme.color.black};
`

const Navhub = ({ toggleNavhub, open }) => (
  <Container className={open ? "open" : ''}>
    <ExitButton onClick={toggleNavhub}>
      <i className="fas fa-times"/>
    </ExitButton>
    <ContentWrapper>
      <Box flex="1">
        <Details>
          <Address>Av. Eugenio Garza Sada 427, Roma, 64840 Monterrey, N.L.</Address>
          <Contact>
            +52 1 81 1910 8561
            <br/>
            contacto@octatum.com
          </Contact>
        </Details>
      </Box>
      <Box flex="1.3">
        <LinkList>
          <LinkItem>
            <LinkHeader>Lo que <span>hacemos</span></LinkHeader>
            <LinkDetail>servicios</LinkDetail>
          </LinkItem>
          <LinkItem>
            <LinkHeader>Lo que <span>hicimos</span></LinkHeader>
            <LinkDetail>portafolio</LinkDetail>
          </LinkItem>
          <LinkItem>
            <LinkHeader>Lo que <span>haremos</span></LinkHeader>
            <LinkDetail>contacto</LinkDetail>
          </LinkItem>
        </LinkList>
      </Box>
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <FooterMessage>2018, <span>INTERAXO LABS</span>, S.A.B. de C.V.</FooterMessage>
          </Box>
          <Flex>
            <GreenIcon>
              <Icon className="fab fa-behance"/>
            </GreenIcon>
            <GreenIcon>
              <Icon className="fab fa-twitter"/>
            </GreenIcon>
            <GreenIcon>
              <Icon className="fab fa-facebook-f"/>
            </GreenIcon>
          </Flex>
        </Flex>
      </Box>
    </ContentWrapper>
  </Container>
);

export default Navhub;
