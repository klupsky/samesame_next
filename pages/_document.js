import { ServerStyleSheet } from 'styled-components';
import NextDocument, { Html, Main, Head, NextScript } from 'next/document';

class Document extends NextDocument {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
         const enhancedRenderer = () => {
            return originalRenderPage({
               enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
            });
         };

         ctx.renderPage = enhancedRenderer;

         const initialProps = await NextDocument.getInitialProps(ctx);

         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            )
         };
      } finally {
         sheet.seal();
      }
   }

   render() {
      return (
         <Html lang="en">
            <Head />
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default Document;
