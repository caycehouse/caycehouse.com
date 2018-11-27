import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import '../styles/main.scss';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="mt-3">{children}</div>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
