// This is optional, but can be used to create base styles
import styled from 'styled-components';
// import { device } from '@/styles/BreakPoints';
import { device } from '@/styles/BreakPoints';
import { p_xs,
   m,
   bg_red,
   bg_white,
   cursor_pointer,
   f_sweet_bold,
   f_cream,
   f_red,
   f_burgundy,
   trans_all_ease,
   bd_radius_lg,
   t_uppercase,
   bg_burgundy,
   p_btn,
   p_btn_s
 } from '@/styles/base/Utilities';


export const Button = styled.div`
   ${m}  
   ${bg_red}
   ${cursor_pointer}
   ${p_btn}
   ${bd_radius_lg}
   ${f_cream}
   ${f_sweet_bold}
   ${trans_all_ease}
   ${t_uppercase}
   letter-spacing: 0.08rem;
   height: 44px;
   padding: 14px 30px;
   min-width: 149px;

   &:hover {
      ${bg_burgundy};
   }

   @media ${device.tablet} {
      height: 38px;
      padding: 10px 30px;
    }
`;

export const ButtonBurgundy = styled.div`
   ${m}  
   ${bg_burgundy}
   ${cursor_pointer}
   ${p_btn}
   ${bd_radius_lg}
   ${f_cream}
   ${f_sweet_bold}
   ${trans_all_ease}
   ${t_uppercase}
   letter-spacing: 0.08rem;
   height: 44px;
   padding: 14px 30px;
   border: var(--bd-main-burgundy);
   min-width: 149px;

   &:hover {
      ${bg_white};
      ${f_burgundy}
      border: var(--bd-main-burgundy);
   }

   @media ${device.tablet} {
      height: 38px;
      padding: 10px 30px;
}
`;

export const ButtonLoadMore = styled.div`
   ${m}
   ${bg_white}
   ${cursor_pointer}
   ${p_btn}
   ${bd_radius_lg}
   ${f_burgundy}
   ${f_sweet_bold}
   ${trans_all_ease}
   ${t_uppercase}
   letter-spacing: 0.08rem;
   height: 44px;
   padding: 14px 30px;
   border: var(--bd-main-burgundy);

   &:hover {
      ${bg_burgundy};
      ${f_cream}
      border: var(--bd-main-burgundy);
   }

   @media ${device.tablet} {
      height: 38px;
      padding: 10px 30px;
    }
`;

export const ButtonQuickAdd = styled.div`
   ${m}  
   ${bg_white}
   ${cursor_pointer}
   ${p_btn_s}
   ${bd_radius_lg}
   ${f_red}
   ${f_sweet_bold}
   ${t_uppercase}
   letter-spacing: 0.08rem;
   height: 32px;
   padding: 7px 12px;

   @media ${device.tablet} {
      height: 28px;
    }
`;