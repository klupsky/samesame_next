/* 
    This is an example page with dynamic page queries + previews coming from Sanity 
    This is just for demonstration purposes.

    There might be cleaner ways to achieve this, but this is a working example.
*/

import { useState, useEffect } from 'react';

import { getSanityClient } from '@/lib/sanityClient';
import { groq } from 'next-sanity';
import { EXHIBITION_QUERY } from '@/lib/queries';

export default function Museum({ museumData, preview, footerData, menuData }) {
   const [museum, setMuseum] = useState(null);

   // Check if the current file is a draft or not end render preview or actual page:
   /*
   useEffect(() => {
      const draft = museumData && museumData.filter((musea) => musea._id.includes('draft'));
      const data = museumData && museumData.filter((musea) => !musea._id.includes('draft'));

      if (preview && draft.length > 0) {
         setMuseum(draft[0]);
      }

      if (!preview && data.length > 0) {
         setMuseum(data[0]);
      }
   }, [museumData, preview]);
   */

   return (
      <div>
         <p>Just a test page. Not actually rendering anything.</p>
      </div>
   );
}

/* 
    This is how you query with the Sanity Client + get the previews.
 
*/

/*
export async function getStaticProps({ params, preview = false }) {
   const museumData = await getSanityClient(preview).fetch(MUSEUM_QUERY, {
      slug: params.slug
   });

   const footerData = await getSanityClient(preview).fetch(FOOTER_QUERY);
   const menuData = await getSanityClient(preview).fetch(MENU_QUERY);

   return {
      props: {
         footerData: footerData[0],
         menuData: menuData[0],
         museumData,
         preview,
         slug: params.slug
      }
   };
}
*/

/* 
    Generate all static paths. Throw a 404 if client reaches a path that hasn't been pre-generated.
    If you generate static paths, the file name has to be [slug] or [...slug]
*/
/*
export async function getStaticPaths() {
   const paths = await getSanityClient().fetch(
      groq`*[_type == "museum" && defined(slug.current)][].slug.current`
   );

   return {
      paths: paths.map((slug) => ({ params: { slug } })),
      fallback: true
   };
}
*/
