import { d_flex, f_cream, f_red, p_s, h1_queens_italic } from '@/styles/base/Utilities';
import styled from 'styled-components';
import Image from 'next/image';
import { device } from '@/styles/BreakPoints';

export default function Hero() {
   /* Add an SEO to every page */
   // const pageSeoProps = generateSeo(data?.pageSeo?.seoTitle ? data?.pageSeo : globalData?.pageSeo);

   return (
      <HeroWrapper>
         <HeroContainer>
            <HeroImageContainer>
               <Image
                  src="/temp_assets/soapy-hero.png"
                  alt="soapy faith woman smiling"
                  layout="fill"
                  sizes={`(max-width: ${device.tablet}px) 600vw, 400vw`}
               />
               <HeroContent>
                  <HeroTextContainer>
                     <HeroHeading>Oh Hey Skin</HeroHeading>
                     <HeroText>
                        Born in Heaven.
                        <br />
                        Handmade in California.
                     </HeroText>
                  </HeroTextContainer>
               </HeroContent>
            </HeroImageContainer>
         </HeroContainer>
      </HeroWrapper>
   );
}

const HeroWrapper = styled.div`
   position: absolute;
   top: 72px;
`;

const HeroContainer = styled.div`
   ${d_flex}
   width: 100vw;
   height: calc(100vh - 72px);

   @media ${device.tablet} {
      height: calc(100vh - 72px);
   }
`;

const HeroImageContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;

   img {
      object-fit: cover;
   }
`;

const HeroContent = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   height: 100%;
`;

const HeroTextContainer = styled.div`
   margin: 0 auto 0 auto;
   padding-bottom: 4%;
   text-align: center;

   @media ${device.tablet} {
      padding-bottom: 5%;
   }
`;

const HeroHeading = styled.h1`
   ${h1_queens_italic}
   ${f_red}
   line-height: 66px;
   margin-bottom: 20px;
   max-width: 300px;
   position: relative;

   @media ${device.tablet} {
      margin-bottom: 8.7%;
      max-width: 700px;
      left: -5px;
   }
`;

const HeroText = styled.p`
   ${p_s}
   ${f_cream}
   max-width: 400px;
   margin: 0 auto auto;
   @media ${device.tablet} {
      line-height: 20.29px;
   }
`;
