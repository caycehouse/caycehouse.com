import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{`${seo.title} | ${seo.description}`}</title>
          <meta name="description" content={seo.description} />
        </Helmet>
      </>
    )}
  />
);
