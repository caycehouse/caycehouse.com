import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Header from '../components/Header';

export default () => (
  <>
    <Header />
    <div align="center">
      <Typography variant="h1" color="primary" gutterBottom>
        Not Found
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => window.history.go(-1)}
      >
        Go Back
      </Button>
    </div>
  </>
);
