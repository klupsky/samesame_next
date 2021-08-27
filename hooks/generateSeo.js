/* 
   Every page needs a dedicated SEO. This is a helper function to insert an SEO to every page.
*/

export const generateSeo = (pageSeo) => {
   const pageSeoProps = {
      title: `Same Same Studio | ${pageSeo && pageSeo.seoTitle}` || '',
      description: (pageSeo && pageSeo.seoDescription) || '',
      openGraph: {
         title: `Same Same Studio  | ${pageSeo && pageSeo.seoTitle}` || '',
         description: (pageSeo && pageSeo.seoDescription) || '',
         type: 'website',
         locale: 'en_IE',
         images: pageSeo?.seoImage ? [{ url: pageSeo.seoImage.asset.url }] : undefined
      },
      twitter: {
         cardType: 'summary_large_image'
      }
   };

   return pageSeoProps;
};
