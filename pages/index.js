import styled from 'styled-components';
import { device } from '@/styles/BreakPoints';

export default function Home() {
   return (
      <div>
         <Paragraph>Hello World</Paragraph>
      </div>
   );
}

// add your custom styles here:
const Paragraph = styled.p`
   text-align: center;
   font-size: 12px;

   /* how to use pseudo selectors */
   &:hover {
      color: red;
   }

   /* how to use media queries */
   @media ${device.tablet} {
      font-size: 30px;
   }
`;
