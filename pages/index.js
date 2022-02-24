import { H2, P } from '@/styles/base/BaseStyles';
import LayoutMain from '@/layout/layoutMain';

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
         <LayoutMain>
            <H2>Headline</H2>
            <P>Hello World</P>
         </LayoutMain>
      </motion.div>
   );
}
