import { Sparkles, Calculator, TrendingUp, FolderKanban, CheckCircle2, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why FirePath?</span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              data-testid="text-about-heading"
            >
              Powerful Features for Your FIRE Journey
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              Everything you need to plan, track, and achieve financial independence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8 space-y-6 hover-elevate transition-all duration-300 md:col-span-2 lg:col-span-1 lg:row-span-2" data-testid="card-fire-calculator">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Calculator className="w-7 h-7 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">FIRE Calculator</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Real-time calculations with three retirement plans (Linear, Flexible, 4% Rule)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Three FIRE categories (Lean, Mid, Fat) with lifestyle-based targets</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Live updates as you modify inputs with instant feedback</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Comprehensive validation ensuring accurate results</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-6 hover-elevate transition-all duration-300 md:col-span-2" data-testid="card-projections">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Interactive Financial Projections</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Pre & post-retirement analysis with detailed compound interest tracking</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Interactive charts with zoom, pan, and tooltip capabilities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Comprehensive data tables with expandable yearly projections</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Side-by-side plan comparison for different withdrawal strategies</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-6 hover-elevate transition-all duration-300 md:col-span-2 lg:col-span-1" data-testid="card-scenario-management">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FolderKanban className="w-7 h-7 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Smart Scenario Management</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Save & compare different FIRE strategies as named scenarios</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Full state restoration when loading previous calculations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Organize & manage multiple financial planning approaches</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm">30 major world currencies with proper regional formatting</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
