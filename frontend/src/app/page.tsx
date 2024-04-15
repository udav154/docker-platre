import { AboutUsSection } from "@/components/custom/mainPage/aboutUsSection";
import { BannerSection } from "@/components/custom/mainPage/bannerSection";
import { EstimateSection } from "@/components/custom/mainPage/estimateSection";
import { PricesSection } from "@/components/custom/mainPage/pricesSection";
import { ProjectSection } from "@/components/custom/mainPage/projectSection";

export default function Home() {

  return (
    <>
      <BannerSection />
      <AboutUsSection />
      <ProjectSection />
      <PricesSection />
      <EstimateSection />
    </>
  );
}