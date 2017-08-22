import React from 'react';
import styled from 'styled-components';
import { Header } from '../components';
import HomeContent from './HomeContent';

const Home = styled.div`
  width: 100%;
  height: 100%;
`;

export class SamplePage extends React.Component {
  render() {
    return (
      <Home>
        <Header>National Park Service</Header>
        <HomeContent />
      </Home>
    )
  }
}

export default SamplePage;
