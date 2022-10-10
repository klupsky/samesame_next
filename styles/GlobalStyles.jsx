/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

// import ut from '@/styles/UtilityClasses';

// Global Styles go here:
const CustomStyles = createGlobalStyle`


* {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: var(--f-main);
}

p {
  
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}


`;

export const GlobalStyles = () => (
   <>
      <CustomStyles />
   </>
);
