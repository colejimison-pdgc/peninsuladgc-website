// ============================================================
// About Page — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// Sections: Mission, Values, History, Board Members, Membership
// ============================================================

import { Link } from "wouter";
import { Heart, TreePine, Users, TrendingUp, ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_IMAGE = "/manus-storage/eh_devin_hole4_6c0dead2.jpg";
const COMMUNITY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663521680723/4LmVc63AAJJPPDnm7ZNEvC/community-event-D6xB3opW72GX3UimDuQH5d.webp";

const values = [
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Disc golf is for everyone. We actively welcome players of all ages, backgrounds, and skill levels, and work to remove barriers to participation.",
  },
  {
    icon: TreePine,
    title: "Stewardship",
    description: "We are committed to maintaining and improving the natural spaces where we play, leaving courses better than we found them.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe disc golf is at its best when it brings people together. Every event, league, and workday is an opportunity to build lasting connections.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We are committed to expanding the number of disc golf courses in San Mateo County, making the sport more accessible to players throughout the region.",
  },
];

// Initials avatar colors
const avatarColors = [
  "bg-[oklch(0.48_0.09_152)]",
  "bg-[oklch(0.65_0.16_48)]",
  "bg-[oklch(0.36_0.09_152)]",
  "bg-[oklch(0.52_0.16_48)]",
  "bg-[oklch(0.42_0.10_152)]",
  "bg-[oklch(0.58_0.14_48)]",
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.015_85)]">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${ABOUT_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.04_55)/0.80] to-[oklch(0.12_0.04_55)/0.65]" />
        <div className="relative z-10 container">
          <div className="bg-[oklch(0_0_0/0.40)] backdrop-blur-sm rounded-lg p-8 max-w-2xl">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-[oklch(0.65_0.16_48)] mb-2">Who We Are</p>
            <h1 className="font-display text-5xl font-semibold text-white mb-3">About the Club</h1>
            <p className="font-body text-white/70 max-w-xl text-lg">
              A non-profit community organization dedicated to growing disc golf on the Peninsula since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-[oklch(0.65_0.16_48)] mb-3">Our History & Mission</p>
            <h2 className="font-display text-4xl font-semibold text-[oklch(0.22_0.04_55)] mb-6 leading-tight">
              Building a thriving disc golf community on the Peninsula
            </h2>
            <p className="font-body text-[oklch(0.35_0.04_55)] leading-relaxed mb-4">
              Our mission is to promote, develop, and sustain disc golf on the Peninsula through community events, course stewardship, youth education, and advocacy for new course development. We believe disc golf has a unique power to bring people together across generations and backgrounds.
            </p>
            <p className="font-body text-[oklch(0.35_0.04_55)] leading-relaxed">
              The Peninsula Disc Golf Club was formed in 2008 and ran a couple of tournaments with temporary layouts at Pescadero Creek County Park. In September 2021, the club installed concrete teepads at the Emerald Hills Disc Golf Course, marking a major milestone in establishing permanent disc golf infrastructure on the Peninsula.
            </p>
          </div>


        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 topo-bg bg-[oklch(0.94_0.02_85)]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-[oklch(0.65_0.16_48)] mb-2">What We Stand For</p>
            <h2 className="font-display text-4xl font-semibold text-[oklch(0.22_0.04_55)]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-6 shadow-sm border border-[oklch(0.86_0.025_85)] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[oklch(0.94_0.02_85)] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[oklch(0.48_0.09_152)]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[oklch(0.22_0.04_55)] mb-2">{title}</h3>
                <p className="font-body text-sm text-[oklch(0.52_0.04_55)] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-[oklch(0.65_0.16_48)] mb-2">Get in Touch</p>
            <h2 className="font-display text-4xl font-semibold text-[oklch(0.22_0.04_55)] mb-3">Contact Us</h2>
            <p className="font-body text-[oklch(0.52_0.04_55)]">
              Have questions? Want to get involved? Reach out to the Peninsula Disc Golf Club.
            </p>
          </div>

          <div className="bg-[oklch(0.94_0.02_85)] rounded-lg p-8 border border-[oklch(0.86_0.025_85)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[oklch(0.48_0.09_152)] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-mono-brand text-[10px] tracking-widest uppercase text-[oklch(0.65_0.16_48)] mb-1">Email</p>
                <a href="mailto:peninsuladiscgolf@gmail.com" className="font-body text-lg font-bold text-[oklch(0.22_0.04_55)] hover:text-[oklch(0.48_0.09_152)] transition-colors">
                  peninsuladiscgolf@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
