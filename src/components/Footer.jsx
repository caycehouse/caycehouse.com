import React from 'react';

export default () => (
  <footer className="footer bg-light">
    <div className="container text-center">
      <span className="text-black-50">
        &copy;
        {` ${new Date().getFullYear()} Cayce House | Powered by `}
        <a href="//sumojoe.com" target="_blank" rel="noopener noreferrer">
          SUMOjoe
        </a>
      </span>
    </div>
  </footer>
);
