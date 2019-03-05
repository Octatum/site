import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Projects from '../page-components/Home/Projects';
import Processes from '../page-components/Home/Processes';
import Contact from '../page-components/Home/ContactForm';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" keywords={[`gatsby`, `application`, `react`]} />
    <Projects />
    {/* <Processes /> */}
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
