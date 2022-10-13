/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Global Styles go here:
const CustomStyles = createGlobalStyle`

/* Define global variables here */

:root {
/* colors (prefix: c) */
--c-black: #000000;
--c-white: #ffffff;
--c-cream: #fdf9ee;
--c-yellow: #f9f2d6;
--c-pink: #fde8ea;
--c-burgundy: #7e133d;
--c-red: #ef1326;

/* fonts (prefix: f) */
--f-main: 'Euclid Circular B', sans-serif;
--f-main-bold: 'Euclid Circular B Bold', sans-serif;
--f-main-light: 'Euclid Circular B Light', sans-serif;

--f-glamour: 'Glamour Absolute', serif;

--f-queens: 'Queens', serif;
--f-queens-italic: 'Queens Italic', serif;
--f-queens-med: 'Queens Medium', serif;
--f-queens-med-italic: 'Queens Medium Italic', serif;
--f-queens-bold-italic: 'Queens Bold Italic', serif;


--f-sweet-bold: 'Sweet Sans Bold', sans-serif;

/* line-heights */
--line-height-none: 0;
--line-height: 1;
--line-height-md: 1.1;
--line-height-sm: 0.9;
--line-height-l: 2;

/* font sizes (prefix: f) */
--f-8: 8px;
--f-10: 10px;
--f-12: 12px;
--f-14: 14px;
--f-16: 16px;
--f-18: 18px;
--f-20: 20px;
--f-28: 28px;
--f-34: 34px;
--f-40: 40px;
--f-45: 45px;
--f-48: 48px;
--f-60: 60px;
--f-64: 64px;
--f-74: 74px;
--f-140: 140px;

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

/* margins (prefix: m) */
--m-xs: 4px;
--m-sm: 8px;
--m-md: 16px;
--m-lg: 28px;
--m-xl: 50px;


/* grid-12 */
--mobile-grid: repeat(6, minmax(0, 1fr));
--desktop-grid: repeat(12, minmax(0, 1fr));
--desktop-grid-cols: 12;
--mobile-grid-cols: 6;

/* screen sizes */
--mobile: 400px;
--tablet: 800px;
--desktop-sm: 1200px;
--desktop-md: 1400px;
--desktop-lg: 1800px;

/* borders (prefix: bd) */
--bd-radius: 15px;
--bd-radius-lg: 30px;
--bd-main: solid var(--c-yellow) 1px;
--bd-main-inverted: solid var(--c-burgundy) 1px;
--bd-main-red: solid var(--c-red) 1px;
--bd-main-burgundy: solid var(--c-burgundy) 1px;

/* shadows */
--drop-shadow: 0px 4px 4px rgba(126, 19, 61, 0.08);

`;

export const Variables = () => (
   <>
      <CustomStyles />
   </>
);
