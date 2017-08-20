import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SamplePage } from './pages';
import colors from './colors';

const App = () => (
  <ThemeProvider theme={colors}>
    <SamplePage />
  </ThemeProvider>
);

export default App;
