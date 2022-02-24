import { H2, P } from '@/styles/base/BaseStyles';
import LayoutMain from '@/layout/layoutMain';

export default function Home() {
   /* Add an SEO to every page */
   // const pageSeoProps = generateSeo(data?.pageSeo?.seoTitle ? data?.pageSeo : globalData?.pageSeo);

   return (
      <>
         {/* <NextSeo {...pageSeoProps} /> */}
         <LayoutMain>
            <H2>Headline</H2>
            <P>Hello World</P>
         </LayoutMain>
      </>
   );
}
