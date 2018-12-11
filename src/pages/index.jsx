import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import SocialIcons from '../components/SocialIcons';

const styles = {
  background: {
    height: '100%',
    left: 0,
    position: 'absolute !important',
    top: 0,
    width: '100%',
    zIndex: -1,
  },
  container: {
    marginTop: '50px',
  },
};

const Index = ({ data, classes }) => (
  <Layout>
    <div align="center" className={classes.container}>
      <Avatar
        alt="Cayce House"
        component={Img}
        fixed={data.profileImg.childImageSharp.fixed}
      />
      <Typography variant="h1" gutterBottom>
        Cayce House
      </Typography>
      <Typography component="h2" variant="h3" gutterBottom>
        Web & App Developer
      </Typography>
      <SocialIcons />
      <Img
        fluid={data.bgImg.childImageSharp.fluid}
        className={classes.background}
      />
    </div>
  </Layout>
);

Index.propTypes = {
  classes: PropTypes.shape({
    background: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({ profileImg: PropTypes.object }).isRequired,
};

export default withStyles(styles)(Index);

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
