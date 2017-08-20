import React from 'react';
import styled from 'styled-components';
import { PageContent, PrimaryHeader } from '../components';

const LandingPage = styled.div`
  margin: 0;
`;

export class SamplePage extends React.Component {
  render() {
    return (
      <LandingPage>
        <PrimaryHeader>Header</PrimaryHeader>
        <PageContent>Content</PageContent>
      </LandingPage>
    )
  }
}

export default SamplePage;
