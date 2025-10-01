import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why FirePath?</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold leading-tight"
              data-testid="text-about-heading"
            >
              Clarity in Your FIRE Journey
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed italic">
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

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-card flex items-center justify-center shadow-xl">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <p className="text-xl font-display font-semibold">
                  Built for Your Future
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  Every feature in FirePath is designed with one goal: helping you
                  achieve financial freedom on your terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
