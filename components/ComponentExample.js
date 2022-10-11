/* 
   This is an example component.
   This demonstrates how components can be done and styled components can be used.
*/
import Link from 'next/link';

import { linkResolver } from '@/hooks/linkResolver';

import styled from 'styled-components';
import { device } from '@/styles/BreakPoints';
import Image from 'next/image';

const ComponentExample = ({ image, museum, description, city, link, linkType }) => {
   return (
      <Article>
         <Link href={link && linkResolver(linkType, link)}>
            <a>
               <div className="imgContainer">
                  {image?.url && (
                     <Image src={image?.url} alt={image?.alt} layout="fill" objectFit="cover" />
                  )}
               </div>

               <div className="textContainer">
                  <div>
                     <h3>{museum && museum}</h3>
                     <h4>{description && description}</h4>
                  </div>
                  <h4 className="city">{city && city}</h4>
               </div>
            </a>
         </Link>
      </Article>
   );
};

export default ComponentExample;

const Article = styled.article`
   width: 100%;

   color: white;
   margin-bottom: var(--paddingSm);

   a {
      display: flex;
      flex: 0 0 auto;
   }

   .imgContainer {
      min-width: 40%;
      position: relative;
   }

   .textContainer {
      padding: var(--paddingSm);
      background-color: black;
      border-top-right-radius: var(--borderRadiusSm);
      border-bottom-right-radius: var(--borderRadiusSm);
   }

   .city {
      margin-top: calc(var(--padding) * 1.5);
   }

   h3 {
      font-weight: 400;
      margin-bottom: 5px;
   }

   h4 {
      font-weight: 300;
   }

   img {
      border-top-left-radius: var(--borderRadiusSm);
      border-bottom-left-radius: var(--borderRadiusSm);
      margin-right: -1px;
   }

   @media ${device.tablet} {
      a {
         flex-direction: column;
         height: 100%;
      }
      margin-bottom: 0;

      .imgContainer {
         width: 100%;
         height: 170px;
      }

      img {
         border-top-right-radius: var(--borderRadiusSm);
         border-top-left-radius: var(--borderRadiusSm);
         border-bottom-left-radius: 0;
      }

      .textContainer {
         display: flex;
         flex: 1 1 auto;
         min-height: 0;
         height: auto;
         flex-direction: column;
         justify-content: space-between;
         padding: var(--padding);
         border-top-right-radius: 0;
         border-bottom-right-radius: var(--borderRadiusSm);
         border-bottom-left-radius: var(--borderRadiusSm);
      }
   }

   @media ${device.laptop} {
      .imgContainer {
         height: 150px;
      }
   }
   @media ${device.laptopL} {
      .imgContainer {
         height: 200px;
      }
   }
`;
