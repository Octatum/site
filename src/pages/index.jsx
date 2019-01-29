import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Projects from '../page-components/Home/Projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" keywords={[`gatsby`, `application`, `react`]} />
    <Projects />
  </Layout>
);

export default IndexPage;
