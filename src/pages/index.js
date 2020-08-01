import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import GalleryFilters from '../components/GalleryFilters';

const IndexPage = () => (
  <Layout>
    <SEO title="Stacey Rozich" />
    <GalleryFilters />
  </Layout>
);

export default IndexPage;
