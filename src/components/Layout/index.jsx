import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import Footer from '../Footer';

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet titleTemplate={data.site.siteMetadata.titleTemplate} />
      {children}
      <Footer />
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
