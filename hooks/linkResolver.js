/*
   This is used for linking between documents. 
   The client has the ability to link documents in the CMS, and this function
   generates the right slugs for the frontend.
*/
export function linkResolver(type, slug) {
   switch (type) {
      case 'page':
         return `/${slug}`;
      case 'project':
         return `/project/${slug}`;
      default:
         return `/${slug}`;
   }
}
