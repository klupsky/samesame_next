import styled from 'styled-components';

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
   font-size: 30px;
`;
