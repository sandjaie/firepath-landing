import { Link } from "wouter";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Support() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support</h1>
            <p className="text-lg text-muted-foreground">Get help and find answers to your questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ Card */}
            <Link href="/faq" data-testid="link-faq-section">
              <Card className="hover-elevate cursor-pointer h-full transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">FAQ</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Find answers to frequently asked questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Browse through our comprehensive FAQ section covering general questions, calculations, features, technical issues, and troubleshooting.
                  </p>
                  <p className="text-primary font-medium mt-4">View FAQ →</p>
                </CardContent>
              </Card>
            </Link>

            {/* Contact Card */}
            <Card className="h-full" data-testid="card-contact">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Contact</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Reach out to us directly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Have a question or need assistance? Feel free to contact us:
                </p>
                <a
                  href="mailto:mugglelabs.tech@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover-elevate transition-all text-foreground"
                  data-testid="link-email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">mugglelabs.tech@gmail.com</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
