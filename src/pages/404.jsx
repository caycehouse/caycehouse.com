import React from 'react';

export default () => (
  <div className="text-center mt-5">
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <button
      type="button"
      className="btn btn-link"
      onClick={() => window.history.go(-1)}
    >
      Go Back
    </button>
  </div>
);
