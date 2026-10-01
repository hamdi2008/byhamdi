import Hero from "@/components/sections/Hero";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import BuildingInPublicSection from "@/components/sections/BuildingInPublicSection";
import Footer from "@/components/sections/Footer";
import ThreadConnector from "@/components/ui/ThreadConnector";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <ThreadConnector variant="orange-purple" />
      <ServicesSection />
      <ThreadConnector variant="purple-orange" />
      <AboutSection />
      <ThreadConnector variant="orange-purple" />
      <BuildingInPublicSection />
      <Footer />
    </main>
  );
}
