import appStoreBadge from "@assets/app-store-badge.svg";
import googlePlayBadge from "@assets/Store=Google Play, Type=Dark, Language=English-1_1759691189729.png";

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
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#"
              className="inline-block"
              data-testid="link-download-ios"
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
            <a
              href="#"
              className="inline-block"
              data-testid="link-download-android"
            >
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-14"
              />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            No account or credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
