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
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <title>{`${seo.title} | ${seo.description}`}</title>
          <meta name="description" content={seo.description} />
          <noscript>
            <h1>
              You need JavaScript enabled in your browser to use this site.
            </h1>
          </noscript>
        </Helmet>
      </React.Fragment>
    )}
  />
);
