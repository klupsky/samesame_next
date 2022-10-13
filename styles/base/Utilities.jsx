/* eslint-disable camelcase */
/* eslint_disable react/jsx_filename_extension */

import { css } from 'styled-components';
import { device } from '@/styles/BreakPoints';

/* 
------------------------------------_
FONT STYLES / Text Tranforms / Decorations
------------------------------------_
*/

export const f_main = css`
   font-family: var(--f-main-light);
`;

export const f_main_bold = css`
   font-family: var(--f_main_bold);
`;

export const f_main_light = css`
   font-family: var(--f-main-light);
`;

export const f_glamour = css`
   font-family: var(--f-glamour);
`;

export const f_queens = css`
   font-family: var(--f-queens);
`;

export const f_queens_italic = css`
   font-family: var(--f-queens-italic);
`;

export const f_queens_med = css`
   font-family: var(--f-queens-med);
`;

export const f_queens_med_italic = css`
   font-family: var(--f-queens-med-italic);
`;

export const f_queens_bold_italic = css`
   font-family: var(--f-queens-bold-italic);
`;

export const f_sweet_bold = css`
   font-family: var(--f-sweet-bold);
   letter-spacing: 0.08rem;
`;

export const t_uppercase = css`
   text-transform: uppercase;
`;

export const t_lowercase = css`
   text-transform: lowercase;
`;

export const t_capitalize = css`
   text-transform: capitalize;
`;

export const t_underline = css`
   text-decoration: underline;
`;

export const t_line_through = css`
   text-decoration: line_through;
`;

/* 
------------------------------------_
PARAGRAPH, HEADLINE STYLES
------------------------------------_
*/

export const p = css`
   ${f_main_light}
   font-size: var(--f-16);
   line-height: var(--line-height-md) @media ${device.tablet} {
      font-size: var(--f-18);
   }
`;

// export const p = css`
//    font-size: var(--f-16);
//    ${f_main_light}
//    line-height: var(--line-height-md)

//    @media ${device.tablet} {
//       font-size: var(--f-18);
//    }
// `;

export const p_m = css`
   font-size: var(--f-16);
   line-height: var(--line-height-md) ${f_main_bold} @media ${device.tablet} {
      font-size: var(--f-18);
   }
`;

export const p_s = css`
   ${f_main_light}
   line-height: var(--line-height-md);
   font-size: var(--f-14);

   @media ${device.tablet} {
      font-size: var(--f-16);
   }
`;

export const p_sm = css`
   ${f_main_bold}
   line-height: var(--line-height-md);
   font-size: var(--f-14);

   @media ${device.tablet} {
      font-size: var(--f-16);
   }
`;

export const p_xs = css`
   font-size: var(--f-12);
   ${f_main_light}
   line-height: var(--line-height-md);

   @media ${device.tablet} {
      font-size: var(--f-14);
   }
`;

export const p_xsm = css`
   font-size: var(--f-12);
   ${f_main_bold}
   line-height: var(--line-height-md);

   @media ${device.tablet} {
      font-size: var(--f-14);
   }
`;

export const p_btn_s = css`
   font-size: var(--f-12);

   @media ${device.tablet} {
      font-size: var(--f-12);
   }
`;

export const p_btn_xs = css`
   font-size: var(--f-8);

   @media ${device.tablet} {
      font-size: var(--f-10);
   }
`;

export const p_productCard = css`
   font-size: var(--f-14);
   ${f_sweet_bold}
   ${t_uppercase}

   @media ${device.tablet} {
      font-size: var(--f-16);
   }
`;

export const p_productCardSearch = css`
   font-size: var(--f-12);
   ${f_sweet_bold}
   ${t_uppercase}

@media ${device.tablet} {
      font-size: var(--f-14);
   }
`;

export const p_xl = css`
   font-size: var(--f-40);
   ${f_queens}

   @media ${device.tablet} {
      font-size: var(--f-64);
   }
`;

export const p_xl_italic = css`
   font-size: var(--f-40);
   ${f_queens_med_italic}

   @media ${device.tablet} {
      font-size: var(--f-64);
   }
`;

