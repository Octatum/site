import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { useTransition, animated } from 'react-spring';
import CommonContainer from '../../components/CommonContainer';
import SectionHeader from './SectionHeader';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { mediaQueries } from '../../utils/theme';
import GatsbyImage from 'gatsby-image';
import { getCleanName } from '../../utils/functions';
import { navigationIds } from '../../components/Navhub';
import SectionDiv from '../../components/SectionDiv';

const Grid = styled(Flex)`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 12.5rem;
  justify-items: center;
  grid-row-gap: 2rem;

  ${mediaQueries.medium} {
    grid-template-columns: repeat(2, 47.5%);
    grid-column-gap: 5%;
  }

  ${mediaQueries.large} {
    grid-template-columns: repeat(3, 30%);
  }
`;

const ImageBox = styled(Box)`
  position: relative;
  height: 12.5rem;
  max-width: 29rem;
  width: 100%;
`;

const Image = styled(animated(GatsbyImage))`
  max-height: 100%;
  height: 100%;
`;

const imageStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => setInterval(() => setIndex((index + 1) % 2), 2000), []);

  const projectsQueryData = useStaticQuery(graphql`
    {
      allSanityProject {
        edges {
          node {
            projectName
            coverImages {
              asset {
                fluid(maxWidth: 400) {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = projectsQueryData.allSanityProject.edges.map(({ node }) => ({
    coverImages: node.coverImages || [],
    name: node.projectName || '',
  }));

  const transitions = useTransition(index, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <CommonContainer>
      <SectionDiv id={navigationIds.projects} />
      <Flex justifyContent="flex-start">
        <SectionHeader
          topText="Explora"
          lightText="nuestro"
          greenText="PASADO"
        />
      </Flex>
      <Grid>
        {projects.map(project => {
          const projectCleanName = getCleanName(project.name);
          return (
            <ImageBox
              as={Link}
              name={`Ver detalles de proyecto ${project.name}`}
              to={`/proyecto/${projectCleanName}`}
              key={projectCleanName}
            >
              {transitions.map(({ item, props, key }) => (
                <Image
                  alt={project.name}
                  fluid={project.coverImages[item].asset.fluid}
                  style={{ ...props, ...imageStyles }}
                />
              ))}
            </ImageBox>
          );
        })}
      </Grid>
    </CommonContainer>
  );
};

export default Projects;
