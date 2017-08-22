import React from 'react';
import { PageContent, SectionWithTitle } from '../components';
import VideoCard from './VideoCard';
import { videos } from './stubbedData';

const HomeContent = () => (
  <PageContent>
    <SectionWithTitle title="Public Domain Videos" primary>
      {videos.map(video => (
        <VideoCard key={video.id} video={video}/>
      ))}
    </SectionWithTitle>
  </PageContent>
);

export default HomeContent;
