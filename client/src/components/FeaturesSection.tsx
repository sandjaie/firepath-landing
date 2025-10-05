import { Zap, Settings2 } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import projectionsScreenshot from "@assets/projections-usd-ligth_1759317816529.png";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  data-testid="text-features-heading"
                >
                  How we Calculate?<br />Not so Simple
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic max-w-xl">
                  FirePath calculates your FIRE target based on your lifestyle and
                  gives you multiple strategies to achieve it.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    Simple Mode
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[52px]">
                    Perfect for beginners - just enter your basic financial details
                    and get instant FIRE calculations with sensible defaults.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Settings2 className="w-5 h-5 text-accent" />
                    </div>
                    Advanced Mode
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[52px]">
                    For power users - customize investment start dates, adjust
                    contribution timing, and fine-tune every parameter for precise
                    planning.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <PhoneMockup screenshot={projectionsScreenshot} />
            </div>
          </div>
      </div>
    </section>
  );
}
