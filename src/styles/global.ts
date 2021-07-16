import { create } from 'domain';
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #2A2E35;
    color: #F6E8EA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 1.5;
    --webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #F6E8EA;
  }

  button {
    cursor: pointer;
  }

  a {
    color: #0074c2;
    text-decoration: none;
  }

  a:hover {
    color: #0074c2;
  }
`;
