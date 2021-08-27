/* 
These are used to serialize block text (rich text) content coming from sanity 
https://github.com/sanity-io/block-content-to-react
*/

// Serializers for Sanity Blocks
import BlockContent from '@sanity/block-content-to-react';
// import ArticleImage from '@/components/modules/PageBlocks/article/articleImage'; // example how components can be added

export const complexTextSerializer = {
   types: {
      block: (props) => {
         const { style = 'normal' } = props.node;
         if (style === 'normal') {
            return <p>{props.children}</p>;
         }
         if (style === 'h1') {
            return <h1>{props.children}</h1>;
         }
         if (style === 'h2') {
            return <h3>{props.children}</h3>;
         }
         // Fall back to default handling
         return BlockContent.defaultSerializers.types.block(props);
      }
      /* An example of how components can be added to the rich text block */
      //   image: ({ node }) => <ArticleImage image={node} />
      // update: ({ node }) => <UpdateModule update={node} color={brColor} />,
      // factBox: ({ node }) => <FactBox factBox={node} color={brColor} />,
   }
};

export const simpleTextSerializer = {
   types: {
      block: (props) => {
         const { style = 'normal' } = props.node;
         if (style === 'normal') {
            return <p>{props.children}</p>;
         }
         if (style === 'h1') {
            return <h1>{props.children}</h1>;
         }
         if (style === 'h2') {
            return <h2>{props.children}</h2>;
         }
         // Fall back to default handling
         return BlockContent.defaultSerializers.types.block(props);
      }
   }
};
