import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <React.Fragment>
    <a
      href="https://facebook.com/caycehouse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cayce's Facebook"
    >
      <span className="fa-layers fa-fw fa-4x">
        <FontAwesomeIcon icon={faSquare} color="#3b5998" />
        <FontAwesomeIcon icon={faFacebookF} inverse transform="shrink-6" />
      </span>
    </a>
    <a
      href="https://twitter.com/caycehouse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cayce's Twitter"
    >
      <span className="fa-layers fa-fw fa-4x">
        <FontAwesomeIcon icon={faSquare} color="#00aced" />
        <FontAwesomeIcon icon={faTwitter} inverse transform="shrink-6" />
      </span>
    </a>
    <a
      href="https://instagram.com/caycehouse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cayce's Instagram"
    >
      <span className="fa-layers fa-fw fa-4x">
        <FontAwesomeIcon icon={faSquare} color="#cd486b" />
        <FontAwesomeIcon icon={faInstagram} inverse transform="shrink-6" />
      </span>
    </a>
    <a
      href="https://github.com/caycehouse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cayce's Github"
    >
      <span className="fa-layers fa-fw fa-4x">
        <FontAwesomeIcon icon={faSquare} color="#000" />
        <FontAwesomeIcon icon={faGithub} inverse transform="shrink-6" />
      </span>
    </a>
  </React.Fragment>
);
