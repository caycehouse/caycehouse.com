import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';

const styles = {
  container: {
    margin: '50px auto',
    maxWidth: '768px',
    padding: '20px',
  },
};

const PostTemplate = ({ data, classes }) => {
  const { markdownRemark } = data;
  const { fields, html } = markdownRemark;

  return (
    <Layout>
      <div className={classes.container}>
        <Typography color="secondary" component="h1" variant="h2" gutterBottom>
          {fields.title}
        </Typography>
        <Typography component="h2" variant="subtitle1" gutterBottom>
          {fields.date}
        </Typography>
        {/* Disable no-danger as we are providing HTML safe content */}
        {/* eslint-disable react/no-danger */}
        <Typography component="div" variant="body1" gutterBottom>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
      </div>
    </Layout>
  );
};

PostTemplate.propTypes = {
  classes: PropTypes.shape({ container: PropTypes.string.isRequired })
    .isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(PostTemplate);

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
      fields {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
