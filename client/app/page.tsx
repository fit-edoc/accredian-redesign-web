import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Logos from "./components/Logos";
import AccredianEdge from "./components/AccredianEdge";
import DomainExpertise from "./components/DomainExpertise";
import CourseSegmentation from "./components/CourseSegmentation";
import SkillEnhancement from "./components/SkillEnhancement";
import CatFramework from "./components/CatFramework";
import DeliverResults from "./components/DeliverResults";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-sans selection:bg-orange-200 selection:text-orange-900">
      <Hero />
      <Stats />
      <Logos />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <SkillEnhancement />
      <CatFramework />
      <DeliverResults />
      <Faqs />
      <Testimonials />
      <CTA />
    </main>
  );
}