export const p_lg = css`
   font-size: var(--f-28);
   ${f_queens_med}
   line-height: (--line-height);

   @media ${device.tablet} {
      font-size: var(--f-48);
      line-height: (--line-height-md);
   }
`;

export const p_lg_italic = css`
   font-size: var(--f-28);
   line-height: (--line-height);
   ${f_queens_med_italic}

   @media ${device.tablet} {
      font-size: var(--f-48);
      line-height: (--line-height-md);
   }
`;

export const p_med = css`
   font-size: var(--f-20);
   ${f_queens}
   line-height: (--line-height-md);

   @media ${device.tablet} {
      font-size: var(--f-28);
      line-height: (--line-height);
   }
`;

export const p_med_italic = css`
   font-size: var(--f-20);
   line-height: (--line-height-md);
   ${f_queens_italic}

   @media ${device.tablet} {
      font-size: var(--f-28);
      line-height: (--line-height);
   }
`;

export const p_med_bold_italic = css`
   ${f_queens_bold_italic}
   font-size: var(--f-20);
   line-height: (--line-height-md);

   @media ${device.tablet} {
      font-size: var(--f-28);
   }
`;

export const p_btn = css`
   font-size: var(--f-12);

   @media ${device.tablet} {
      font-size: var(--f-14);
   }
`;

export const h1 = css`
   font-size: var(--f-74);
   font-weight: 500;

   @media ${device.tablet} {
      font-size: var(--f-140);
   }
`;

export const h1_glamour = css`
   ${f_glamour}
   font-size: var(--f-74);
   font-weight: 500;
   line-height: (--line-height);

   @media ${device.tablet} {
      font-size: var(--f-140);
      line-height: (--line-height);
   }
`;

export const h1_queens = css`
   ${f_queens}
   font-size: var(--f-74);
   font-weight: 500;
   line-height: (--line-height-sm);

   @media ${device.tablet} {
      font-size: var(--f-140);
      line-height: (--line-height);
   }
`;

export const h1_queens_italic = css`
   ${f_queens_italic}
   font-size: var(--f-74);
   font-weight: 500;
   line-height: (--line-height-sm);

   @media ${device.tablet} {
      font-size: var(--f-140);
      line-height: (--line-height);
   }
`;

export const h2 = css`
   font-size: var(--f-60);
   font-weight: 400;

   @media ${device.tablet} {
      font-size: var(--f-64);
   }
`;

export const h2_glamour = css`
   ${f_glamour}
   font-weight: 400;
   font-size: var(--f-60);
   line-height: (--line-height-sm);

   @media ${device.tablet} {
      font-size: var(--f-64);
      line-height: (--line-height);
   }
`;

export const h2_queens = css`
   ${f_queens}
   font-weight: 400;
   font-size: var(--f-60);
   line-height: (--line-height-sm);

   @media ${device.tablet} {
      font-size: var(--f-64);
      line-height: (--line-height);
   }
`;

export const h2_queens_med_italic = css`
   ${f_queens_med_italic}
   font-weight: 400;
   font-size: var(--f-45);

   @media ${device.tablet} {
      font-size: var(--f-48);
   }
`;

export const h2_alt = css`
   font-size: var(--f-45);
   font-weight: 400;

   @media ${device.tablet} {
      font-size: var(--f-48);
   }
`;

export const h2_queens_med = css`
   ${f_queens}
   font-weight: 400;
   font-size: var(--f-45);

   @media ${device.tablet} {
      font-size: var(--f-48);
   }
`;

export const h2_queens_med_i = css`
   ${f_queens_med_italic}
   font-weight: 400;
   font-size: var(--f-45);

   @media ${device.tablet} {
      font-size: var(--f-48);
   }
`;

export const h3 = css`
   font-weight: 400;
   font-size: var(--f-28);

   @media ${device.tablet} {
      font-size: var(--f-34);
   }
`;

export const h3_queens = css`
   font-weight: 400;
   ${f_queens}
   font-size: var(--f-28);
   line-height: (--line-height);

   @media ${device.tablet} {
      font-size: var(--f-34);
      line-height: (--line-height);
   }
`;

