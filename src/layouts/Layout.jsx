import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SEO } from '../components';
import { Footer } from '.';
import theme from '../../config/theme';
import reset from '../styles/reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    min-width: 360px;
  }
  .gatsby-resp-image-wrapper {
    margin: 2.75rem 0;
  }
`;

const Layout = (data) => {
  const { children } = data;
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyle />
        <noscript>To browse this site, please enable JavaScript.</noscript>
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
