import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">Find answers to common questions about FirePath</p>
          </div>

          <div className="space-y-12">
            {/* Troubleshooting Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">🔧 Troubleshooting</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="calc-1">
                      <AccordionTrigger>Issue: "Please fill [Field Name]" error</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Ensure all required fields are completed</p>
                        <p className="mt-2"><strong>Tip:</strong> Use the hints provided for each field</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="calc-2">
                      <AccordionTrigger>Issue: Unrealistic results</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Check your assumptions (ROI, inflation, expenses)</p>
                        <p className="mt-2"><strong>Tip:</strong> Use conservative estimates for better planning</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="calc-3">
                      <AccordionTrigger>Issue: App crashes during calculation</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Close and reopen the app</p>
                        <p className="mt-2"><strong>Tip:</strong> Save your work frequently using scenarios</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="data-1">
                      <AccordionTrigger>Issue: Lost calculation data</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Check if you have saved scenarios</p>
                        <p className="mt-2"><strong>Tip:</strong> Always save important calculations as scenarios</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="data-2">
                      <AccordionTrigger>Issue: Currency formatting looks wrong</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Check your currency selection in Settings</p>
                        <p className="mt-2"><strong>Tip:</strong> Some currencies use different formatting (South Asian Currencies uses Lakhs/Crores)</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="data-3">
                      <AccordionTrigger>Issue: Scenarios not syncing</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Ensure you're signed in and have internet connection</p>
                        <p className="mt-2"><strong>Tip:</strong> Check your account status in Settings</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="perf-1">
                      <AccordionTrigger>Issue: App feels slow</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Restart FirePath</p>
                        <p className="mt-2"><strong>Tip:</strong> Large calculations may take a moment to process</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="perf-2">
                      <AccordionTrigger>Issue: Charts not loading</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Try switching between different plans</p>
                        <p className="mt-2"><strong>Tip:</strong> Ensure you have completed a calculation first</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="perf-3">
                      <AccordionTrigger>Issue: Form validation not working</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Solution:</strong> Try clearing and re-entering the problematic field</p>
                        <p className="mt-2"><strong>Tip:</strong> Use the reset button to start fresh</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Getting Help</h3>
                  <div className="prose prose-sm">
                    <p><strong>In-App Support:</strong></p>
                    <ul>
                      <li><strong>Settings</strong>: Check all settings and preferences</li>
                      <li><strong>Scenarios</strong>: Look for previously saved calculations</li>
                      <li><strong>Reset</strong>: Use the reset button to start over</li>
                    </ul>

                    <p><strong>Contact Support:</strong></p>
                    <ul>
                      <li><strong>Feature Requests</strong>: Submit ideas through the feature requests section in the settings</li>
                      <li><strong>Bug Reports</strong>: Report issues via the feature requests section in the settings</li>
                      <li><strong>Documentation</strong>: Check the user guide for detailed instructions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">❓ General Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="gen-1">
                  <AccordionTrigger>What is FIRE?</AccordionTrigger>
                  <AccordionContent>
                    FIRE stands for Financial Independence, Retire Early. It's a movement focused on building a large enough investment portfolio to cover your living expenses, giving you the freedom to work less or retire early.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gen-2">
                  <AccordionTrigger>Is FirePath free?</AccordionTrigger>
                  <AccordionContent>
                    Yes, FirePath is completely free to use. There are no subscription fees or hidden costs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gen-3">
                  <AccordionTrigger>Do I need to sign in to use the app?</AccordionTrigger>
                  <AccordionContent>
                    No, you can use FirePath without signing in. However, signing in allows you to sync your data across devices and access cloud features.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gen-4">
                  <AccordionTrigger>Is my data secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, your data is stored securely on your device and, if you choose to sync, encrypted in the cloud. We follow industry best practices for data protection.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Calculation Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="calc-q1">
                  <AccordionTrigger>Which FIRE category should I choose?</AccordionTrigger>
                  <AccordionContent>
                    <p>Choose based on your desired lifestyle:</p>
                    <ul className="mt-2 space-y-1">
                      <li><strong>Lean FIRE</strong>: Essential expenses only</li>
                      <li><strong>Mid FIRE</strong>: Comfortable lifestyle with some luxuries</li>
                      <li><strong>Fat FIRE</strong>: High-spending lifestyle with lots of flexibility</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="calc-q2">
                  <AccordionTrigger>What ROI should I use?</AccordionTrigger>
                  <AccordionContent>
                    <p>Use conservative estimates:</p>
                    <ul className="mt-2 space-y-1">
                      <li><strong>Pre-retirement</strong>: 8-12% annually</li>
                      <li><strong>Post-retirement</strong>: 6-8% annually</li>
                      <li>Consider your risk tolerance and investment strategy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="calc-q3">
                  <AccordionTrigger>How accurate are the calculations?</AccordionTrigger>
                  <AccordionContent>
                    FirePath uses sophisticated financial calculations, but remember that future returns and inflation are unpredictable. Use the results as a planning tool, not a guarantee.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="calc-q4">
                  <AccordionTrigger>Can I change my inputs later?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can update your inputs anytime. The app will recalculate your FIRE journey with the new information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Feature Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="feat-q1">
                  <AccordionTrigger>What's the difference between the three retirement plans?</AccordionTrigger>
                  <AccordionContent>
                    <p>The plans differ in how they handle withdrawals during retirement:</p>
                    <ul className="mt-2 space-y-1">
                      <li><strong>Linear</strong>: Fixed expenses each year</li>
                      <li><strong>Flexible</strong>: Age-based percentage withdrawals</li>
                      <li><strong>4% Rule</strong>: Fixed 4% of corpus each year</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feat-q2">
                  <AccordionTrigger>How do scenarios work?</AccordionTrigger>
                  <AccordionContent>
                    Scenarios let you save different FIRE calculations so you can compare strategies and track changes over time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feat-q3">
                  <AccordionTrigger>Can I use FirePath on multiple devices?</AccordionTrigger>
                  <AccordionContent>
                    Yes, if you sign in, your data will sync across all your devices automatically.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feat-q4">
                  <AccordionTrigger>What currencies are supported?</AccordionTrigger>
                  <AccordionContent>
                    FirePath supports 30+ major world currencies with proper formatting for each region.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Technical Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="tech-q1">
                  <AccordionTrigger>Why is the app slow sometimes?</AccordionTrigger>
                  <AccordionContent>
                    Complex calculations may take a moment to process. Try closing other apps or restarting FirePath if it becomes unresponsive.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-q2">
                  <AccordionTrigger>Can I export my data?</AccordionTrigger>
                  <AccordionContent>
                    Data export is coming soon. For now, your data is saved locally and in the cloud (if you're signed in).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-q3">
                  <AccordionTrigger>What if I lose my phone?</AccordionTrigger>
                  <AccordionContent>
                    If you're signed in, your data is backed up in the cloud and will be restored when you sign in on a new device.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-q4">
                  <AccordionTrigger>Does FirePath work offline?</AccordionTrigger>
                  <AccordionContent>
                    Yes, FirePath works offline. However, cloud sync requires an internet connection.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
