/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Global Styles go here:
const CustomStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export const GlobalStyles = () => (
   <>
      <CustomStyles />
   </>
);
