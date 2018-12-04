import React from 'react';
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
          <Img
            fluid={data.bgImg.childImageSharp.fluid}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          />
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
    bgImg: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
