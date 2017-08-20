import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme.js';

const Header = styled.header`
  background-color: ${theme.primary};
  color: white;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
`;

const PrimaryHeader = ({ children }) => (
  <Header>
    {children}
  </Header>
);

PrimaryHeader.propTypes = {
  children: PropTypes.node,
};

export default PrimaryHeader;
