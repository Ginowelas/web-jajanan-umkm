import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { Reasons } from "@/components/Reasons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <Reasons />
        <Gallery />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
