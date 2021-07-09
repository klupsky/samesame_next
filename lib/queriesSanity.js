import { INTERNAL_LINK, SEO } from '@/lib/fragmentsSanity';

export const PAGE_QUERY = `query Page($slug: String){
    allPage(where: { slug: { current: { eq: $slug } } }) {
      _type
      ${SEO}
      pageTitle
      slug {
        current
      }
    }
  }
  `;
