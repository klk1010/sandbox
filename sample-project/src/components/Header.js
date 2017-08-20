import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme.js';

const getHeaderHeight = props => {
  const baseHeight = props.primary ? 3 : 1.5;
  const expandedHeight = props.expand ? baseHeight + 4 : baseHeight;
  return `${expandedHeight}rem`;
};

const StyledHeader = styled.header`
  background-color: ${props => props.primary ? theme.primary : theme.light};
  color: white;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: ${props => props.primary ? '600' : '400'};
  font-size: ${props => props.primary ? '2rem' : '1rem'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${getHeaderHeight};
`;

const Header = ({ children, primary, ...props }) => (
  <StyledHeader primary={primary}>
    {children}
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
