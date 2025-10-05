import { Badge } from "@/components/ui/badge";
import { TrendingUp, Activity, Shield } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import strategiesScreenshot from "@assets/4-plan-dark-portrait_1759317816529.png";

export default function StrategiesSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
              <PhoneMockup screenshot={strategiesScreenshot} />
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-6">
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  data-testid="text-strategies-heading"
                >
                  Retirement Withdrawal Strategies
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic max-w-xl">
                  Choose the withdrawal strategy that best fits your retirement
                  goals and risk tolerance.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">Linear Plan</h3>
                        <Badge variant="outline" className="text-xs">Most Predictable</Badge>
                      </div>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Steady, consistent withdrawals over time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Easy to budget and plan expenses</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">Flexible Plan</h3>
                        <Badge variant="outline" className="text-xs border-accent text-accent">Most Adaptive</Badge>
                      </div>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>Adjusts based on market performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>Optimizes for portfolio longevity</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">4% Rule Plan</h3>
                        <Badge variant="outline" className="text-xs">Most Classic</Badge>
                      </div>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Time-tested withdrawal strategy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>Withdraw 4% of portfolio annually</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
