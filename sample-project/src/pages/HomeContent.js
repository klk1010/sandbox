import React from 'react';
import styled from 'styled-components';
import { PageContent, SectionWithTitle } from '../components';
import VideoCard from './VideoCard';
import { videos } from './stubbedData';
import yellowstone from '../multimedia/yellowstone.jpg';

const Background = styled(PageContent)`
  background-image: url(${yellowstone});
  background-size: cover;
  background-repeat: no-repeat;
`;

const HomeContent = () => (
  <Background>
    <SectionWithTitle title="National Park Service" secondary>
      {videos.map(video => (
        <VideoCard key={video.id} video={video}/>
      ))}
    </SectionWithTitle>
  </Background>
);

export default HomeContent;
