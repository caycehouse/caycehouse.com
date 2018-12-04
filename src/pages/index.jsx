import React from 'react';
import Particles from 'react-particles-js';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SocialIcons from '../components/SocialIcons';

export default class Index extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#525ddc';
    document.body.style.color = '#fff';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
    document.body.style.color = null;
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <React.Fragment>
          <Particles
            style={{ position: 'fixed', top: 0 }}
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
            <Img
              alt="Cayce House"
              fixed={data.profileImg.childImageSharp.fixed}
              className="img-responsive rounded-circle"
              style={{
                zIndex: 999,
                position: 'relative',
              }}
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

Index.propTypes = {
  data: PropTypes.shape({ profileImg: PropTypes.object }).isRequired,
};

export const query = graphql`
  query {
    profileImg: file(relativePath: { eq: "profile-img.jpeg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
