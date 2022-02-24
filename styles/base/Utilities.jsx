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
   font-family: var(--f-light);
`;

export const f_black = css`
   font-family: var(--f-black);
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
   font-size: var(--f-sm);

   @media ${device.tablet} {
      font-size: var(--f-md);
   }
`;

export const p_xs = css`
   font-size: var(--f-xs);
`;

export const p_sm = css`
   font-size: var(--f-sm);
`;

export const h1 = css`
   font-size: var(--f-xl);

   @media ${device.tablet} {
      font-size: var(--f_xxl);
   }
`;

export const h2 = css`
   font-size: var(--f-lg);

   @media ${device.tablet} {
      font-size: var(--f-xl);
   }
`;

export const h3 = css`
   font-size: var(--f-md);

   @media ${device.tablet} {
      font-size: var(--f-lg);
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
   position: absolute;
   right: 0;
   top: 50%;
   transform: translateY(50%);
`;

export const absolute_center_top = css`
   position: absolute;
   top: 50%;
   transform: translateY(50%);
`;

export const pos_absolute_center = css`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(50%, 50%);
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

export const d_inline_block = css`
   display: inline-block;
`;

export const d_block = css`
   display: block;
`;

export const d_flex = css`
   display: flex;
`;

/* 
------------------------------------_
FLEXBOX, flex
------------------------------------_
*/

export const flex_wrap_row = css`
   flex-wrap: row;
`;

export const flex_wrap_col = css`
   flex-wrap: column;
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
   grid-column: 1 / 1;
`;

export const grid_start_2 = css`
   grid-column: 1 / 1;

   @media ${device.tablet} {
      grid-column: 2 / 1;
   }
`;

export const grid_start_3 = css`
   grid-column: 1 / 1;

   @media ${device.tablet} {
      grid-column: 3 / 1;
   }
`;

export const grid_start_4 = css`
   grid-column: 1 / 1;

   @media ${device.tablet} {
      grid-column: 4 / 1;
   }
`;

export const grid_start_5 = css`
   grid-column: 1 / 1;

   @media ${device.tablet} {
      grid-column: 5 / 1;
   }
`;

export const grid_start_6 = css`
   grid-column: 1 / 1;

   @media ${device.tablet} {
      grid-column: 6 / 1;
   }
`;

export const grid_start_7 = css`
   grid-column: 1 / 1;

   @media ${device.tablet} {
      grid-column: 7 / 1;
   }
`;

export const grid_start_8 = css`
   grid-column: 1 / 1;

   @media ${device.tablet} {
      grid-column: 8 / 1;
   }
`;

export const grid_start_9 = css`
   grid-column: 9 / 1;
`;

export const grid_start10 = css`
   grid-column: 10 / 1;
`;

export const grid_start11 = css`
   grid-column: 11 / 1;
`;

export const grid_start12 = css`
   grid-column: 12 / 1;
`;

export const grid_span1 = css`
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
   border: var(--bd-border-main);
`;

export const bd_inverted = css`
   border: var(--bd-border-main-inverted);
`;

export const bd_radius = css`
   border-radius: var(--bd-border-radius);
`;

export const bd_radius_round = css`
   border-radius: 50%;
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
