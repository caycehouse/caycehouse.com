import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
  }

  body {
    margin-bottom: 40px;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
`;

export default () => (
  <Footer className="footer bg-light">
    <div className="container text-center">
      <span className="text-muted">
        &copy;
        {` ${new Date().getFullYear()} Cayce House | Powered by `}
        <a href="//sumojoe.com" target="_blank" rel="noopener noreferrer">
          SUMOjoe
        </a>
      </span>
    </div>
    <GlobalStyle />
  </Footer>
);
