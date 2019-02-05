import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import Layout from '../components/Layout';
import icon from "../assets/play.svg";

const Container = styled.div`
  width: 100%;
  padding: 2em;
`

const TitleDiv = styled.div`
  padding-bottom: 2em;
`

const Header = styled.h1`
  font-family: "Playfair Display", "Lato", sans-serif;
  font-size: 2.3em;
  padding-bottom: 0.7rem;
`

const Subheader = styled.h2`
  font-family: "Playfair Display", "Lato", sans-serif;
  font-size: 1.1em;

  b {
    font-weight: bold;
  }
`

const ImageGalleryWrapper = styled.div`
  position: relative;
  padding: 1em 0 4em;

  .image-gallery-thumbnails {
    padding-top: 8px;
  }

  .image-gallery-thumbnail {
    width: calc(100% / ${props => props.imageCount});
  }
`

const Button = styled.button`
  border: none;
  margin: 0 4px;
  font-size: 1.5em;
  background: transparent;
  cursor: pointer;
`

const SeeTheProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1em;
  font-weight: lighter;

  span {
    font-family: "Playfair Display", "Lato", sans-serif;
    font-weight: bold;
  }
`

const Icon = styled.img`
  margin-left: 0.5em;
`

const Text = styled.p`
  padding-right: 2em;
  font-weight: lighter;
  line-height: 33px;

  span {
    font-family: "Playfair Display", "Lato", sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.color.green};
  }
`

const LeftButton = (onClick, disabled) => (
  <Button
    className='image-gallery-custom-left-nav'
    disabled={disabled}
    onClick={onClick}>
    <i class="fas fa-caret-left"/>
  </Button>
)

const RightButton = (onClick, disabled) => (
  <Button
    className='image-gallery-custom-right-nav'
    disabled={disabled}
    onClick={onClick}>
    <i class="fas fa-caret-right"/>
  </Button>
)

const images = [
  {
    original: "http://lorempixel.com/1000/600",
    thumbnail: "http://lorempixel.com/1000/600"
  },
  {
    original: "http://lorempixel.com/999/600",
    thumbnail: "http://lorempixel.com/999/600"
  },
  {
    original: "http://lorempixel.com/998/600",
    thumbnail: "http://lorempixel.com/998/600"
  },
]

const projectTemplate = () => (
  <Layout>
    <Container>
      <TitleDiv>
        <Header>Proyecto</Header>
        <Subheader>PIXEL<b>PERFECT</b></Subheader>
      </TitleDiv>
      <ImageGalleryWrapper imageCount={images.length}>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          renderLeftNav={LeftButton}
          renderRightNav={RightButton}
        />
        <SeeTheProject>
          <p>see the <span>project</span></p>
          <Icon src={icon}/>
        </SeeTheProject>
      </ImageGalleryWrapper>
      <Text>
        <span>— Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.
      </Text>
    </Container>
  </Layout>
);

export default projectTemplate;
