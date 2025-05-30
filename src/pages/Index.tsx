
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudies } from "@/components/CaseStudies";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <SolutionsGrid />
      <Testimonials />
      <CaseStudies />
      <CTASection />
    </div>
  );
};

export default Index;
