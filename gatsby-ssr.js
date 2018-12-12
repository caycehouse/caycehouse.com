const React = require('react');

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    /* eslint-disable react/jsx-filename-extension */
    <noscript key="noscript">
      Your browser does not support JavaScript!
    </noscript>,
  ]);
};
