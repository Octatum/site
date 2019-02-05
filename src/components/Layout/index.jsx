import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import './layout.css';
import theme from '../../utils/theme';
import Navbar from '../Navbar';

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
      <Helmet titleTemplate={data.site.siteMetadata.titleTemplate} />
      <Navbar />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            titleTemplate
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);
