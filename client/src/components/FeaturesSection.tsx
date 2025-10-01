import { Card } from "@/components/ui/card";
import { Zap, Settings2, Target } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-display font-bold mb-6"
            data-testid="text-features-heading"
          >
            Plans & Features That Fit Your Lifestyle
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="text-features-intro"
          >
            FirePath calculates your FIRE target based on your lifestyle and
            gives you multiple strategies to achieve it.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
              Calculation Modes
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card
                className="p-8 hover-elevate transition-all duration-300"
                data-testid="card-simple-mode"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Simple Mode</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for beginners - just enter your basic financial details
                  and get instant FIRE calculations with sensible defaults.
                </p>
              </Card>

              <Card
                className="p-8 hover-elevate transition-all duration-300"
                data-testid="card-advanced-mode"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Settings2 className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Advanced Mode</h4>
                <p className="text-muted-foreground leading-relaxed">
                  For power users - customize investment start dates, adjust
                  contribution timing, and fine-tune every parameter for precise
                  planning.
                </p>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
              Lifestyle Categories
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card
                className="p-6 hover-elevate transition-all duration-300"
                data-testid="card-lean-fire"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Lean FIRE</h4>
                <p className="text-sm text-muted-foreground">
                  Minimalist lifestyle focused on essential expenses
                </p>
              </Card>

              <Card
                className="p-6 hover-elevate transition-all duration-300 border-primary/20"
                data-testid="card-mid-fire"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Mid FIRE</h4>
                <p className="text-sm text-muted-foreground">
                  Comfortable retirement with balanced spending
                </p>
              </Card>

              <Card
                className="p-6 hover-elevate transition-all duration-300"
                data-testid="card-fat-fire"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Fat FIRE</h4>
                <p className="text-sm text-muted-foreground">
                  Luxury retirement with generous budget
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
