import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

import CallForPaperList from './components/callForPaperList';

import PageDetails from './components/pageDetails';

import { CallForPapersProvider } from './context/callForPapers';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CallForPapersProvider>
          <CssBaseline />
          <Container maxWidth="lg">
            <PageDetails />
            <CallForPaperList />
          </Container>
        </CallForPapersProvider>
      </React.Fragment>
    </div>
  );
}

export default App;
