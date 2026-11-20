// ============================================================
// Events Calendar Page — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// Features: Category filter, event cards, calendar view toggle
// ============================================================

import { useState } from "react";
import { Calendar, MapPin, Clock, Users, DollarSign, ChevronRight, Filter } from "lucide-react";
import { events, categoryColors, categoryLabels, formatDate, formatShortDate } from "@/lib/data";
import type { Event } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COURSE_IMAGE = "/images/eh_ctp_hole9.jpg";

const categories: Array<{ value: string; label: string }> = [
  { value: "all", label: "All Events" },
  { value: "tournament", label: "Tournaments" },
  { value: "league", label: "Leagues" },
  { value: "clinic", label: "Clinics" },
  { value: "doubles", label: "Doubles" },
  { value: "volunteer", label: "Volunteer" },
];

const eventCategories = new Set(events.map((event) => event.category));
const availableCategories = categories.filter(
  (category) => category.value === "all" || eventCategories.has(category.value as Event["category"]),
);

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? events
    : events.filter((e) => e.category === activeCategory);

  const sections = [
    { title: "Active Events", events: filtered.filter((event) => !event.hibernating && !event.past), fullWidth: false },
    { title: "Hibernating Events", events: filtered.filter((event) => event.hibernating), fullWidth: false },
    { title: "Past Events", events: filtered.filter((event) => event.past), fullWidth: true },
  ].filter((section) => section.events.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-cream-soft">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${COURSE_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom 30% center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0_0_0/0.50)] backdrop-blur-xs md:hidden" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-evergreen-deep/85 to-evergreen-deep/70" />
        <div className="relative z-10 container">
          <div className="md:bg-[oklch(0_0_0/0.40)] md:backdrop-blur-sm rounded-lg p-8 max-w-2xl">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-cream mb-2">Peninsula Disc Golf Club</p>
            <h1 className="font-display text-5xl font-semibold text-white mb-3">Events</h1>
            <p className="font-body text-white/70 max-w-xl text-lg">
              Tournaments, weekly leagues, beginner clinics, and community events — there's always something happening on the Peninsula.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-brand-border shadow-sm">
        <div className="container">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            <Filter className="w-4 h-4 text-muted-ink flex-shrink-0 mr-1" />
            {availableCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body text-sm font-bold transition-colors ${
                  activeCategory === cat.value
                    ? "bg-evergreen text-white"
                    : "bg-sage-soft text-muted-ink hover:bg-brand-border"
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
          {sections.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-evergreen mb-3">No events scheduled</p>
              <p className="font-body text-muted-ink mb-6">There are currently no {activeCategory === "all" ? "" : categoryLabels[activeCategory as keyof typeof categoryLabels]?.toLowerCase()} events scheduled, but there will be events coming soon!</p>
              {activeCategory !== "all" && (
                <button
                  onClick={() => setActiveCategory("all")}
                  className="font-body text-sm text-evergreen hover:underline"
                >
                  View all events
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {sections.map((section) => (
                <section key={section.title} className={section.fullWidth ? "lg:col-span-2" : undefined}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display text-2xl font-semibold text-evergreen">{section.title}</h2>
                    <div className="flex-1 h-px bg-brand-border" />
                  </div>

                  <div className={`grid grid-cols-1 gap-5 ${section.fullWidth ? "lg:grid-cols-2" : ""}`}>
                    {section.events.map((event) => (
                    <a
                      key={event.id}
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${event.title} event details`}
                    >
                      <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col sm:flex-row">
                        {/* Date block */}
                        <div className="sm:w-28 bg-evergreen flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-1 p-4 flex-shrink-0">
                          {event.customDateDisplay ? (
                            <div className="flex flex-col sm:flex-col items-center justify-center gap-1 text-center">
                              <span className="font-body text-white text-xs leading-tight">
                                {event.customDateDisplay}
                              </span>
                            </div>
                          ) : (
                            <>
                              <span className="font-mono-brand text-sage text-xs tracking-widest uppercase">
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
                          </div>
                          <h3 className="font-display text-lg font-semibold text-evergreen mb-2 group-hover:text-brand-red transition-colors">
                            {event.title}
                          </h3>
                          <p className="font-body text-sm text-muted-ink line-clamp-2 mb-3">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-auto">
                            {event.time && (
                              <span className="flex items-center gap-1 font-body text-xs text-muted-ink">
                                <Clock className="w-3 h-3" /> {event.time}
                              </span>
                            )}
                            <span className="flex items-center gap-1 font-body text-xs text-muted-ink">
                              <MapPin className="w-3 h-3" /> {event.location}
                            </span>
                            {event.entryFee && (
                              <span className="flex items-center gap-1 font-body text-xs font-bold text-brand-red">
                                <DollarSign className="w-3 h-3" /> {event.entryFee}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden sm:flex items-center pr-4">
                          <ChevronRight className="w-5 h-5 text-sage group-hover:text-brand-red transition-colors" />
                        </div>
                      </article>
                    </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
