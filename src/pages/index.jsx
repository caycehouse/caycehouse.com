import React from 'react';
import Particles from 'react-particles-js';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <React.Fragment>
      <Particles
        style={{ position: 'absolute' }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <h1 className="text-center">Index</h1>
    </React.Fragment>
  </Layout>
);
