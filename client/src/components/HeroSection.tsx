import PhoneMockup from "./PhoneMockup";
import homepageScreenshot from "@assets/homepage-usd-light_1759317816529.png";
import appStoreBadge from "@assets/app-store-badge.svg";
import googlePlayBadge from "@assets/Store=Google Play, Type=Dark, Language=English-1_1759691189729.png";

export default function HeroSection() {
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

            <div className="space-y-4">
              <h3 className="text-xl font-semibold" data-testid="text-download-firepath">
                Download FirePath
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="#"
                  className="inline-block"
                  data-testid="link-download-ios-hero"
                >
                  <img
                    src={appStoreBadge}
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
                <a
                  href="#"
                  className="inline-block"
                  data-testid="link-download-android-hero"
                >
                  <img
                    src={googlePlayBadge}
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground" data-testid="text-no-account">
              No account required to start planning
            </p>
          </div>

          <div className="relative lg:justify-self-end">
            <PhoneMockup className="animate-float" screenshot={homepageScreenshot} />
          </div>
        </div>
      </div>
    </section>
  );
}
