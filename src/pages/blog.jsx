import React from 'react';
import Helmet from 'react-helmet';
import { Layout } from '../layouts';

const Blog = ({ data }) => {
  return (
    <Layout>
      <Helmet title="Blog Page" />
    </Layout>
  );
};

export default Blog;
