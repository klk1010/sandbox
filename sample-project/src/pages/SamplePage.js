import React from 'react';
import styled from 'styled-components';
import { PageContent, Header } from '../components';

const LandingPage = styled.div`
  margin: 0;
`;

export class SamplePage extends React.Component {
  render() {
    return (
      <LandingPage>
        <Header primary>Header</Header>
        <PageContent>
        </PageContent>
      </LandingPage>
    )
  }
}

export default SamplePage;
