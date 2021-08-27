/* 
   We will mostly be working with re-usable page modules in the backend, so clients can 
   add/remove/move modules however they please. This can be achieved with page blocks and 
   conditional rendering of those.
   
   This example shows, how you can render those components conditionally. 
   This component receives an array of page blocks and renders the corresponding frontend component.
*/

import ComponentExample from '@/components/ComponentExample';

const PageBlocksIndex = ({ blocks }) => {
   return (
      <>
         {blocks &&
            blocks.map((block, i) => {
               let Component;
               switch (block._type) {
                  // fiter through the modules and render the right one
                  case 'exampleBlock': {
                     Component = (
                        <ComponentExample
                        // text={block.welcometitle}
                        // vartext={block.welcomeMessage}
                        />
                     );
                     break;
                  }
                  // add as many blocks as needed
                  default:
                     Component = (
                        <div>
                           No block found for
                           {block._type}
                        </div>
                     );
                     break;
               }
               return <div key={`pages-${i}`}>{Component}</div>;
            })}
      </>
   );
};

export default PageBlocksIndex;
