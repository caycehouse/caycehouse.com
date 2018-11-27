import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="container" style={{ maxWidth: '768px' }}>
        <h1 className="display-4">{frontmatter.title}</h1>
        <h2 className="h5 text-muted">{frontmatter.date}</h2>
        {/* Disable no-danger as we are providing HTML safe content */}
        {/* eslint-disable react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
