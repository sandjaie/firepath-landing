import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Menu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sections = [
  { id: "getting-started", title: "🚀 Getting Started" },
  { id: "app-overview", title: "🏠 App Overview" },
  { id: "fire-calculator", title: "🧮 FIRE Calculator" },
  { id: "financial-projections", title: "📊 Financial Projections" },
  { id: "growth-charts", title: "📈 Growth Charts" },
  { id: "settings-customization", title: "⚙️ Settings & Customization" },
  { id: "scenario-management", title: "💾 Scenario Management" },
  { id: "tips-best-practices", title: "💡 Tips & Best Practices" },
];

function SidebarContent({ activeSection, onSectionClick }: { activeSection: string; onSectionClick: (id: string) => void }) {
  return (
    <nav className="space-y-1">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionClick(section.id)}
          className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
            activeSection === section.id
              ? "bg-primary text-primary-foreground"
              : "hover-elevate text-muted-foreground hover:text-foreground"
          }`}
          data-testid={`nav-${section.id}`}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}

export default function UserGuide() {
  const [activeSection, setActiveSection] = useState("getting-started");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex gap-8">
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" className="rounded-full shadow-lg" data-testid="button-menu-toggle">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Table of Contents</h3>
                    <SidebarContent activeSection={activeSection} onSectionClick={scrollToSection} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start">
              <h3 className="font-semibold mb-4">Table of Contents</h3>
              <SidebarContent activeSection={activeSection} onSectionClick={scrollToSection} />
            </aside>

            {/* Main Content */}
            <article className="flex-1 prose prose-sm max-w-none">
              <h1>FirePath User Guide</h1>
              <p className="text-muted-foreground italic">Your Complete Guide to Financial Independence Planning</p>
              <p>Welcome to FirePath! This comprehensive guide will walk you through every feature of the app, helping you plan your path to financial independence and early retirement (FIRE).</p>

              <div id="getting-started" className="scroll-mt-24">
                <h2>🚀 Getting Started</h2>
                
                <h3>First Launch</h3>
                <p>When you open FirePath for the first time, you'll see a welcome screen that introduces you to the app. The onboarding process includes:</p>
                <ol>
                  <li><strong>Welcome Page</strong>: Introduction to FirePath</li>
                  <li><strong>FIRE Concept</strong>: Understanding Financial Independence</li>
                  <li><strong>Calculation Overview</strong>: How FirePath works</li>
                  <li><strong>Sign In Options</strong>: Choose to sign in with Google/Apple or continue without an account</li>
                </ol>

                <h3>Sign In Options</h3>
                <ul>
                  <li><strong>Google Sign-In</strong>: Sync your data across devices</li>
                  <li><strong>Apple Sign-In</strong>: Secure authentication (iOS only)</li>
                  <li><strong>Skip Sign-In</strong>: Use the app without an account (data stored locally)</li>
                </ul>

                <h3>App Navigation</h3>
                <p>FirePath uses a bottom navigation bar with five main sections:</p>
                <ul>
                  <li>🏠 <strong>Home</strong>: Dashboard and overview</li>
                  <li>🧮 <strong>Calculator</strong>: FIRE calculation form</li>
                  <li>📊 <strong>Projections</strong>: Detailed financial projections</li>
                  <li>📈 <strong>Charts</strong>: Interactive growth visualizations</li>
                  <li>⚙️ <strong>Settings</strong>: App preferences and account management</li>
                </ul>
              </div>

              <div id="app-overview" className="scroll-mt-24">
                <h2>🏠 App Overview</h2>
                
                <h3>Home Dashboard</h3>
                <p>The home screen provides a quick overview of your FIRE journey:</p>
                <ul>
                  <li><strong>Current Status</strong>: Shows your progress toward FIRE</li>
                  <li><strong>Quick Actions</strong>: Easy access to key features</li>
                  <li><strong>Recent Calculations</strong>: Your latest FIRE scenarios</li>
                  <li><strong>Tips & Insights</strong>: Helpful information about FIRE planning</li>
                </ul>

                <h3>Key Metrics Display</h3>
                <ul>
                  <li><strong>Target Corpus</strong>: Your FIRE goal amount</li>
                  <li><strong>Years to FIRE</strong>: Time remaining to reach your goal</li>
                  <li><strong>Current Progress</strong>: Percentage completed</li>
                  <li><strong>Monthly Investment</strong>: Your planned contributions</li>
                </ul>
              </div>

              <div id="fire-calculator" className="scroll-mt-24">
                <h2>🧮 FIRE Calculator</h2>
                <p>The calculator is the heart of FirePath, where you input your financial information to calculate your FIRE journey.</p>

                <h3>Basic Information</h3>
                <h4>Personal Details</h4>
                <ul>
                  <li><strong>Birth Year</strong>: Your year of birth</li>
                  <li><strong>Retirement Age</strong>: When you plan to retire (35-65 years)</li>
                  <li><strong>Planning End Age</strong>: How long to plan ahead (default: 99 years)</li>
                </ul>

                <h4>Investment Information</h4>
                <ul>
                  <li><strong>Current Investments</strong>: Value of your existing portfolio</li>
                  <li><strong>Annual Investment</strong>: How much you'll invest each year</li>
                  <li><strong>Annual Investment Increase</strong>: Expected yearly increase in contributions (%)</li>
                </ul>

                <h4>Financial Assumptions</h4>
                <ul>
                  <li><strong>Pre-Retirement ROI</strong>: Expected annual return before retirement (%)</li>
                  <li><strong>Post-Retirement ROI</strong>: Expected annual return after retirement (%)</li>
                  <li><strong>Inflation Rate</strong>: Expected annual inflation rate (%)</li>
                  <li><strong>Annual Expenses</strong>: Your expected yearly expenses in retirement</li>
                </ul>

                <h3>FIRE Categories</h3>
                <p>Choose your target lifestyle:</p>
                <ul>
                  <li><strong>Lean FIRE (25×)</strong>: Essential/frugal lifestyle</li>
                  <li><strong>Mid FIRE (37×)</strong>: Comfortable lifestyle with discretionary spending</li>
                  <li><strong>Fat FIRE (50×)</strong>: Luxurious lifestyle with high flexibility</li>
                </ul>

                <h3>Investment Modes</h3>
                <h4>Simple Mode (Recommended for beginners)</h4>
                <ul>
                  <li>Basic annual contribution planning</li>
                  <li>Automatic start date (next year)</li>
                  <li>Default 10% annual increase in contributions</li>
                  <li>Dynamic withdrawal rates based on age</li>
                </ul>

                <h4>Advanced Mode (For detailed planning)</h4>
                <ul>
                  <li>Custom investment start dates (up to 5 years back or forward)</li>
                  <li>Manual withdrawal rate configuration</li>
                  <li>More precise timing control</li>
                  <li>Historical investment tracking</li>
                </ul>

                <h3>Withdrawal Strategies</h3>
                <h4>Plan 1: Linear Plan (Fixed Expenses)</h4>
                <ul>
                  <li>Withdraws fixed expenses each year</li>
                  <li>Predictable, inflation-adjusted spending</li>
                  <li>Best for conservative planning</li>
                </ul>

                <h4>Plan 2: Flexible Plan (Dynamic Age-Based)</h4>
                <ul>
                  <li>Higher withdrawal rates when younger (Active Phase: 12%)</li>
                  <li>Moderate rates in middle age (Transition Phase: 8%)</li>
                  <li>Lower rates when older (Conservative Phase: 5%)</li>
                  <li>Adapts to your lifestyle and corpus performance</li>
                </ul>

                <h4>Plan 3: 4% Rule Plan</h4>
                <ul>
                  <li>Classic FIRE approach based on Trinity Study</li>
                  <li>Fixed 4% of current corpus each year</li>
                  <li>Time-tested methodology</li>
                </ul>
              </div>

              <div id="financial-projections" className="scroll-mt-24">
                <h2>📊 Financial Projections</h2>
                <p>The projections page shows detailed year-by-year breakdowns of your FIRE journey.</p>

                <h3>Plan Selection</h3>
                <p>Choose between three retirement plans:</p>
                <ul>
                  <li><strong>Plan 1</strong>: Linear Plan (Fixed Expenses)</li>
                  <li><strong>Plan 2</strong>: Flexible Plan (Dynamic Age-Based)</li>
                  <li><strong>Plan 3</strong>: 4% Rule Plan</li>
                </ul>

                <h3>Phase Breakdown</h3>
                <h4>Pre-Retirement Phase (Accumulation)</h4>
                <ul>
                  <li><strong>Years</strong>: Duration of accumulation phase</li>
                  <li><strong>From Age</strong>: Starting age for calculations</li>
                  <li><strong>To Age</strong>: Retirement age</li>
                  <li><strong>Total Invested</strong>: Sum of all contributions</li>
                  <li><strong>Total Gains</strong>: Investment returns earned</li>
                  <li><strong>Total Corpus</strong>: Final portfolio value</li>
                </ul>

                <h4>Post-Retirement Phase (Withdrawal)</h4>
                <ul>
                  <li><strong>Years</strong>: Duration of retirement phase</li>
                  <li><strong>From Age</strong>: Retirement age</li>
                  <li><strong>To Age</strong>: Planning end age</li>
                  <li><strong>Starting Corpus</strong>: Portfolio value at retirement</li>
                  <li><strong>End Corpus</strong>: Remaining portfolio value</li>
                  <li><strong>Average Growth/Year</strong>: Annual growth rate during retirement</li>
                </ul>
              </div>

              <div id="growth-charts" className="scroll-mt-24">
                <h2>📈 Growth Charts</h2>
                <p>Visualize your FIRE journey with interactive charts and insights.</p>

                <h3>Chart Features</h3>
                <h4>Interactive FireGraph</h4>
                <ul>
                  <li><strong>Zoom & Pan</strong>: Pinch to zoom, drag to pan</li>
                  <li><strong>Full Screen</strong>: Tap to view in full screen mode</li>
                  <li><strong>Age Selection</strong>: Automatically selects mid-age range for optimal viewing</li>
                  <li><strong>Plan Comparison</strong>: Switch between different retirement plans</li>
                </ul>

                <h4>Plan Value Cards</h4>
                <ul>
                  <li><strong>Target Values</strong>: Shows target corpus for each plan</li>
                  <li><strong>Current Progress</strong>: Your progress toward each target</li>
                  <li><strong>Plan Differences</strong>: Visual comparison of plan strategies</li>
                </ul>
              </div>

              <div id="settings-customization" className="scroll-mt-24">
                <h2>⚙️ Settings & Customization</h2>

                <h3>General Settings</h3>
                <h4>Account Management</h4>
                <ul>
                  <li><strong>Sign In</strong>: Connect with Google or Apple</li>
                  <li><strong>Account Info</strong>: View your profile and sync status</li>
                  <li><strong>Sign Out</strong>: Disconnect your account</li>
                </ul>

                <h4>Currency Selection</h4>
                <ul>
                  <li><strong>30+ Currencies</strong>: Choose from major world currencies</li>
                  <li><strong>Currency Picker</strong>: Easy selection with search</li>
                  <li><strong>Formatting</strong>: Automatic number formatting</li>
                  <li><strong>Confirmation</strong>: Confirm before changing currency</li>
                </ul>

                <h4>Appearance</h4>
                <ul>
                  <li><strong>Light Theme</strong>: Clean, bright interface</li>
                  <li><strong>Dark Theme</strong>: Easy on the eyes</li>
                  <li><strong>System Setting</strong>: Follows your device theme</li>
                  <li><strong>Instant Switching</strong>: Changes apply immediately</li>
                </ul>
              </div>

              <div id="scenario-management" className="scroll-mt-24">
                <h2>💾 Scenario Management</h2>

                <h3>What are Scenarios?</h3>
                <p>Scenarios let you save and compare different FIRE strategies. Think of them as "what-if" calculations that help you explore various financial paths.</p>

                <h3>Creating Scenarios</h3>
                <h4>Save Current Scenario</h4>
                <ol>
                  <li>Complete your FIRE calculation</li>
                  <li>Tap "Save Current Scenario" in Settings</li>
                  <li>Enter a descriptive name</li>
                  <li>Choose to save to cloud (if signed in)</li>
                </ol>

                <h4>Scenario Naming</h4>
                <ul>
                  <li><strong>Auto-Generated</strong>: Smart names based on your inputs</li>
                  <li><strong>Custom Names</strong>: Create your own descriptive names</li>
                  <li><strong>Examples</strong>: "Conservative Plan", "Aggressive Growth", "Early Retirement"</li>
                </ul>

                <h3>Managing Scenarios</h3>
                <h4>View All Scenarios</h4>
                <ul>
                  <li>Access from Settings → Manage Scenarios</li>
                  <li>See all your saved calculations</li>
                  <li>View key details for each scenario</li>
                </ul>
              </div>

              <div id="tips-best-practices" className="scroll-mt-24">
                <h2>💡 Tips & Best Practices</h2>

                <h3>Getting Accurate Results</h3>
                <h4>Realistic Assumptions</h4>
                <ul>
                  <li><strong>ROI Expectations</strong>: 8-12% for pre-retirement, 6-8% for post-retirement</li>
                  <li><strong>Inflation Rate</strong>: 3-4% annually (adjust for your country)</li>
                  <li><strong>Investment Increases</strong>: 3-15% annual increase in contributions</li>
                </ul>

                <h4>Regular Updates</h4>
                <ul>
                  <li><strong>Quarterly Reviews</strong>: Update your inputs every 3 months</li>
                  <li><strong>Life Changes</strong>: Adjust when your situation changes</li>
                  <li><strong>Market Conditions</strong>: Consider economic factors</li>
                </ul>

                <h3>FIRE Planning Strategies</h3>
                <h4>Start Early</h4>
                <ul>
                  <li><strong>Compound Interest</strong>: Time is your greatest asset</li>
                  <li><strong>Small Amounts</strong>: Even small investments add up over time</li>
                  <li><strong>Consistency</strong>: Regular contributions matter more than timing</li>
                </ul>

                <h4>Optimize Your Strategy</h4>
                <ul>
                  <li><strong>Increase Contributions</strong>: Boost your annual investment when possible</li>
                  <li><strong>Reduce Expenses</strong>: Lower retirement expenses = smaller target corpus</li>
                  <li><strong>Tax Optimization</strong>: Consider tax-advantaged accounts</li>
                </ul>

                <h3>Common Mistakes to Avoid</h3>
                <h4>Unrealistic Expectations</h4>
                <ul>
                  <li><strong>High ROI</strong>: Don't assume 15%+ returns</li>
                  <li><strong>Low Inflation</strong>: Account for real inflation rates</li>
                  <li><strong>Perfect Timing</strong>: Markets are unpredictable</li>
                </ul>

                <h4>Ignoring Life Changes</h4>
                <ul>
                  <li><strong>Career Changes</strong>: Update when your income changes</li>
                  <li><strong>Family Changes</strong>: Adjust for new expenses</li>
                  <li><strong>Health Changes</strong>: Consider healthcare costs</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
