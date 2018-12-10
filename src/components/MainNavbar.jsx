import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  justifyContent: {
    justifyContent: 'center',
  },
};

const MainNavbar = props => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar className={classes.justifyContent}>
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/blog">
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  classes: PropTypes.shape({
    justifyContent: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(MainNavbar);
