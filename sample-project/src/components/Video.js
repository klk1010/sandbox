import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ fileName, fileTypes, ...props }) => (
  <video {...props}>
    {fileTypes.map(type => (
      <source key={type} src={`${fileName}.${type}`} type={`video/${type}`} />
    ))}
  </video>
);

Video.propTypes = {
  fileName: PropTypes.string.isRequired,
  fileTypes: PropTypes.array.isRequired,
};

export default Video;
