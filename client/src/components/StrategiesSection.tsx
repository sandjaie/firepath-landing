import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Activity, Shield } from "lucide-react";

export default function StrategiesSection() {
  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-display font-bold mb-6"
            data-testid="text-strategies-heading"
          >
            Three Retirement Withdrawal Strategies
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the withdrawal strategy that best fits your retirement goals
            and risk tolerance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            className="p-8 hover-elevate transition-all duration-300"
            data-testid="card-linear-plan"
          >
            <Badge className="mb-4" data-testid="badge-linear">
              Most Predictable
            </Badge>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">
              Linear Plan
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Steady, consistent withdrawals over time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Easy to budget and plan expenses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Predictable cash flow for retirement</span>
              </li>
            </ul>
          </Card>

          <Card
            className="p-8 hover-elevate transition-all duration-300 border-accent/30 shadow-lg shadow-accent/5"
            data-testid="card-flexible-plan"
          >
            <Badge variant="outline" className="mb-4 border-accent text-accent" data-testid="badge-flexible">
              Most Adaptive
            </Badge>
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">
              Flexible Plan
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Adjusts based on market performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Optimizes for portfolio longevity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Dynamic spending in good and bad years</span>
              </li>
            </ul>
          </Card>

          <Card
            className="p-8 hover-elevate transition-all duration-300"
            data-testid="card-4percent-plan"
          >
            <Badge className="mb-4" data-testid="badge-4percent">
              Most Classic
            </Badge>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">
              4% Rule Plan
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Time-tested withdrawal strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Withdraw 4% of portfolio annually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Historically safe for 30+ year retirements</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
