import React from 'react';
import { Header } from '../components';
import HomeContent from './HomeContent';

export class SamplePage extends React.Component {
  render() {
    return (
      <div>
        <Header>Public Domain Videos</Header>
        <HomeContent />
      </div>
    )
  }
}

export default SamplePage;