export const h3_queens_med = css`
   font-weight: 400;
   ${f_queens_med}
   font-size: var(--f-28);
   line-height: (--line-height);

   @media ${device.tablet} {
      font-size: var(--f-34);
      line-height: (--line-height);
   }
`;

export const h3_queens_med_italic = css`
   font-weight: 400;
   ${f_queens_med_italic}
   font-size: var(--f-28);
   line-height: (--line-height);

   @media ${device.tablet} {
      font-size: var(--f-34);
      line-height: (--line-height);
   }
`;

export const h4_sweet = css`
   ${p_xs}
   ${f_sweet_bold}
   ${t_uppercase}
   font-weight: 400;
   letter-spacing: 0.08rem;
   font-size: var(--f-12);

   @media ${device.tablet} {
      font-size: var(--f-14);
   }
`;

/* 
------------------------------------_
WIDTH
------------------------------------_
*/

export const w_full = css`
   width: 100vw;
`;

export const w100 = css`
   width: 100%;
`;

export const w_80 = css`
   width: 80%;
`;

export const w_50 = css`
   width: 50%;
`;

export const w_min_full = css`
   min-width: 100vw;
`;

/* 
------------------------------------_
HEIGHT
------------------------------------_
*/

export const h_full = css`
   height: 100vh;
`;

export const h100 = css`
   height: 100%;
`;

export const h_80 = css`
   height: 80%;
`;

export const h_50 = css`
   height: 50%;
`;

export const h_min_full = css`
   min-height: 100vh;
`;

/* 
------------------------------------_
POSITIONING, ps
------------------------------------_
*/

export const pos_absolute = css`
   position: absolute;
`;

export const pos_absolute_right = css`
   right: 0;
   top: 50%;
   transform: translateY(-50%);
`;

export const absolute_center_top = css`
   top: 50%;
   transform: translateY(-50%);
`;

export const pos_absolute_center = css`
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const pos_fixed = css`
   width: 100%;
   position: fixed;
`;

export const pos_fixed_top = css`
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
`;

export const pos_fixed_bottom = css`
   width: 100%;
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
`;

export const relative = css`
   position: relative;
`;

/* 
------------------------------------_
DISPLAY, d
------------------------------------_
*/

export const d_visually_hidden = css`
   clip: rect(0 0 0 0);
   clip-path: inset(50%);
   height: 1px;
   overflow: hidden;
   position: absolute;
   white-space: nowrap;
   width: 1px;
`;

export const d_none = css`
   display: none;
`;

export const d_block = css`
   display: block;
`;

export const d_inline_block = css`
   display: inline-block;
`;

export const d_flex = css`
   display: flex;
`;

/* 
------------------------------------_
FLEXBOX, flex
------------------------------------_
*/

export const flex_wrap = css`
   flex-wrap: wrap;
`;

export const flex_wrap_row = css`
   flex-wrap: row;
`;

export const flex_wrap_col = css`
flex-direction: column;
flex-wrap: 
`;

export const flex_justify_between = css`
   width: 100%;
   justify-content: space-between;
   align-items: center;
`;

export const flex_center = css`
   width: 100%;
   justify-content: center;
   align-items: center;
`;

export const flex_row = css`
   flex-direction: row;
`;

export const flex_col = css`
   flex-direction: column;
`;

export const flex_align_center = css`
   align-items: center;
`;

export const flex_align_between = css`
   align-items: space-between;
`;

/* 
------------------------------------_
GRIDS 
------------------------------------_
*/

export const grid_12 = css`
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   grid-gap: var(--pd-md);

   @media ${device.tablet} {
      grid-template-columns: repeat(12, minmax(0, 1fr));
   }
`;

export const grid_start_1 = css`
   grid-column: 1 / -1;
`;

export const grid_start_2 = css`
   grid-column: 1 / -1;

   @media ${device.tablet} {
      grid-column: 2 / -1;
   }
`;

export const grid_start_3 = css`
   grid-column: 3 / -1;

   @media ${device.tablet} {
      grid-column: 3 / -1;
   }
