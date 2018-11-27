import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        {siteTitle}
      </Link>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Site Title not Set',
};

export default Header;
