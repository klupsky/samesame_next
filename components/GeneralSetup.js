import styled from 'styled-components';
import { Button, ButtonBurgundy, ButtonLoadMore, ButtonQuickAdd } from '@/components/Button';
import IconsCart from './IconCart';
import {
   IconSearch,
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
import {
   IconFb,
   IconFbMobile,
   IconInsta,
   IconInstaMobile,
   IconTwitter,
   IconTwitterMobile,
   IconTikTok,
   IconTikTokMobile
} from '@/components/IconsSocialMedia';
import Logo from './Logo';
import {
   m,
   d_flex,
   flex_wrap,
   d_block,
   p_productCard,
   h1_glamour,
   h1_queens,
   h2_queens_med_italic,
   p,
   p_xl,
   p_xs,
   p_s,
   p_lg,
   bg_black,
   bg_white,
   bg_cream,
   bg_yellow,
   bg_pink,
   bg_burgundy,
   bg_red,
   h2_glamour,
   h2_queens,
   h2_queens_med,
   h2_queens_med_i,
   h3_queens,
   h3_queens_med,
   h3_queens_med_italic,
   h4_sweet,
   p_xl_italic,
   p_lg_italic,
   p_med_italic,
   p_med,
   p_med_bold_italic,
   p_m,
   p_sm,
   p_xsm,
   p_productCardSearch
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

         <BlockContainer>
            <Logo />
         </BlockContainer>

         <BlockContainer>
            <ul>
               <li>{IconSearch}</li>
               <li>{IconProfile}</li>
               <li>{IconSandwichMobile}</li>
               <li>{IconClose}</li>
            </ul>
         </BlockContainer>

         <BlockContainer>
            <IconsCart />
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
   ${d_block}
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

const HeroHeadingGlamour = styled.h1`
   ${h1_glamour}
`;

const HeroHeadingQueens = styled.h1`
   ${h1_queens}
`;

const AccountPageTitle = styled.h2`
   ${h2_glamour}
`;

const HeadingGlycerin = styled.h2`
   ${h2_queens}
`;

const HeadingGlycerinMediumItalic = styled.h2`
   ${h2_queens_med_italic}
`;

const SectionTitle = styled.h2`
   ${h2_queens_med}
`;

const SectionTitleMediumItalic = styled.h2`
   ${h2_queens_med_i}
`;

const HeadingSmall = styled.h3`
   ${h3_queens}
`;

const HeadingSmallMedium = styled.h3`
   ${h3_queens_med}
`;

const HeadingSmallMediumItalic = styled.h3`
   ${h3_queens_med_italic}
`;

const HeadingXSmall = styled.h4`
   ${h4_sweet}
`;

const BigQuoteRegular = styled.blockquote`
   ${p_xl}
`;

const BigQuoteRegularItalic = styled.blockquote`
   ${p_xl_italic}
`;

const MediumQuoteMedium = styled.blockquote`
   ${p_lg}
`;

const MediumQuoteItalic = styled.blockquote`
   ${p_lg_italic}
`;

const SmallQuote = styled.blockquote`
   ${p_med}
`;

const SmallQuoteItalic = styled.blockquote`
   ${p_med_italic}
`;

const SmallQuoteBoldItalic = styled.blockquote`
   ${p_med_bold_italic}
`;

const ParagraphRegular = styled.p`
   ${p}
`;

const ParagraphRegularBold = styled.p`
   ${p_m}
`;

const ParagraphSmall = styled.p`
   ${p_s}
`;

const ParagraphSmallBold = styled.p`
   ${p_sm}
`;

const ParagraphXSmall = styled.p`
   ${p_xs}
`;

const ParagraphXSmallBold = styled.p`
   ${p_xsm}
`;

const ProductCard = styled.p`
   ${p_productCard}
`;

const ProductCardSearch = styled.p`
   ${p_productCardSearch}
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
