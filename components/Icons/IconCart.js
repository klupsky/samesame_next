import { device } from '@/styles/BreakPoints';
import styled from 'styled-components';
import {
   relative,
   p_btn_xs,
   f_white,
   pos_absolute,
   bd_radius_round,
   d_inline_block,
   d_none,
   bg_red
} from '@/styles/base/Utilities';

export default function IconCart() {
   return (
      <IconContainer>
         <IconCartDesktop>
            <OverlayCircle>1</OverlayCircle>
            <svg
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M18.8899 18.0466C17.5738 18.0466 16.5069 19.1135 16.5069 20.4296C16.5069 21.7456 17.5738 22.8125 18.8899 22.8125C20.206 22.8125 21.2729 21.7456 21.2729 20.4296C21.2729 19.1135 20.206 18.0466 18.8899 18.0466ZM18.8899 18.0466H7.41265C6.81971 18.0466 6.31699 17.6106 6.23314 17.0236L5.86864 14.4721M1.01758 1.36572H3.9963L4.33673 3.7487M4.33673 3.7487H4.59205H23.6559L20.0814 14.4721H6.37928H5.86864M4.33673 3.7487L5.86864 14.4721M11.741 20.4296C11.741 21.7456 10.6741 22.8125 9.358 22.8125C8.04192 22.8125 6.97502 21.7456 6.97502 20.4296C6.97502 19.1135 8.04192 18.0466 9.358 18.0466C10.6741 18.0466 11.741 19.1135 11.741 20.4296Z"
                  stroke="#EF1326"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>
         </IconCartDesktop>
         <IconCartMobile>
            <OverlayCircleMobile>1</OverlayCircleMobile>
            <svg
               width="18"
               height="26"
               viewBox="0 0 18 26"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M2.88325 7.91724C2.71092 5.70757 3.28756 3.80533 5.05065 2.37064C6.15262 1.45055 7.57186 0.963695 9.02754 1.0064C9.90539 1.00846 10.7718 1.19918 11.5639 1.56474C12.3561 1.93031 13.0542 2.46155 13.6076 3.12C14.165 3.78598 14.5755 4.55515 14.8137 5.38017C15.052 6.20519 15.1129 7.0686 14.9929 7.91724H16.9813C17.79 7.91724 17.8828 8.00691 17.8828 8.75627V24.4097C17.8828 25.1911 17.8098 25.2616 17.0078 25.2616H0.835149C0.0729111 25.2616 0 25.1911 0 24.4738V8.73066C0 7.9941 0.0795399 7.92364 0.861662 7.91724H2.88325ZM0.96771 8.86516V24.3393H16.9084V8.87156H15.0194V13.6304C15.0194 13.957 14.9067 14.2004 14.5422 14.194C14.1776 14.1876 14.0848 13.957 14.0782 13.656V8.87156H3.80456V10.1013C3.80456 11.2029 3.80456 12.2982 3.80456 13.3998C3.80456 13.7521 3.86422 14.2004 3.32734 14.1876C2.79046 14.1748 2.88325 13.7264 2.86999 13.3806C2.86999 13.2525 2.86999 13.1308 2.86999 13.0091C2.86999 11.7986 2.86999 10.5945 2.86999 9.38395C2.86999 9.21742 2.86999 9.0509 2.86999 8.86516H0.96771ZM3.86421 7.88522H14.0716C14.2903 5.75881 13.6938 3.96545 11.8246 2.76133C11.0188 2.19497 10.0518 1.88247 9.05546 1.86642C8.05914 1.85037 7.08192 2.13156 6.25698 2.67166C4.26853 3.84375 3.63223 5.68195 3.86421 7.88522Z"
                  fill="#EF1326"
                  stroke="#EF1326"
                  stroke-width="0.5"
               />
            </svg>
         </IconCartMobile>
      </IconContainer>
   );
}

const IconContainer = styled.div`
   ${d_inline_block}
`;

const IconCartDesktop = styled.div`
   display: none;

   @media ${device.tablet} {
      ${d_inline_block}
      ${relative}
   }
`;

const IconCartMobile = styled.div`
   ${d_inline_block}
   ${relative}

   @media ${device.tablet} {
      ${d_none}
   }
`;

const OverlayCircle = styled.div`
   ${pos_absolute}
   left: 16px;
   top: -5px;
   ${bg_red}
   ${bd_radius_round}
height: 16.7px;
   width: 16.7px;
   ${p_btn_xs}
   ${f_white}
text-align: center;
   padding-top: 2px;
`;

const OverlayCircleMobile = styled.div`
   ${pos_absolute}
   left: 10px;
   top: 4px;
   ${bg_red}
   ${bd_radius_round}
${f_white}
height: 14px;
   width: 14px;
   ${p_btn_xs}
   text-align: center;
   padding-top: 2px;
`;
