import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import LegacySection from "@/components/LegacySection";
import WhyFarki from "@/components/WhyFarki";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BestSellers />
      <LegacySection />
      <WhyFarki />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
