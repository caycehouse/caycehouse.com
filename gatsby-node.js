const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/PostTemplate.jsx');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [fields___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    title
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const filepath = createFilePath({ node, getNode });
    const [, year, month, day, title] = filepath.match(
      '^/([\\d]{4})/([\\d]{2})/([\\d]{2})/(.*)/$',
    );
    createNodeField({
      name: 'slug',
      node,
      value: `${year}/${month}/${day}/${title}`,
    });

    createNodeField({
      name: 'date',
      node,
      value: `${year}-${month}-${day}`,
    });

    createNodeField({
      name: 'title',
      node,
      value: `${title
        .replace(/-/g, ' ')
        .replace(/\b\w/g, w => w.toUpperCase())}`,
    });
  }
};
