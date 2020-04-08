import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import Drawer from './Drawer';
import EasterEgg from './EasterEgg';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Layout = ({ children, classes }) => (
  <>
    <EasterEgg />
    <Header />
    <div className={classes.root}>
      <Drawer />
      <main className={classes.content}>{children}</main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
