import styled from 'styled-components';
import { Button, ButtonBurgundy, ButtonLoadMore, ButtonQuickAdd } from '@/components/Button';

import { device } from '@/styles/BreakPoints';
import { IconSearch, 
   IconCart,
   IconCartMobile,
   IconProfile,
   IconSandwichMobile,
   IconClose,
   IconArrowDown,
   IconArrowDownMobile,
   IconArrowUpMobile,
   IconArrowUp,
   IconSliderIndicator,
   IconReviewsMobile,
   IconReviews,
   IconSliderIndicatorFilled
} from '@/components/Icons';
 import { IconFb,
   IconFbMobile,
   IconInsta,
   IconInstaMobile,
   IconTwitter,
   IconTwitterMobile,
   IconTikTok,
   IconTikTokMobile
 } from '@/components/IconsSocialMedia';
import Logo from './Logo';
import { m,
   d_flex,
   flex_wrap,
   d_inline_block,
   t_uppercase,
   f_main_light,
   f_main_bold,
   f_glamour,
   f_queens,
   f_queens_med_italic,
   f_queens_med,
   f_queens_italic,
   f_queens_bold_italic,
   f_sweet_bold,
   h1,
   h2,
   h3,
   h2_alt,
   p,
   p_xl,
   p_xs,
   p_sm,
   p_btn,
   p_lg,
   p_md,
   bg_black,
   bg_white,
   bg_cream,
   bg_yellow,
   bg_pink,
   bg_burgundy,
   bg_red
} from '@/styles/base/Utilities';

export default function GeneralSetup() {
   /* Add an SEO to every page */
   // const pageSeoProps = generateSeo(data?.pageSeo?.seoTitle ? data?.pageSeo : globalData?.pageSeo);

   return (
      // This adds a page transiton after routing (simple fade in)
      <Article>

         <BlockContainer>
            <HeroHeadingGlamour>Heading XL</HeroHeadingGlamour>
            <HeroHeadingQueens>Heading XL</HeroHeadingQueens>
            <AccountPageTitle>Heading L</AccountPageTitle>
            <HeadingGlycerin>Heading L</HeadingGlycerin>
            <HeadingGlycerinMediumItalic>Heading L</HeadingGlycerinMediumItalic>
            <SectionTitle>Heading M</SectionTitle>
            <SectionTitleMediumItalic>Heading M Italic</SectionTitleMediumItalic>
            <HeadingSmall>Heading S</HeadingSmall>
            <HeadingSmallMedium>Heading S Medium</HeadingSmallMedium>
            <HeadingSmallMediumItalic>Heading S Medium Italic</HeadingSmallMediumItalic>
            <HeadingXSmall>Heading XS</HeadingXSmall>
            <BigQuoteRegular>Paragraph XL</BigQuoteRegular>
            <BigQuoteRegularItalic>Paragraph XL Italic</BigQuoteRegularItalic>
            <MediumQuoteMedium>Paragraph M</MediumQuoteMedium>
            <MediumQuoteItalic>Paragraph M Italic</MediumQuoteItalic>
            <SmallQuote>Small Quote</SmallQuote>
            <SmallQuoteItalic>Small Quote Italic</SmallQuoteItalic>
            <SmallQuoteBoldItalic>Small Quote Bold Italic</SmallQuoteBoldItalic>
            <ParagraphRegular>Paragraph Regular</ParagraphRegular>
            <ParagraphRegularBold>Paragraph Regular Bold</ParagraphRegularBold>
            <ParagraphSmall>Paragraph Small</ParagraphSmall>
            <ParagraphSmallBold>Paragraph Small Bold</ParagraphSmallBold>
            <ParagraphXSmall>Paragraph XSmall</ParagraphXSmall>
            <ParagraphXSmallBold>Paragraph XSmall Bold</ParagraphXSmallBold>
            <ProductCard>XS Sweet Sans</ProductCard>
            <ProductCardSearch>XXS Sweet Sans</ProductCardSearch>
         </BlockContainer>

         <FlexContainer>
            <Button>shop now</Button>
            <ButtonBurgundy>Add new address</ButtonBurgundy>
            <ButtonLoadMore>Load More</ButtonLoadMore>
            <ButtonQuickAdd>Quick Add +</ButtonQuickAdd>
         </FlexContainer>

         <FlexContainer>
            <White></White>
            <Cream></Cream>
            <Yellow></Yellow>
            <Pink></Pink>
            <Burgundy></Burgundy>
            <Red></Red>
            <Black></Black>
         </FlexContainer>

         <BlockContainer><Logo/></BlockContainer>

         <BlockContainer>
            <ul>
               <li>{IconSearch}</li>
               <li>{IconProfile}</li>
               <li>{IconCart}</li>
               <li>{IconCartMobile}</li>
               <li>{IconSandwichMobile}</li>
               <li>{IconClose}</li>
            </ul>
         </BlockContainer>

         <BlockContainer>
            <ul>
               <li>{IconArrowDown}</li>
               <li>{IconArrowDownMobile}</li>
               <li>{IconArrowUp}</li>
               <li>{IconArrowUpMobile}</li>
               <li>{IconReviews}</li>
               <li>{IconReviewsMobile}</li>
               <li>{IconSliderIndicatorFilled}</li>
               <li>{IconSliderIndicator}</li>
            </ul>
         </BlockContainer>

         <BlockContainer>
            <ul>
               <li>{IconFb}</li>
               <li>{IconFbMobile}</li>
               <li>{IconInsta}</li>
               <li>{IconInstaMobile}</li>
               <li>{IconTwitter}</li>
               <li>{IconTwitterMobile}</li>
               <li>{IconTikTok}</li>
               <li>{IconTikTokMobile}</li>
            </ul>
         </BlockContainer>
    </Article>
   );
}


