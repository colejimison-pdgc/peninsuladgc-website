import { Link } from "wouter";
import { Disc, Home, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.015_85)]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[oklch(0.22_0.04_55)] flex items-center justify-center">
              <Disc className="w-10 h-10 text-[oklch(0.65_0.16_48)]" />
            </div>
          </div>
          <h1 className="font-display text-8xl font-semibold text-[oklch(0.22_0.04_55)] mb-2">404</h1>
          <h2 className="font-display text-2xl font-semibold text-[oklch(0.35_0.04_55)] mb-4">
            Disc went out of bounds
          </h2>
          <p className="font-body text-[oklch(0.52_0.04_55)] mb-8">
            The page you're looking for doesn't exist. Maybe it was moved, or you followed a bad link. Let's get you back on the fairway.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.22_0.04_55)] hover:bg-[oklch(0.35_0.04_55)] text-white font-body font-bold rounded transition-colors"
            >
              <Home className="w-4 h-4" /> Go Home
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.65_0.16_48)] hover:bg-[oklch(0.52_0.16_48)] text-white font-body font-bold rounded transition-colors"
            >
              <Calendar className="w-4 h-4" /> View Events
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
