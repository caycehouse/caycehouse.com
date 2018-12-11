import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
  },
  noTextTransform: {
    textTransform: 'none',
  },
});

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Button
        className={classes.noTextTransform}
        onClick={() => window.open('https://sumojoe.com')}
      >
        &copy;
        {` ${new Date().getFullYear()} Cayce House | Powered by `}
        SUMOjoe
      </Button>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.shape({
    footer: PropTypes.string.isRequired,
    noTextTransform: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Footer);
