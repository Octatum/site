import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Layout from '../../components/Layout';
import icon from '../../assets/play.svg';
import CommonContainer from '../../components/CommonContainer';
import Text, { MarkdownText } from '../../components/Text';
import { Box, Flex } from '@rebass/grid';

const MarkdownHeader = styled(MarkdownText)`
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ImageGalleryWrapper = styled(Box)`
  .image-gallery-thumbnails {
    padding-top: 8px;

    .image-gallery-thumbnails-container {
      ${({ imagesLength }) => imagesLength < 4 && 'text-align: left;'}
    }
  }

  .image-gallery-thumbnail {
    width: 27%;
    box-sizing: border-box;
  }
`;

const Icon = styled.img`
  margin-left: 0.5em;
`;

const OutsideLink = styled(Box)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Template = props => {
  const { projectTitle, images, description, link } = props.data;

  return (
    <Layout>
      <CommonContainer mb={5}>
        <Box>
          <Box py={3}>
            <Text color="black" size={6} bold font="secondary">
              Proyecto
            </Text>
          </Box>
          <MarkdownHeader font="secondary" size={2} color="black">
            {projectTitle}
          </MarkdownHeader>
        </Box>
        <ImageGalleryWrapper mt={3} imagesLength={images.length}>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
          />
          <Flex justifyContent="flex-end" alignItems="center" py={2}>
            <OutsideLink
              as="a"
              target="_blank"
              href={link}
              rel="noopener noreferrer"
            >
              <Text>
                Visita el{' '}
                <Text as="span" font="secondary" bold>
                  sitio web
                </Text>
              </Text>
              <Icon src={icon} />
            </OutsideLink>
          </Flex>
        </ImageGalleryWrapper>
        <Box width={[1, 3 / 4, 2 / 3]}>
          <MarkdownText color="black" size={1} align="justify" lineHeight="2">
            {description}
          </MarkdownText>
        </Box>
      </CommonContainer>
    </Layout>
  );
};

export default Template;
