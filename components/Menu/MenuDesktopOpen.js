import styled from 'styled-components';
import { device } from '@/styles/BreakPoints';
import {
   bg_white,
   cursor_pointer,
   d_flex,

   flex_wrap_row,
   f_burgundy,
   f_red,
   trans_all_ease
} from '@/styles/base/Utilities';
import { h4_sweet } from '@/styles/base/Utilities';
import Image from 'next/image';
import Link from 'next/link';
export default function MenuDesktopOpen() {
   /* Add an SEO to every page */
   // const pageSeoProps = generateSeo(data?.pageSeo?.seoTitle ? data?.pageSeo : globalData?.pageSeo);
 

   return (
      <MenuDesktopOpenWrapper>
         <MenuDesktopBackground>
         <MenuDesktopOpenTextContainer>
         <MenuDesktopOpenLinkInner>
            <ul>
            <Link href="all.html">
               <li>All</li>
            </Link>
            <Link href="all.html">
               <li>Soap</li>
            </Link>
            <Link href="all.html">
               <li>Body Scrub</li>
            </Link>
            <Link href="all.html">
               <li>Bath Salts</li>
            </Link>
            <Link href="all.html">
               <li>Body Oil</li>
            </Link>
            <Link href="all.html">
               <li>Beauty</li>
            </Link>
            <Link href="all.html">
               <li>Accessories</li>
            </Link>
            <Link href="all.html">
               <li>Save on bundles</li>
            </Link>
            <Link href="all.html">
               <li>Bestsellers</li>
            </Link>
            </ul>
            
            </MenuDesktopOpenLinkInner>
         </MenuDesktopOpenTextContainer>

         <MenuDesktopOpenImageContainer>
            <ImageInner>
               <Image
                  src="/temp_assets/soaps/soap1.png"
                  alt="soap preview 1"
                  width="261px"
                  height="237px"
               />
            </ImageInner>
            <ImageInner>
               <Image
                  src="/temp_assets/soaps/soap2.png"
                  alt="soap preview 2"
                  width="261px"
                  height="237px"
               />
            </ImageInner>
            <ImageInner>
               <Image
                  src="/temp_assets/soaps/soap3.png"
                  alt="soap preview 3"
                  width="261px"
                  height="237px"
               />
            </ImageInner>
         </MenuDesktopOpenImageContainer>
         </MenuDesktopBackground>
      </MenuDesktopOpenWrapper>
   );
}

const MenuDesktopOpenWrapper = styled.div`
   position: absolute;
   z-index: 2;
   width: 100vw;
`;

const MenuDesktopBackground = styled.div`
height: 407px;
${bg_white}
${d_flex}
${flex_wrap_row}
justify-content: space-between;
padding: 101px 32px;
`;

const MenuDesktopOpenTextContainer = styled.div`
   max-width: 200px;
   
`;

const MenuDesktopOpenLinkInner = styled.a`
li {   
${h4_sweet}
   ${f_burgundy}
   line-height: var(--line-height-l);
         ${trans_all_ease}


   :hover {
      ${f_red}
      ${cursor_pointer}
      transform: translate(10px, 0);
   }
`;

const MenuDesktopOpenImageContainer = styled.div`
   ${d_flex}
   ${flex_wrap_row}
   justify-content: flex-end;
`;

const ImageInner = styled.div`
   margin-right: 20px;
   :last-child {
      margin-right: 0;
   }
`;
