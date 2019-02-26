import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import './layout.css';
import theme from '../../utils/theme';
import Navbar from '../Navbar';
import Navhub from '../Navhub';

function Layout(props) {
  const [navhubOpen, setNavhubOpen] = useState(false);
  const { children, data } = props;

  function openNavhub() {
    setNavhubOpen(true);
  }

  function closeNavhub() {
    setNavhubOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
        <Helmet titleTemplate={data.site.siteMetadata.titleTemplate} />
        <Navbar openNavhub={openNavhub} />
        {children}
        <Navhub
          closeNavhub={closeNavhub}
          open={navhubOpen}
        />
      </React.Fragment>
    </ThemeProvider>
  );
}

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
