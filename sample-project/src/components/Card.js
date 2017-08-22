import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const getCardLevel = props => {
  const baseLevel = 6;
  const blurRadius = props.stackLevel ? props.stackLevel * baseLevel : baseLevel;
  return `0 0 ${blurRadius}px 0 rgba(33, 33, 33, 0.41)`;
};

const StyledCard = styled.div`
  background-color: white;
  box-shadow: ${getCardLevel};
  margin: 0.25rem;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width: 'auto'};
`;

const Title = styled.h2`
  text-align: center;
  padding: ${props => props.title ? '0.25rem' : '0'};
  margin: auto;
  font-weight: 100;
  color: ${props => props.primary ? 'white' : theme.primary};
  font-size: ${props => props.cardSize ? `${props.cardSize}rem` : '1rem'};
  background-color: ${props => props.primary ? theme.secondary.lighten(0.5) : 'white'};
`;

const Card = ({ primary, stackLevel, height, width, title = '', children }) => (
  <StyledCard height={height} width={width} stackLevel={stackLevel}>
    <Title primary={primary} title={title}>{title}</Title>
    {children}
  </StyledCard>
);

Card.propTypes = {
  stackLevel: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Card;
