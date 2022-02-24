import styled from 'styled-components';
import { device } from '@/styles/BreakPoints';
import { Headline } from '@/styles/base/BaseStyles';
import { d_flex, flex_justify_between } from '@/styles/base/Utilities';

import { motion } from 'framer-motion';

export default function Home() {
   /* Add an SEO to every page */
   // const pageSeoProps = generateSeo(data?.pageSeo?.seoTitle ? data?.pageSeo : globalData?.pageSeo);

   return (
      // This adds a page transiton after routing (simple fade in)
      <motion.div
         initial="hidden"
         animate="visible"
         variants={{
            hidden: {
               opacity: 0
            },
            visible: {
               opacity: 1
            }
         }}>
         {/* <NextSeo {...pageSeoProps} /> */}
         <Header>
            <h1>Starter</h1>
            <Navigation>
               <p>Hi there</p>
               <p>Hi there</p>
               <p>Hi there</p>
            </Navigation>
         </Header>
         <div>
            <Headline>Headline</Headline>
            <Paragraph>Hello World</Paragraph>
         </div>
      </motion.div>
   );
}

// add your custom styles here:
const Paragraph = styled.p`
   /* you can use your theme */
   text-align: center;
   font-size: 12px;

   /* how to use pseudo selectors */
   :hover {
      /* You can use css variables */
      color: var(--primaryColor);
   }

   /* how to use media queries */
   @media ${device.tablet} {
      font-size: 30px;
   }
`;

const Navigation = styled.nav`
   /* you can use your theme */
   ${d_flex}
`;

const Header = styled.header`
   /* you can use your theme */
   ${d_flex}
   ${flex_justify_between}
`;
