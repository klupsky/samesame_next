import sanityImage from '@sanity/image-url';

import { createPreviewSubscriptionHook, createClient } from 'next-sanity';

const options = {
   dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   useCdn: process.env.NODE_ENV === 'production',
   token: process.env.NEXT_SANITY_TOKEN,
   apiVersion: '2020-08-18'
   // withCredentials: true
};

export const sanityClient = createClient(options);
export const imageBuilder = sanityImage(sanityClient);
export const usePreviewSubscription = createPreviewSubscriptionHook(options);

export function getImageUrl(source) {
   return imageBuilder.image(source).url();
}

export const previewClient = createClient({
   ...options,
   useCdn: false
});

export const getSanityClient = (usePreview) => (usePreview ? previewClient : sanityClient);
