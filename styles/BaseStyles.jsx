// This is optional, but can be used to create base styles
import styled, { css } from 'styled-components';

// Define new const with bold style
const headingStyle = css`
   font-weight: bold;
`;

export const Headline = styled.h1`
   ${headingStyle}
   text-align: center;
   font-size: 60px;
`;
