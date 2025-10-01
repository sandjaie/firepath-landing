import { Card } from "@/components/ui/card";
import { Zap, Settings2, Target } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Card className="overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-display font-bold mb-4"
                  data-testid="text-features-heading"
                >
                  How we Calculate?<br />Not so Simple
                </h2>
                <p className="text-muted-foreground leading-relaxed italic">
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

                <div className="pt-4 border-t border-border/60">
                  <h3 className="text-lg font-semibold mb-4">Lifestyle Categories</h3>
                  <div className="space-y-3 pl-[52px]">
                    <div className="flex items-start gap-3">
                      <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Lean FIRE</h4>
                        <p className="text-xs text-muted-foreground">
                          Minimalist lifestyle focused on essential expenses
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Mid FIRE</h4>
                        <p className="text-xs text-muted-foreground">
                          Comfortable retirement with balanced spending
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Fat FIRE</h4>
                        <p className="text-xs text-muted-foreground">
                          Luxury retirement with generous budget
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
