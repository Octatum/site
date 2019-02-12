import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import './layout.css';
import theme from '../../utils/theme';
import Navbar from '../Navbar';
import Navhub from '../Navhub';

class Layout extends Component {
  state = {
    navhubOpen: true
  }

  toggleNavhub = () => {
    this.setState(prevState => ({ navhubOpen: !prevState.navhubOpen }));
  }

  render = () => {
    const { children, data } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
          <Helmet titleTemplate={data.site.siteMetadata.titleTemplate} />
          <Navbar toggleNavhub={this.toggleNavhub}/>
          {children}
          <Navhub toggleNavhub={this.toggleNavhub} open={this.state.navhubOpen}/>
        </React.Fragment>
      </ThemeProvider>
    );
  }
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
