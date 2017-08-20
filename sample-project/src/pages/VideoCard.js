import React from 'react';
import PropTypes from 'prop-types';
import { Card, Video } from '../components';

const VideoCard = ({ video }) => (
  <Card title={video.title} stackLevel={2} height='20%' width='20%' primary>
    <Video
      fileName={video.fileName}
      fileTypes={video.fileTypes}
      height="100%"
      width="100%"
      controls
    />
  </Card>
);

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoCard;
