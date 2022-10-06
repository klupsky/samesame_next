// This is optional, but can be used to create base styles
import styled from 'styled-components';
// import { device } from '@/styles/BreakPoints';
import { p_xs, trans_all, bd_burgundy, btn_spacing, t_uppercase, f_sweet_bold, f_cream, bd_radius_lg, cursor_pointer, f_glamour, bd_red, bg_red, p_btn, bg_burgundy } from './Utilities';
import { device } from '../BreakPoints';

export const H1 = styled.h1`
   ${f_glamour}
`;

// export const H2 = styled.h2`
//    font-family: var(--f-glamour);
// `;

// export const P = styled.p`
//    /* you can use your theme */
//    font-size: var(--f-16);

//    /* how to use media queries */
//    @media ${device.tablet} {
//       font-size: var(--f-18);
//    }
// `;

// BUTTONS

export const BUTTON = styled.div`
   ${p_xs}   
   ${bg_red}
   ${bd_red}
   ${cursor_pointer}
   ${p_btn}
   ${bd_radius_lg}
   ${f_cream}
   ${f_sweet_bold}
   ${t_uppercase}
   ${trans_all}
   letter-spacing: var(--letter-spacing-8);
   position: absolute;
   height: 44px;
   padding: 10px 30px;

   &:hover {
      ${bg_burgundy}
      ${bd_burgundy}
      ${cursor_pointer}
   }

   @media ${device.tablet} {
      height: 38px;   
`;
