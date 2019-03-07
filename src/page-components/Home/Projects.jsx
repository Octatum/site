import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import CommonContainer from '../../components/CommonContainer';
import SectionHeader from './SectionHeader';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { mediaQueries } from '../../utils/theme';
import GatsbyImage from 'gatsby-image';
import { getCleanName } from '../../utils/functions';
import { navigationIds } from '../../components/Navhub';
import SectionDiv from '../../components/SectionDiv';

const ImageBox = styled(Box)`
  height: 12.5rem;
  max-width: 29rem;
  background: green;
  width: 100%;
`;

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

const Image = styled(GatsbyImage)`
  max-height: 100%;
  height: 100%;
`;

const Projects = () => {
  const projectsQueryData = useStaticQuery(graphql`
    {
      allSanityProject {
        edges {
          node {
            projectName
            coverImages {
              asset {
                fluid(maxWidth: 400) {
                  ...GatsbySanityImageFluid
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

  return (
    <CommonContainer>
      <SectionDiv id={navigationIds.projects} />
      <Flex justifyContent="flex-start" mt={3}>
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
              to={`/project/${projectCleanName}`}
              key={projectCleanName}
            >
              <Image fluid={project.coverImages[0].asset.fluid} />
            </ImageBox>
          );
        })}
      </Grid>
    </CommonContainer>
  );
};

export default Projects;
