import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import '../styles/main.scss';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="mt-3">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
