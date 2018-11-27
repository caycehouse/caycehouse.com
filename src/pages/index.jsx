import React from 'react';
import Particles from 'react-particles-js';
import profileImg from './profile-img.jpeg';

import Layout from '../components/Layout';
import SocialIcons from '../components/SocialIcons';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    document.body.style.backgroundColor = '#525ddc';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  render() {
    return (
      <Layout>
        <React.Fragment>
          <Particles
            style={{ position: 'fixed', zIndex: '-1' }}
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
          <div className="text-center mt-5">
            <img
              alt="Cayce House"
              className="img-responsive rounded-circle"
              src={profileImg}
              style={{ maxHeight: '250px' }}
            />
            <h1 className="display-2 mt-2">Cayce House</h1>
            <h2>Web & App Developer</h2>
            <div className="mt-5">
              <SocialIcons />
            </div>
          </div>
        </React.Fragment>
      </Layout>
    );
  }
}
