import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StrategiesSection from "@/components/StrategiesSection";
import AboutSection from "@/components/AboutSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <StrategiesSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
