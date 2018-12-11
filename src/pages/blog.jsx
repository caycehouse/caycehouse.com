import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import PostLink from '../components/PostLink';

import Layout from '../components/Layout';

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '768px',
    padding: '20px',
  },
};

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
  classes,
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.fields.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.fields.slug} post={edge.node} />);

  return (
    <Layout>
      <div className={classes.container}>
        <Typography
          component="h1"
          variant="h2"
          color="secondary"
          align="center"
          gutterBottom
        >
          Cayce&apos;s Blog
        </Typography>
        {Posts}
      </div>
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
  }
`;
