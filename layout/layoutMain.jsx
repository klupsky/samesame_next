// import styled from 'styled-components';
// import ComponentExample from '@/components/ComponentExample';
import { motion } from 'framer-motion';
import GeneralSetup from '@/components/GeneralSetup';

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

<GeneralSetup/>

         <main>{children}</main>

      </motion.div>
   );
}