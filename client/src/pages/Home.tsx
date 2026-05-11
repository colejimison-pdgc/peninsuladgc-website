// ============================================================
// Home Page — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// Sections: Hero, Stats, Upcoming Events, Mission, Blog Preview, CTA
// ============================================================

import { Link } from "wouter";
import { ArrowRight, Users, TreePine } from "lucide-react";
import { categoryColors, categoryLabels } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMAGE = "/images/harrison_hole2.jpg";
const ACTION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663521680723/4LmVc63AAJJPPDnm7ZNEvC/action-throw-8i7pxpEA3rThZDTMFnR7Xm.webp";
const COMMUNITY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663521680723/4LmVc63AAJJPPDnm7ZNEvC/community-event-D6xB3opW72GX3UimDuQH5d.webp";

const stats = [
  { icon: Users, value: "1,000+", label: "Active Members" },
  { icon: TreePine, value: "2", label: "Courses" },
];

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.015_85)]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-[oklch(0_0_0/0.50)] backdrop-blur-xs md:hidden" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[oklch(0.12_0.04_55)/0.92] via-[oklch(0.12_0.04_55)/0.45] to-transparent" />

        <div className="relative z-10 container pb-20 pt-32">
          <div className="max-w-3xl md:bg-black/40 md:backdrop-blur-sm rounded-lg p-8">

            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight mb-6 animate-fade-up">
              <span className="text-white">Peninsula</span>
              {" "}
              <span className="italic text-[oklch(0.82_0.14_48)]">Disc Golf Club</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/80 max-w-xl mb-8 animate-fade-up animate-fade-up-delay-1">
              A community-driven non-profit bringing players of all skill levels together through tournaments, leagues, clinics, and course stewardship.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animate-fade-up-delay-2">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[oklch(0.65_0.16_48)] hover:bg-[oklch(0.52_0.16_48)] text-white font-body font-bold rounded transition-colors text-sm"
              >
                View Events <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-body font-bold rounded transition-colors text-sm backdrop-blur-sm border border-white/20"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-12 bg-white/20" />
          <span className="font-mono-brand text-[10px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[oklch(0.22_0.04_55)] py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <Icon className="w-6 h-6 text-[oklch(0.65_0.16_48)]" />
                <span className="font-display text-3xl font-semibold text-white">{value}</span>
                <span className="font-mono-brand text-[10px] tracking-widest uppercase text-white/50">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>





      <Footer />
    </div>
  );
}
