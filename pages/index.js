import styled from 'styled-components';
import { device } from '@/styles/BreakPoints';
import { Headline } from '@/styles/BaseStyles';

export default function Home() {
   return (
      <div>
         <Headline>I'm a headline</Headline>
         <Paragraph>Hello World</Paragraph>
      </div>
   );
}

// add your custom styles here:
const Paragraph = styled.p`
   /* you can use your theme */
   color: ${(props) => props.theme.colors.lightBlue};
   text-align: center;
   font-size: 12px;

   /* how to use pseudo selectors */
   :hover {
      /* You can use css variables */
      color: var(--primaryColor);
   }

   /* how to use media queries */
   @media ${device.tablet} {
      font-size: 30px;
   }
`;

