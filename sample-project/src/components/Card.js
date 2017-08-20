import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

const StyledCard = styled.div`

`;

const Card = ({ zIndex, children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);

Card.propTypes = {
  zIndex: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