`;

export const grid_start_4 = css`
   grid-column: 1 / -1;

   @media ${device.tablet} {
      grid-column: 4 / -1;
   }
`;

export const grid_start_5 = css`
   grid-column: 1 / -1;

   @media ${device.tablet} {
      grid-column: 5 / -1;
   }
`;

export const grid_start_6 = css`
   grid-column: 1 / -1;

   @media ${device.tablet} {
      grid-column: 6 / -1;
   }
`;

export const grid_start_7 = css`
   grid-column: 1 / -1;

   @media ${device.tablet} {
      grid-column: 7 / -1;
   }
`;

export const grid_start_8 = css`
   grid-column: 1 / -1;

   @media ${device.tablet} {
      grid-column: 8 / -1;
   }
`;

export const grid_start_9 = css`
   grid-column: 9 / -1;
`;

export const grid_start_10 = css`
   grid-column: 10 / -1;
`;

export const grid_start_11 = css`
   grid-column: 11 / -1;
`;

export const grid_start_12 = css`
   grid-column: 12 / -1;
`;

export const grid_span_1 = css`
   grid-column: span 1;
`;

export const grid_span_2 = css`
   grid-column: span 2;
`;

export const grid_span_3 = css`
   grid-column: span 6;

   @media ${device.tablet} {
      grid-column: span 3;
   }
`;

export const grid_span_4 = css`
   grid-column: span 6;

   @media ${device.tablet} {
      grid-column: span 4;
   }
`;

export const grid_span_6 = css`
   grid-column: span 6;
`;

export const grid_span12 = css`
   grid-column: span 6;

   @media ${device.tablet} {
      grid-column: span 12;
   }
`;

/* 
------------------------------------_
MARGIN/ PADDING
------------------------------------_
*/

export const pd = css`
   padding: var(--pd-md);

   @media ${device.tablet} {
      padding: var(--pd-lg);
   }
`;

export const pd_md = css`
   padding: var(--pd-md);
`;

export const pd_xs = css`
   padding: var(--pd-xs);
`;

export const pd_none = css`
   padding: 0;
`;

export const pd_none_top = css`
   padding-top: 0;
`;

export const pd_none_bottom = css`
   padding-bottom: 0;
`;

export const m = css`
   margin: var(--pd-md);

   @media ${device.tablet} {
      margin: var(--pd-lg);
   }
`;

export const m_none = css`
   margin: 0;
`;

export const m_none_bottom = css`
   margin-bottom: 0;
`;

export const m_none_top = css`
   margin-top: 0;
`;

/* 
------------------------------------_
OVERFLOWS
------------------------------------_
*/

export const overflow_hidden = css`
   overflow: hidden;
`;

export const overflow_visible = css`
   overflow: visible;
`;

/* 
------------------------------------_
TRANSITIONS
------------------------------------_
*/

export const trans_all = css`
   transition: all 0export const 3s ease;
`;

export const trans_all_ease = css`
   transition: all 0.3s ease;
`;

export const trans_color_ease = css`
   transition: color 0.3s ease;
`;

export const trans_rotate = css`
   transition: all 0export const 3s ease;
   &:hover {
      transform: rotate(90deg);
   }
`;

/* 
------------------------------------_
BORDERS
------------------------------------_
*/

export const bd = css`
   border: var(--bd-main);
`;

export const bd_inverted = css`
   border: var(--bd-main-inverted);
`;

export const bd_radius = css`
   border-radius: var(--bd-radius);
`;

export const bd_radius_round = css`
   border-radius: 50%;
`;

export const bd_radius_lg = css`
   border-radius: var(--bd-radius-lg);
`;

export const bd_bottom_cream = css`
   border-bottom: 1.5px solid var(--c-cream);
`;

export const bd_bottom_red = css`
   border-bottom: 1.5px solid var(--c-red);
`;


/* 
------------------------------------_
CURSOR/ POINTER
------------------------------------_
*/

export const cursor_none = css`
   pointer-events: none;
`;

export const cursor_pointer = css`
   cursor: pointer;
