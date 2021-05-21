import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';

const pageTitle = 'Your page title';
const pageDescription = 'Your page description';

const defaultSeo = {
   title: pageTitle,
   description: pageDescription,
   openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      locale: 'en_IE',
      images: [{ url: 'absoluteimageurl.jpg' }]
   },
   twitter: {
      cardType: 'summary_large_image'
   }
};

function MyApp({ Component, pageProps }) {
   return (
      <>
         <DefaultSeo {...defaultSeo} />
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
