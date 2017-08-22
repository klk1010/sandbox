import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const StyledHeader = styled.header`
  background-image: linear-gradient(to left top, ${theme.primary.lighten(0.8)}, ${theme.secondary});
  color: white;
  text-align: left;
  padding: 0.5rem 0 0.25rem 2rem;
  font-family: 'Open Sans';
  font-size: 0.8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
`;

const Header = ({ children, ...props }) => (
  <StyledHeader {...props}>
    {children}
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
