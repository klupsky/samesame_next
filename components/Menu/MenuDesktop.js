import styled from 'styled-components';
import { IconSearch } from '../Icons/IconSearch';
import { IconProfile } from '../Icons/IconProfile';
import IconCartEmpty from '../Icons/IconCartEmpty';
import {
   a_none,
   bd_bottom_cream,
   bd_bottom_red,
   bg_white,
   d_flex,
   flex_justify_between,
   flex_wrap_row,
   f_burgundy,
   f_red,
   h4_sweet,
   trans_all_ease
} from '@/styles/base/Utilities';
import Logo from '../Logo';
import { device } from '@/styles/BreakPoints';
import Link from 'next/link';
import MenuDesktopOpen from './MenuDesktopOpen';
import { useState } from 'react';

export default function MenuDesktop() {
   /* Add an SEO to every page */
   // const pageSeoProps = generateSeo(data?.pageSeo?.seoTitle ? data?.pageSeo : globalData?.pageSeo);
   const [menuOpen, setMenuOpen] = useState(false);
   const handleHover = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <>
         {menuOpen ? <MenuDesktopOpen onMouse={handleHover} /> : <></>}

         <MenuDesktopWrapper>
            <MenuDesktopBackground>
               <MenuDesktopBackgroundShadow
                  style={{ boxShadow: menuOpen ? 'none' : '0px 4px 4px rgba(126, 19, 61, 0.08)' }}>
                  <MenuDesktopContainer>
                     <MenuDesktopNavContainer>
                        <MenuDesktopNavText>
                           <Link href="shop.html">
                              <LinkInner onMouseOver={handleHover}>Shop</LinkInner>
                           </Link>
                           <Link href="about.html">
                              <LinkInner onMouseOver={handleHover}>About</LinkInner>
                           </Link>
                           <Link href="bestsellers.html">
                              <LinkInner onMouseOver={handleHover}>Bestsellers</LinkInner>
                           </Link>
                        </MenuDesktopNavText>
                     </MenuDesktopNavContainer>

                     <MenuDesktopIconsContainer>
                        <IconInner>{IconSearch}</IconInner>
                        <IconInner>{IconProfile}</IconInner>
                        <IconInner>
                           <IconCartEmpty />
                        </IconInner>
                     </MenuDesktopIconsContainer>
                  </MenuDesktopContainer>

                  <MenuDesktopLogoContainer>
                     <Link href="index.html">
                        <Logo />
                     </Link>
                  </MenuDesktopLogoContainer>
               </MenuDesktopBackgroundShadow>
            </MenuDesktopBackground>
         </MenuDesktopWrapper>
      </>
   );
}

const MenuDesktopWrapper = styled.div`
   position: fixed;
   z-index: 3;
   width: 100vw;
   ${bg_white}
`;

const MenuDesktopBackground = styled.div`
   height: 72px;
`;

const MenuDesktopBackgroundShadow = styled.div`
   height: 72px;
   z-index: 0;
`;

const MenuDesktopContainer = styled.div`
   ${d_flex}
   height: 72px;
   ${flex_justify_between}
   ${bg_white}
${flex_wrap_row}
   width: 100vw;
`;

const MenuDesktopNavContainer = styled.div`
   max-width: 300px;
`;

const MenuDesktopNavText = styled.a`
   ${a_none}
`;

const LinkInner = styled.a`
   ${h4_sweet}
   ${f_red}
   
   ${trans_all_ease}
   ${bd_bottom_cream}
   padding: 25px 32px;

   :hover {
      ${f_burgundy}
      ${bd_bottom_red}
      padding-bottom: 25px;
   }
`;

const MenuDesktopLogoContainer = styled.div`
   max-width: 194px;
   display: block;
   position: relative;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   top: -50px;
   z-index: 1;
   ${a_none}

   @media ${device.tablet} {
      top: -55px;
   }
`;

const MenuDesktopIconsContainer = styled.div`
   padding: 0 32px;
   min-width: 150px;
   ${d_flex}
   justify-content: end;
   flex-wrap: nowrap;
`;

const IconInner = styled.a`
   margin-right: 30%;

   :last-child {
      margin-right: 0;
   }
`;
