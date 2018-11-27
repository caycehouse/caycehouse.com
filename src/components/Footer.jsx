import React from 'react';

export default () => (
  <footer className="footer bg-dark">
    <div className="container text-center">
      <span className="text-white-50">
        Copyright &copy;
        {` 2010 - ${new Date().getFullYear()} `}
        {'Cayce House | Powered by '}
        <a href="//sumojoe.com" target="_blank" rel="noopener noreferrer">
          SUMOjoe
        </a>
      </span>
    </div>
  </footer>
);
