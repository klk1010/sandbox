import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeHelper from '../themeHelper';

const Title = styled.h2`
  color: ${themeHelper};
  text-align: center;
  font-weight: 300;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const SectionWithTitle = ({ title, children, ...props}) => (
  <div>
    <Title {...props}>
      {title}
    </Title>
    <Section>
      {children}
    </Section>
  </div>
);

SectionWithTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SectionWithTitle;
