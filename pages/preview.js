import Hero from "@/components/Hero";
import MenuDesktop from "@/components/Menu/MenuDesktop";

export default function HeroPage() {
   /* Add an SEO to every page */
   // const pageSeoProps = generateSeo(data?.pageSeo?.seoTitle ? data?.pageSeo : globalData?.pageSeo);

   return (
      <>
      <MenuDesktop/>
      <Hero/>
      </>
   );
}

