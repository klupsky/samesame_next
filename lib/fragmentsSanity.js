/* You can put your object/block queries here queries */

export const INTERNAL_LINK = `
... on Page {
  _type
  pageTitle
  slug {
    current
  }
}`;

export const SEO = `
pageSeo {
  seoTitle
  seoImage {
    asset {
      altText
      url
    }
  }
  seoDescription
}`