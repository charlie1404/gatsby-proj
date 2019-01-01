import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Content = styled.header`
  width: 75%;
  margin: 20px auto 0;
  min-width: 360px;
`;

const BrandLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const StyledLink = styled(Link)`
  flex: 1 0 0;
  text-align: center;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'unset')};
`;

const Header = (data) => {
  return (
    <Content>
      <BrandLogo>
        <Img
          alt="logo"
          title="The Bag Store"
          fixed={data.logoSrc || {}}
        />
      </BrandLogo>
      <HeaderNavigation>
        <StyledLink to="/about" uppercase={1}>
          <p>About</p>
        </StyledLink>
        <StyledLink to="/blog" uppercase={1}>
          <p>Blog</p>
        </StyledLink>
        <StyledLink to="/">
          <h1>The Bag Store</h1>
        </StyledLink>
        <StyledLink to="/locate" uppercase={1}>
          <p>Locate Us</p>
        </StyledLink>
        <StyledLink to="/contact" uppercase={1}>
          <p>Contact Us</p>
        </StyledLink>
      </HeaderNavigation>
    </Content>
  );
};

export default Header;
