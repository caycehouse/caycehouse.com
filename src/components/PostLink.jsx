import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>
      {`${post.frontmatter.title} (${post.frontmatter.date})`}
    </Link>
  </div>
);

PostLink.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    fields: PropTypes.object,
    frontmatter: PropTypes.object,
  }).isRequired,
};

export default PostLink;
