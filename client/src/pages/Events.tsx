// ============================================================
// Events Calendar Page — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// Features: Category filter, event cards, calendar view toggle
// ============================================================

import { useState } from "react";
import { Link } from "wouter";
import { Calendar, MapPin, Clock, Users, DollarSign, ChevronRight, Filter } from "lucide-react";
import { events, categoryColors, categoryLabels, formatDate, formatShortDate } from "@/lib/data";
import type { Event } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COURSE_IMAGE = "/images/eh_ctp_hole9_5ce4862a.jpg";

const categories: Array<{ value: string; label: string }> = [
  { value: "all", label: "All Events" },
  { value: "tournament", label: "Tournaments" },
  { value: "league", label: "Leagues" },
  { value: "clinic", label: "Clinics" },
  { value: "doubles", label: "Doubles" },
  { value: "volunteer", label: "Volunteer" },
];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? events
    : events.filter((e) => e.category === activeCategory);

  // Group by month
  const grouped: Record<string, Event[]> = {};
  filtered.forEach((event) => {
    const month = new Date(event.date + "T12:00:00").toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    if (!grouped[month]) grouped[month] = [];
    grouped[month].push(event);
  });

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.015_85)]">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${COURSE_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.04_55)/0.85] to-[oklch(0.12_0.04_55)/0.70]" />
        <div className="relative z-10 container">
          <div className="bg-[oklch(0_0_0/0.40)] backdrop-blur-sm rounded-lg p-8 max-w-2xl">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-[oklch(0.65_0.16_48)] mb-2">Peninsula Disc Golf Club</p>
            <h1 className="font-display text-5xl font-semibold text-white mb-3">Events Calendar</h1>
            <p className="font-body text-white/70 max-w-xl text-lg">
              Tournaments, weekly leagues, beginner clinics, and community events — there's always something happening on the Peninsula.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-[oklch(0.86_0.025_85)] shadow-sm">
        <div className="container">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            <Filter className="w-4 h-4 text-[oklch(0.52_0.04_55)] flex-shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body text-sm font-bold transition-colors ${
                  activeCategory === cat.value
                    ? "bg-[oklch(0.48_0.09_152)] text-white"
                    : "bg-[oklch(0.92_0.018_85)] text-[oklch(0.52_0.04_55)] hover:bg-[oklch(0.86_0.025_85)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── EVENTS LIST ── */}
      <main className="flex-1 py-14">
        <div className="container">
          {Object.keys(grouped).length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-[oklch(0.22_0.04_55)] mb-3">No events scheduled</p>
              <p className="font-body text-[oklch(0.52_0.04_55)] mb-6">There are currently no {activeCategory === "all" ? "" : categoryLabels[activeCategory as keyof typeof categoryLabels]?.toLowerCase()} events scheduled, but there will be events coming soon!</p>
              {activeCategory !== "all" && (
                <button
                  onClick={() => setActiveCategory("all")}
                  className="font-body text-sm text-[oklch(0.48_0.09_152)] hover:underline"
                >
                  View all events
                </button>
              )}
            </div>
          ) : (
            Object.entries(grouped).map(([month, monthEvents]) => (
              <div key={month} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-display text-2xl font-semibold text-[oklch(0.22_0.04_55)]">Active Events</h2>
                  <div className="flex-1 h-px bg-[oklch(0.86_0.025_85)]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {monthEvents.map((event) => (
                    <Link key={event.id} href={`/events/${event.id}`}>
                      <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col sm:flex-row">
                        {/* Date block */}
                        <div className="sm:w-28 bg-[oklch(0.22_0.04_55)] flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-1 p-4 flex-shrink-0">
                          {event.customDateDisplay ? (
                            <div className="flex flex-col sm:flex-col items-center justify-center gap-1 text-center">
                              <span className="font-body text-white text-xs leading-tight">
                                {event.customDateDisplay}
                              </span>
                            </div>
                          ) : (
                            <>
                              <span className="font-mono-brand text-[oklch(0.65_0.16_48)] text-xs tracking-widest uppercase">
                                {new Date(event.date + "T12:00:00").toLocaleDateString("en-US", { month: "short" })}
                              </span>
                              <span className="font-display text-white text-3xl font-semibold leading-none">
                                {new Date(event.date + "T12:00:00").getDate()}
                              </span>
                              <span className="font-mono-brand text-white/40 text-[10px]">
                                {new Date(event.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "short" })}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`event-tag ${categoryColors[event.category]}`}>
                              {categoryLabels[event.category]}
                            </span>
                            {event.featured && (
                              <span className="event-tag bg-[oklch(0.48_0.09_152)] text-white">Featured</span>
                            )}
                          </div>
                          <h3 className="font-display text-lg font-semibold text-[oklch(0.22_0.04_55)] mb-2 group-hover:text-[oklch(0.48_0.09_152)] transition-colors">
                            {event.title}
                          </h3>
                          <p className="font-body text-sm text-[oklch(0.52_0.04_55)] line-clamp-2 mb-3">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-auto">
                            <span className="flex items-center gap-1 font-body text-xs text-[oklch(0.52_0.04_55)]">
                              <Clock className="w-3 h-3" /> {event.time}
                            </span>
                            <span className="flex items-center gap-1 font-body text-xs text-[oklch(0.52_0.04_55)]">
                              <MapPin className="w-3 h-3" /> {event.location}
                            </span>
                            {event.entryFee && (
                              <span className="flex items-center gap-1 font-body text-xs font-bold text-[oklch(0.65_0.16_48)]">
                                <DollarSign className="w-3 h-3" /> {event.entryFee}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden sm:flex items-center pr-4">
                          <ChevronRight className="w-5 h-5 text-[oklch(0.72_0.04_55)] group-hover:text-[oklch(0.48_0.09_152)] transition-colors" />
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