const Article = styled.div`
margin: 10px;
`;


const BlockContainer = styled.div`
${m}
${d_inline_block}
li {
   display: inline;
   margin-right: 10px;
}
`;

const FlexContainer = styled.div`
${m}
${d_flex}
${flex_wrap}
`;

const HeroHeadingGlamour = styled.div`
${h1}
${f_glamour}
line-height: (--line-height-sm);
@media ${device.tablet} {
   line-height: (--line-height);
}
`;

const HeroHeadingQueens = styled.div`
${h1}
${f_queens}
line-height: (--line-height-sm);
@media ${device.tablet} {
   line-height: (--line-height);
}
`;

const AccountPageTitle = styled.div`
${h2}
${f_glamour}
line-height: (--line-height-sm);
@media ${device.tablet} {
   line-height: (--line-height);
}
`;

const HeadingGlycerin = styled.div`
${h2}
${f_queens}
line-height: (--line-height-sm);
@media ${device.tablet} {
   line-height: (--line-height);
}
`;

const HeadingGlycerinMediumItalic = styled.div`
${h2_alt}
${f_queens_med_italic}
`;

const SectionTitle = styled.div`
${h2_alt}
${f_queens}
`;

const SectionTitleMediumItalic = styled.div`
${h2_alt}
${f_queens_med_italic}
`;

const HeadingSmall = styled.div`
${h3}
${f_queens}
line-height: (--line-height);
`;

const HeadingSmallMedium = styled.div`
${h3}
${f_queens_med}
line-height: (--line-height);
`;

const HeadingSmallMediumItalic = styled.div`
${h3}
${f_queens_med_italic}
line-height: (--line-height);
`;

const HeadingXSmall = styled.div`
${p_xs}
${f_sweet_bold}
${t_uppercase}
`;

const BigQuoteRegular = styled.div`
${p_xl}
${f_queens}
`;

const BigQuoteRegularItalic = styled.div`
${p_xl}
${f_queens_med_italic}
`;

const MediumQuoteMedium = styled.div`
${p_lg}
${f_queens_med}
line-height: (--line-height);
@media ${device.tablet} {
   line-height: (--line-height-md);
}
`;

const MediumQuoteItalic = styled.blockquote`
${p_lg}
${f_queens_med_italic}
line-height: (--line-height);
@media ${device.tablet} {
   line-height: (--line-height-md);
}
`;

const SmallQuote = styled.blockquote`
${p_md}
${f_queens}
line-height: (--line-height-md);
@media ${device.tablet} {
   line-height: (--line-height);
}
`;

const SmallQuoteItalic = styled.blockquote`
${p_md}
${f_queens_italic}
line-height: (--line-height-md);
@media ${device.tablet} {
   line-height: (--line-height);
}
`;

const SmallQuoteBoldItalic = styled.blockquote`
${p}
${f_queens_bold_italic}
line-height: var(--line-height-md)
`;

const ParagraphRegular = styled.p`
${p}
${f_main_light}
line-height: var(--line-height-md)
`;

const ParagraphRegularBold = styled.p`
${p}
${f_main_bold}
line-height: var(--line-height-md)
`;

const ParagraphSmall = styled.p`
${p_sm}
${f_main_light}
line-height: var(--line-height-md);
`;

const ParagraphSmallBold = styled.p`
${p_sm}
${f_main_bold}
line-height: var(--line-height-md);
`;

const ParagraphXSmall = styled.p`
${p_xs}
${f_main_light}
line-height: var(--line-height-md);
`;

const ParagraphXSmallBold = styled.p`
${p_xs}
${f_main_bold}
line-height: var(--line-height-md);
`;

const ProductCard = styled.p`
${p_sm}
${f_sweet_bold}
${t_uppercase}
`;

const ProductCardSearch = styled.p`
${p_btn}
${f_sweet_bold}
${t_uppercase}
`;

const White = styled.div`
${bg_white}
width: 149px;
height: 143px;
margin: 10px;
`;

const Cream = styled.div`
${bg_cream}
width: 149px;
height: 143px;
margin: 10px;
`;

const Yellow = styled.div`
${bg_yellow}
width: 149px;
height: 143px;
margin: 10px;
`;

const Pink = styled.div`
${bg_pink}
width: 149px;
height: 143px;
margin: 10px;
`;

const Burgundy = styled.div`
${bg_burgundy}
width: 149px;
height: 143px;
margin: 10px;
`;

const Red = styled.div`
${bg_red}
width: 149px;
height: 143px;
margin: 10px;
`;

const Black = styled.div`
${bg_black}
width: 149px;
height: 143px;
margin: 10px;
`;