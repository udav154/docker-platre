import { AboutUsSection } from "@/components/custom/mainPage/aboutUsSection";
import { BannerSection } from "@/components/custom/mainPage/bannerSection";
import { EstimateSection } from "@/components/custom/mainPage/estimateSection";
import { LinkWithUs } from "@/components/custom/mainPage/linkWithUs";
import { PricesSection } from "@/components/custom/mainPage/pricesSection";
import { ProjectSection } from "@/components/custom/mainPage/projectSection";
import { StepsSection } from "@/components/custom/mainPage/stepsSection";


export default function Home() {

  return (
    <>
      <BannerSection />
      <AboutUsSection />
      <ProjectSection />
      {/* <PricesSection /> */}
      <StepsSection />
      <EstimateSection />
      <LinkWithUs />
    </>
  );
}