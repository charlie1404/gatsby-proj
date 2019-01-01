import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Header } from '../components';
import { Layout } from '../layouts';

const Index = (params) => {
  const { fixed: logoSrc } = params.data.file.childImageSharp;
  const { edges } = params.data.allDataJson;
  console.log(edges);
  return (
    <Layout>
      <Helmet title="Home Page" />
      <Header
        logoSrc={logoSrc}
      />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    allDataJson(limit: 20) {
      edges {
        node {
          sku
          price
          img
          name
          brand
        }
      }
    }
  }
`;
