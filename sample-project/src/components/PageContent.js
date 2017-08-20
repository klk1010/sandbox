import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const Content = styled.section`
  margin-top: 3.5rem;
  color: ${theme.primary};
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  width: 100%;
`;

const PageContent = ({ children }) => (
  <Content>
    {children}
  </Content>
);

PageContent.propTypes = {
  children: PropTypes.node,
};

export default PageContent;
