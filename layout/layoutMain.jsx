import styled from 'styled-components';
import { Button, ButtonBurgundy, ButtonLoadMore, ButtonQuickAdd } from '@/components/Button';
import ComponentExample from '@/components/ComponentExample';
import { motion } from 'framer-motion';
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
import { Logo, LogoMobile } from '@/components/Logo';
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
import GeneralSetup from '@/components/GeneralSetup';

export default function LayoutMain({ children }) {
   /* Add an SEO to every page */
   // const pageSeoProps = generateSeo(data?.pageSeo?.seoTitle ? data?.pageSeo : globalData?.pageSeo);

   return (
      // This adds a page transiton after routing (simple fade in)
      <motion.div
         initial="hidden"
         animate="visible"
         variants={{
            hidden: {
               opacity: 0
            },
            visible: {
               opacity: 1
            }
         }}>
         {/* <NextSeo {...pageSeoProps} /> */}
         {/* <Header>
            <H1>Starter</H1>
            <Headline>Hello</Headline>
            <Navigation>
               <p>Hi there</p>
               <p>Hi there</p>
               <p>Hi there</p>
            </Navigation>
         </Header> */}

<GeneralSetup></GeneralSetup>


         <main>{children}</main>

      </motion.div>
   );
}
