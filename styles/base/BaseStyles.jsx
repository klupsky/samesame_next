// This is optional, but can be used to create base styles
import styled, { css } from 'styled-components';
import { f_black, m_none } from '@/styles/base/Utilities';
import { device } from '@/styles/BreakPoints';

export const H1 = styled.h1`
   ${f_black}
   ${m_none}
   font-size: 60px;

   @media ${device.tablet} {
      font-size: 30px;
   }
`;

export const H2 = styled.h2`
   ${f_black}
   ${m_none}
   font-size: 30px;

   @media ${device.tablet} {
      font-size: 20px;
   }
`;

export const P = styled.p`
   /* you can use your theme */
   font-size: 18px;

   /* how to use pseudo selectors */
   :hover {
      /* You can use css variables */
      color: var(--c-gray);
   }

   /* how to use media queries */
   @media ${device.tablet} {
      font-size: 14px;
   }
`;
