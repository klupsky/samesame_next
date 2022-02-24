import styled from 'styled-components';
import { H1, H2, P } from '@/styles/base/BaseStyles';
import { d_flex, flex_justify_between } from '@/styles/base/Utilities';

import { motion } from 'framer-motion';

export default function LayoutMain({ children }) {
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
            <H1>Starter</H1>
            <Navigation>
               <p>Hi there</p>
               <p>Hi there</p>
               <p>Hi there</p>
            </Navigation>
         </Header>
         <main>{children}</main>
      </motion.div>
   );
}

// your custom styles go here:
const Navigation = styled.nav`
   /* you can use your theme */
   ${d_flex}
`;

const Header = styled.header`
   /* you can use your theme */
   ${d_flex}
   ${flex_justify_between}
`;
