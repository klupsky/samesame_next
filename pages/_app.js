import { Variables } from '@/styles/base/Variables';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { DefaultSeo } from 'next-seo';

// Import the theme across the whole app so it can be used in every component
import '@/styles/base/fonts.css';
import Theme from '@/styles/Theme';

const pageTitle = 'Your page title';
const pageDescription = 'Your page description';

// Default SEO goes here:
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
         <Variables />
         <GlobalStyles />
         <DefaultSeo {...defaultSeo} />
         <Theme>
            <Component {...pageProps} />
         </Theme>
      </>
   );
}

export default MyApp;
