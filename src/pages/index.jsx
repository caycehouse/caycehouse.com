import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PostLink from '../components/PostLink';

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
    margin: '0 auto',
    maxWidth: '768px',
    padding: '20px',
  },
  iconContainer: {
    padding: '25px',
  },
};

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
  classes,
  data,
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.fields.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.fields.slug} post={edge.node} />);

  return (
    <Layout>
      <div className={classes.container}>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Cayce House
        </Typography>
        <div align="center" className={classes.iconContainer}>
          <SocialIcons />
        </div>
        {Posts}
      </div>
      <Img
        fluid={data.bgImg.childImageSharp.fluid}
        className={classes.background}
      />
    </Layout>
  );
};

Blog.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Blog);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
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
