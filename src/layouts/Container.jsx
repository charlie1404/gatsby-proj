import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  margin: auto;
  padding: 3rem 1.5rem;
  width: 60%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;
`;

const Container = ({
  children, type, className, center,
}) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default Container;
