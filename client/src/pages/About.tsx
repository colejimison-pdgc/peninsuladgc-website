// ============================================================
// About Page — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// Sections: Mission, Values, History, Board Members, Membership
// ============================================================

import { useEffect } from "react";
import { Link } from "wouter";
import { Heart, TreePine, Users, TrendingUp, ArrowRight, Mail, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_IMAGE = "/images/eh_devin_hole4.jpg";
const COMMUNITY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663521680723/4LmVc63AAJJPPDnm7ZNEvC/community-event-D6xB3opW72GX3UimDuQH5d.webp";
const LOGO_IMAGE = "/logos/PDGC_Primary_Stacked_FullColor_72ppi.png";

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

const courses = [
  {
    name: "Emerald Hills Golf Course",
    image: "/images/eh-1.jpg",
    udiscUrl: "https://udisc.com/courses/emerald-hills-golf-course-GDDQ",
    established: 2015,
    description:
      "Nestled in the scenic hills above Redwood City, Emerald Hills Golf Course offers 19 holes of disc golf alongside a traditional 9-hole golf course. With rolling fairways, challenging elevation changes, and beautiful Peninsula views, this course offers a unique experience for players of all skill levels.",
  },
  {
    name: "Coyote Point Disc Golf Course",
    image: "/images/coyote-point-1.jpg",
    udiscUrl: "https://udisc.com/courses/coyote-point-disc-golf-course-2TCY",
    established: 2026,
    description:
      "Situated within the Coyote Point Recreation Area, the Coyote Point Disc Golf Course is run by San Mateo County Parks. This 9-hole track offers fun shots for all skills levels as well as stunning views of San Francisco Bay.",
  },
];

// Initials avatar colors
const avatarColors = [
  "bg-evergreen",
  "bg-brand-red",
  "bg-evergreen-deep",
  "bg-brand-red-dark",
  "bg-olive",
  "bg-brand-red-dark",
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

export default function About() {
  // Wouter doesn't scroll to hash anchors on client-side navigation,
  // so handle links like /about#courses manually.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream-soft">
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
        <div className="absolute inset-0 bg-[oklch(0_0_0/0.50)] backdrop-blur-xs md:hidden" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-evergreen-deep/80 to-evergreen-deep/65" />
        <div className="relative z-10 container">
          <div className="md:bg-[oklch(0_0_0/0.60)] md:backdrop-blur-sm rounded-lg p-8 max-w-2xl">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-cream mb-2">Who We Are</p>
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
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-brand-red mb-3">Our History & Mission</p>
            <h2 className="font-display text-4xl font-semibold text-evergreen mb-6 leading-tight">
              Building a thriving disc golf community on the Peninsula
            </h2>
            <p className="font-body text-ink leading-relaxed mb-4">
              Our mission is to promote, develop, and sustain disc golf on the Peninsula through community events, course stewardship, youth education, and advocacy for new course development. We believe disc golf has a unique power to bring people together across generations and backgrounds.
            </p>
            <p className="font-body text-ink leading-relaxed">
              The Peninsula Disc Golf Club was formed in 2008 and ran a couple of tournaments with temporary layouts at Pescadero Creek County Park. In September 2021, the club installed concrete teepads at the Emerald Hills Disc Golf Course, marking a major milestone in establishing permanent disc golf infrastructure on the Peninsula.
            </p>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={LOGO_IMAGE}
              alt="Peninsula Disc Golf Club"
              loading="lazy"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── OUR COURSES ── */}
      <section id="courses" className="py-20 topo-bg bg-parchment scroll-mt-16 md:scroll-mt-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-brand-red mb-2">Where We Play</p>
            <h2 className="font-display text-4xl font-semibold text-evergreen">Our Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map(({ name, image, udiscUrl, established, description }) => (
              <div
                key={name}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm border border-brand-border"
              >
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="flex flex-col flex-1 p-8">
                  <p className="font-mono-brand text-[11px] tracking-widest uppercase text-brand-red mb-2">
                    Est. {established}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-evergreen mb-3">{name}</h3>
                  {description && (
                    <p className="font-body text-ink leading-relaxed mb-6">{description}</p>
                  )}
                  <a
                    href={udiscUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold rounded transition-colors text-sm"
                  >
                    View on UDisc <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-brand-red mb-2">What We Stand For</p>
            <h2 className="font-display text-4xl font-semibold text-evergreen">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-cream-soft rounded-lg p-6 shadow-sm border border-brand-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-parchment flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-evergreen" />
                </div>
                <h3 className="font-display text-lg font-semibold text-evergreen mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-ink leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20 topo-bg bg-parchment">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-brand-red mb-2">Get in Touch</p>
            <h2 className="font-display text-4xl font-semibold text-evergreen mb-3">Contact Us</h2>
            <p className="font-body text-muted-ink">
              Have questions? Want to get involved? Reach out to the Peninsula Disc Golf Club.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-brand-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-evergreen flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-mono-brand text-[10px] tracking-widest uppercase text-brand-red mb-1">Email</p>
                <a href="mailto:info@peninsuladgc.org" className="font-body text-lg font-bold text-evergreen hover:text-brand-red transition-colors">
                  info@peninsuladgc.org
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
