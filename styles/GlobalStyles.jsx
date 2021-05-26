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
  font-family: 'Open Sans', sans-serif;
}

p {
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
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
