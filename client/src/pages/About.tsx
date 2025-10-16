import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About FirePath</h1>
            <p className="text-lg text-muted-foreground">The story behind the app</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Hi I am Sandjaie Ravi, I built FirePath during my evenings and weekends because I was struggling to find a simple, honest tool for FIRE planning. Most apps felt either too basic or did not have the flexibility I was looking for and I kept getting lost in spreadsheets.
            </p>

            <p className="text-lg leading-relaxed">
              So I decided to build something that would actually make sense to me - and hopefully to you too! FirePath is my attempt to make FIRE planning feel less overwhelming and more like having a clear roadmap to financial independence.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
