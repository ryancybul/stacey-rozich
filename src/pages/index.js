import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Gallery from '../components/Gallery';

const IndexPage = () => (
  <Layout>
    <SEO title="Stacey Rozich" />
    <Gallery />
  </Layout>
);

export default IndexPage;
