import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import appIcon from "@assets/ios-app-icon-2_1759308693187.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2"
            data-testid="button-logo"
          >
            <img src={appIcon} alt="FirePath" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold">FirePath</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              Features
            </button>
            <Link
              href="/userguide"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-userguide"
            >
              User Guide
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-support"
            >
              Support
            </Link>
            <Button
              onClick={() => scrollToSection("download")}
              className="rounded-full"
              data-testid="button-download-header"
            >
              Download
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover-elevate p-2 rounded-md"
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-features-mobile"
              >
                Features
              </button>
              <Link
                href="/userguide"
                className="text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-userguide-mobile"
              >
                User Guide
              </Link>
              <Link
                href="/support"
                className="text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-support-mobile"
              >
                Support
              </Link>
              <Button
                onClick={() => scrollToSection("download")}
                className="rounded-full w-full"
                data-testid="button-download-mobile"
              >
                Download
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
