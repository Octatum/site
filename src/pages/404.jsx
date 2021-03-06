import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import CommonContainer from '../components/CommonContainer';
import Text from '../components/Text';
import { Box, Flex } from '@rebass/grid';
import { Link } from 'gatsby';

const NotFoundPage = props => {
  const location = props.location && props.location.pathname;

  return (
    <Layout>
      <SEO title="404: Not found" />
      <CommonContainer
        style={{ height: 'calc(100vh - 100px)' }}
        alignItems="center"
        justifyContent="center"
        as={Flex}
        flexDirection="column"
      >
        <Box pb={3}>
          <Text font="secondary" align="center" size={10}>
            ¡No encontré la página!
          </Text>
        </Box>
        <Box>
          <Text align="center" size={3}>
            la ruta {location} no existe.
          </Text>
        </Box>
        <Box pt={3}>
          <Text
            align="center"
            size={2}
            as={Link}
            color="green"
            to="/"
            style={{ textDecoration: 'underline' }}
          >
            Regresar a inicio
          </Text>
        </Box>
      </CommonContainer>
    </Layout>
  );
};

export default NotFoundPage;
