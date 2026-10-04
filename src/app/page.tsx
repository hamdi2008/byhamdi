import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AboutSection from "@/components/sections/AboutSection";
import BuildingInPublicSection from "@/components/sections/BuildingInPublicSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServicesSection />
        <ProductsSection />
        <AboutSection />
        <BuildingInPublicSection />
      </main>
      <Footer />
    </>
  );
}
