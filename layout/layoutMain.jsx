// import styled from 'styled-components';
import { BUTTON } from '@/styles/base/BaseStyles';
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
         {/* <Header>
            <H1>Starter</H1>
            <Headline>Hello</Headline>
            <Navigation>
               <p>Hi there</p>
               <p>Hi there</p>
               <p>Hi there</p>
            </Navigation>
         </Header> */}
         <BUTTON>shop now</BUTTON>
         <main>{children}</main>
      </motion.div>
   );
}

// const Button = styled.div`
//    ${bg_burgundy}
// `;

// your custom styles go here:
// const Navigation = styled.nav`
//    /* you can use your theme */
//    ${d_flex}
// `;

// const Header = styled.header`
//    /* you can use your theme */
//    ${d_flex}
//    ${flex_justify_between}
// `;
