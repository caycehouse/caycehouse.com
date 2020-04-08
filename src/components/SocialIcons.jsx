import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default () => (
  <>
    <Grid container>
      <Grid item xs={4}>
        <a
          href="https://facebook.com/caycehouse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cayce's Facebook"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className="fa-fw fa-2x"
            color="#3b5998"
          />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a
          href="https://instagram.com/caycehouse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cayce's Instagram"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa-fw fa-2x"
            color="#cd486b"
          />
        </a>
      </Grid>
      <Grid item xs={4}>
        <a
          href="https://github.com/caycehouse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cayce's Github"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="fa-fw fa-2x"
            color="#000000"
          />
        </a>
      </Grid>
    </Grid>
  </>
);
