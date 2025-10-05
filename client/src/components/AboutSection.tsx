import { Sparkles } from "lucide-react";
import chartsScreenshot from "@assets/charts-usd-light_1759317816529.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Why FirePath?</span>
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                data-testid="text-about-heading"
              >
                Clarity in Your FIRE Journey
              </h2>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed italic max-w-xl">
                <p data-testid="text-about-description">
                  FirePath is designed for individuals who want clarity in their
                  FIRE journey. Whether you prioritize minimalism, balance, or
                  luxury, FirePath gives you tools, projections, and strategies to
                  achieve your vision of financial independence.
                </p>
                <p>
                  Our mission is to make financial independence planning accessible
                  and actionable for everyone. No complex jargon, no unnecessary
                  features—just the insights you need to make informed decisions
                  about your future.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={chartsScreenshot} 
              alt="FirePath Charts and Analytics" 
              className="w-full h-auto max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
