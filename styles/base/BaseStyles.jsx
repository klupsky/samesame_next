// This is optional, but can be used to create base styles
import styled, { css } from 'styled-components';
import { f_black, m_none } from '@/styles/base/Utilities';
import { device } from '@/styles/BreakPoints';

export const H1 = styled.h1`
   ${f_black}
   ${m_none}
   font-size: var(--f-lg);

   @media ${device.tablet} {
      font-size: var(--f-xxl);
   }
`;

export const H2 = styled.h2`
   ${f_black}
   ${m_none}
   font-size: var(--f-lg);

   @media ${device.tablet} {
      font-size: var(--f-xl);
   }
`;

export const P = styled.p`
   /* you can use your theme */
   font-size: var(--f-sm);

   /* how to use pseudo selectors */
   :hover {
      /* You can use css variables */
      color: var(--c-gray);
   }

   /* how to use media queries */
   @media ${device.tablet} {
      font-size: var(--f-md);
   }
`;
