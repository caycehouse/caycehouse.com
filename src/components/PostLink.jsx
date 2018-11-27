import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
  <div className="py-5">
    <Link to={post.fields.slug}>
      <h2>{post.frontmatter.title}</h2>
    </Link>
    <p>{post.excerpt}</p>
    <p>{post.frontmatter.date}</p>
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
