import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Projects from '../page-components/Home/Projects';
import Processes from '../page-components/Home/Processes';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" keywords={[`gatsby`, `application`, `react`]} />
    <Projects />
    <Processes />
  </Layout>
);

export default IndexPage;
