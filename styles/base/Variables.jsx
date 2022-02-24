/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Global Styles go here:
const CustomStyles = createGlobalStyle`

/* Define global variables here */
:root {
/* colors (prefix: c) */
--c-lack: #000000;
--c-white: #fcfff7;
--c-gray: #f5f5f5;
--c-cyan: #00aeef;
--c-error-red: #ff6060;

/* fonts (prefix: f) */
--f-main: 'Open Sans', sans-serif;
--f-black: 'Open Sans', sans-serif;
--f-light: 'Open Sans', sans-serif;

/* line-heights */
--line-height: 1;
--line-height-sm: 0.2;
--line-height-md: 0.5;

/* font sizes (prefix: f) */
--f-xs: 12px;
--f-sm: 14px;
--f-md: 16px;
--f-lg: 36px;
--f-xl: 58px;
--f-xxl: 100px;

/* padding (prefix: pd) */
--pd-xs: 4px;
--pd-sm: 8px;
--pd-md: 16px;
--pd-lg: 28px;
--pd-xl: 50px;

/* margins (prefix: m) */
--m-xs: 4px;
--m-sm: 8px;
--m-md: 16px;
--m-lg: 28px;
--m-xl: 50px;


/* grid-12 */
--mobile-grid: repeat(6, minmax(0, 1fr));
--desktop-grid: repeat(12, minmax(0, 1fr));

/* screen sizes */
--mobile: 400px;
--tablet: 800px;
--desktop-sm: 1200px;
--desktop-md: 1400px;
--desktop-lg: 1800px;

/* borders (prefix: b) */
--bd-border-radius: 20px;
--bd-border-main: solid var(--c-black) 1px;
--bd-border-main-inverted: solid var(--c-gray) 1px;
}

`;

export const Variables = () => (
   <>
      <CustomStyles />
   </>
);
