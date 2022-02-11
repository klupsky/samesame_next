import { GlobalStyles } from '@/styles/GlobalStyles';
import { DefaultSeo } from 'next-seo';

// Import the theme across the whole app so it can be used in every component
import '@/styles/fonts.css';
import '@/styles/variables.scss';
import '@/styles/mixins.scss';
import '@/styles/utilities.scss';
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
         <GlobalStyles />
         <DefaultSeo {...defaultSeo} />
         <Theme>
            <Component {...pageProps} />
         </Theme>
      </>
   );
}

export default MyApp;
