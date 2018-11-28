import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';
import '../styles/main.scss';

const Layout = ({ children }) => (
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
        </Helmet>
        <Header />
        <div className="mt-3">{children}</div>
        <Footer />
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
