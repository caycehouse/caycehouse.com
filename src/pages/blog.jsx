import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PostLink from '../components/PostLink';

import Layout from '../components/Layout';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.fields.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.fields.slug} post={edge.node} />);

  return (
    <Layout>
      <div className="container" style={{ maxWidth: '768px' }}>
        <h1 className="display-4 text-center">Cayce&apos;s Blog</h1>
        {Posts}
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Blog;

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