`;

export const cursor_disabled = css`
   cursor: no-drop;
`;

export const cursor_default = css`
   cursor: pointer;
`;

/* 
------------------------------------_
SPACINGS
------------------------------------_
*/

export const m_top_xl = css`
   margin-top: var(--pd-lg);
   line-height: (--line-height);

   @media ${device.tablet} {
      margin-top: var(--pd-xl);
   }
`;

export const m_top_lg = css`
   margin-top: var(--pd-md);

   @media ${device.tablet} {
      margin-top: var(--pd-lg);
   }
`;

export const m_top_md = css`
   margin-top: var(--pd-sm);

   @media ${device.tablet} {
      margin-top: var(--pd-md);
   }
`;

export const m_top_sm = css`
   margin-top: var(--pd-sm);
`;

export const m_bottom_xl = css`
   margin-bottom: var(--pd-lg);

   @media ${device.tablet} {
      margin-bottom: var(--pd-xl);
   }
`;

export const m_bottom_lg = css`
   margin-bottom: var(--pd-md);

   @media ${device.tablet} {
      margin-bottom: var(--pd-lg);
   }
`;

export const m_bottom_md = css`
   margin-bottom: var(--pd-sm);

   @media ${device.tablet} {
      margin-bottom: var(--pd-md);
   }
`;

export const m_bottom_sm = css`
   margin-bottom: var(--pd-sm);
`;

export const m_right_sm = css`
   margin-right: var(--pd-sm);
`;

export const m_left_sm = css`
   margin-left: var(--pd-sm);
`;

export const m_right_sm_remove_last = css`
   margin-right: var(--pd-sm);

   &:last-child {
      margin-right: 0;
   }
`;

export const m_right_xs_remove_last = css`
   margin-right: var(--pd-xs);

   &:last-child {
      margin-right: 0;
   }
`;

export const m_left_sm_remove_last = css`
   margin-left: var(--pd-sm);

   &:last-child {
      margin-left: 0;
   }
`;

export const m_left_xs_remove_last = css`
   margin-left: var(--pd-xs);

   &:last-child {
      margin-left: 0;
   }
`;

export const input_spacing = css`
   padding: rem(5) rem(10);

   @media ${device.tablet} {
      padding: rem(10) rem(20);
   }
`;

export const btn_spacing = css`
   padding: rem(13) rem(30);

   @media ${device.tablet} {
      padding: rem(15) rem(30);
   }
`;

/* 
------------------------------------_
COLORS
------------------------------------_
*/

// backgrounds

export const bg_black = css`
   background-color: var(--c-black);
`;

export const bg_white = css`
   background-color: var(--c-white);
`;

export const bg_cream = css`
   background-color: var(--c-cream);
`;

export const bg_yellow = css`
   background-color: var(--c-yellow);
`;

export const bg_pink = css`
   background-color: var(--c-pink);
`;

export const bg_burgundy = css`
   background-color: var(--c-burgundy);
`;

export const bg_red = css`
   background-color: var(--c-red);
`;

// border

export const bd_black = css`
   border-color: var(--c-black);
`;

export const bd_white = css`
   border-color: var(--c-white);
`;

export const bd_cream = css`
   border-color: var(--c-cream);
`;

export const bd_yellow = css`
   border-color: var(--c-yellow);
`;

export const bd_pink = css`
   border-color: var(--c-pink);
`;

export const bd_burgundy = css`
   border-color: var(--c-burgundy);
`;

export const bd_red = css`
   border-color: var(--c-red);
`;

// fonts

export const f_black = css`
   color: var(--c-black);
`;

export const f_white = css`
   color: var(--c-white);
`;

export const f_cream = css`
   color: var(--c-cream);
`;

export const f_yellow = css`
   color: var(--c-yellow);
`;

export const f_pink = css`
   color: var(--c-pink);
`;

export const f_burgundy = css`
   color: var(--c-burgundy);
`;

export const f_red = css`
   color: var(--c-red);
`;


// Link styles


export const a_none = css`
text-decoration: none;
${cursor_pointer}
`;