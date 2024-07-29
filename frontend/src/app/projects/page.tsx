import { BannerSection } from "@/components/custom/projectsPage/bannerSection";
import { ProjectGrid } from "@/components/custom/projectsPage/projectsGrid";

export default function ProjectsPage() {

  return (
    <div className="h-full">
      <BannerSection />
      <ProjectGrid />
    </div>
  );
}