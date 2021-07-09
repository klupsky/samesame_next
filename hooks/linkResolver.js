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
