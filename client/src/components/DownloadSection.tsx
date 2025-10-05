import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 md:py-32 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div className="space-y-8">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            data-testid="text-download-heading"
          >
            Start Your FIRE Journey Today
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
            Download FirePath and take the first step toward financial independence.
            Available on iOS and Android.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8"
              data-testid="button-download-ios"
            >
              <Apple className="mr-2 w-5 h-5" />
              Download on iOS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              data-testid="button-download-android"
            >
              <Smartphone className="mr-2 w-5 h-5" />
              Download on Android
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No account or credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
