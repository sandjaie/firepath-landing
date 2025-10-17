import { useState } from "react";
import { Clock } from "lucide-react";
import appStoreBadge from "@assets/app-store-badge.svg";
import googlePlayBadge from "@assets/Store=Google Play, Type=Dark, Language=English-1_1759691189729.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function DownloadSection() {
  const [showComingSoon, setShowComingSoon] = useState(false);

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
              href="https://apps.apple.com/app/id6753652765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              data-testid="link-download-ios"
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
            <button
              onClick={() => setShowComingSoon(true)}
              className="inline-block cursor-pointer"
              data-testid="button-download-android"
            >
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-14"
              />
            </button>
          </div>

          <p className="text-sm text-muted-foreground">
            No account or credit card required
          </p>
        </div>
      </div>

      <AlertDialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <AlertDialogContent data-testid="dialog-coming-soon-download">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Coming Soon!
            </AlertDialogTitle>
            <AlertDialogDescription>
              The Android version of FirePath is currently in development and will be available soon. 
              Stay tuned for updates!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction data-testid="button-dialog-close-download">Got it</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
