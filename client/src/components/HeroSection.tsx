import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                data-testid="text-hero-headline"
              >
                Your Path to Financial Independence,{" "}
                <span className="text-primary">Retire Early</span>
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl italic"
                data-testid="text-hero-subheadline"
              >
                FirePath is a comprehensive calculator that helps you plan your
                journey to FIRE with curated plans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full text-base px-8"
                onClick={() => scrollToSection("features")}
                data-testid="button-get-started"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8"
                onClick={() => scrollToSection("download")}
                data-testid="button-download-hero"
              >
                Download FirePath
              </Button>
            </div>

            <p className="text-sm text-muted-foreground" data-testid="text-no-account">
              No account required to start planning
            </p>
          </div>

          <div className="relative lg:justify-self-end">
            <PhoneMockup className="animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
