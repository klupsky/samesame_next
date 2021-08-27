import { groq } from 'next-sanity';
import { IMAGE } from '@/lib/fragments';

/* 
This is just an example query of how to use fragments in queries + how to query with groq 
More about groq can be found here: https://www.sanity.io/docs/query-cheat-sheet
*/

export const EXHIBITION_QUERY = groq`
*[_type == "exhibition" && slug.current == $slug] {
  ...,
  exhibitionImage{
    ${IMAGE}
  },
  storyBlock[] {
    ...,
    textPosition -> {
      alignmentValue
    },
    storyMedia {
      asset-> {
        url,
        alt
      }
    }
  },
}
`;
