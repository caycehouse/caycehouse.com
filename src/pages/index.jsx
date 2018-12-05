import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SocialIcons from '../components/SocialIcons';

const Container = styled.div`
  color: #ffffff;
`;

const Index = ({ data }) => (
  <Layout>
    <Container>
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
    </Container>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.shape({ profileImg: PropTypes.object }).isRequired,
};

export default Index;

export const query = graphql`
  query {
    profileImg: file(relativePath: { eq: "icon.jpeg" }) {
      childImageSharp {
        fixed(width: 250, height: 250, quality: 85) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    bgImg: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
