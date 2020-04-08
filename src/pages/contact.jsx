import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';

const styles = {
  root: {
    textAlign: 'center',
  },
  noTextTransform: {
    textTransform: 'none',
  },
};

const Contact = ({ classes }) => (
  <Layout>
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Feel free to contact me to discuss any business matters.
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        I am currently available for hire to do freelance work, including
        consulting.
      </Typography>
      <Button
        color="primary"
        component="a"
        href="mailto:cayce@caycehouse.com"
        className={classes.noTextTransform}
      >
        cayce@caycehouse.com
      </Button>
    </div>
  </Layout>
);

Contact.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
