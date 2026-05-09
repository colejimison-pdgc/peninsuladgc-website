// ============================================================
// Event Detail Page — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// ============================================================

import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, MapPin, DollarSign, Users, ExternalLink, Navigation } from "lucide-react";
import { events, categoryColors, categoryLabels, formatDate } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.015_85)]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl text-[oklch(0.22_0.04_55)] mb-4">Event Not Found</h1>
            <Link href="/events" className="font-body text-[oklch(0.48_0.09_152)] hover:underline">
              ← Back to Events
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedEvents = events.filter((e) => e.id !== event.id && e.category === event.category).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.015_85)]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-0 pb-0 overflow-hidden">
        {event.image ? (
          <div className="relative h-72 md:h-96">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_55)/0.85] via-[oklch(0.12_0.04_55)/0.4] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 container pb-8">
              <div className="bg-[oklch(0_0_0/0.40)] backdrop-blur-sm rounded-lg p-8">
                <Link href="/events" className="inline-flex items-center gap-1 font-body text-sm text-white/70 hover:text-white mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to Events
                </Link>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`event-tag ${categoryColors[event.category]}`}>
                    {categoryLabels[event.category]}
                  </span>
                  {event.featured && (
                    <span className="event-tag bg-[oklch(0.48_0.09_152)] text-white">Featured Event</span>
                  )}
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">{event.title}</h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[oklch(0.22_0.04_55)] pt-16 pb-10">
            <div className="container">
              <Link href="/events" className="inline-flex items-center gap-1 font-body text-sm text-white/70 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Events
              </Link>
              <span className={`event-tag ${categoryColors[event.category]} mb-3 inline-block`}>
                {categoryLabels[event.category]}
              </span>
              <h1 className="font-display text-4xl font-semibold text-white">{event.title}</h1>
            </div>
          </div>
        )}
      </section>

      {/* ── CONTENT ── */}
      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                <h2 className="font-display text-2xl font-semibold text-[oklch(0.22_0.04_55)] mb-5">About This Event</h2>
                <div className="font-body text-[oklch(0.35_0.04_55)] leading-relaxed space-y-4">
                  {event.longDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Divisions - only show for specific events */}
              {event.divisions && event.divisions.length > 0 && event.id !== "spring-league" && (
                <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                  <h2 className="font-display text-2xl font-semibold text-[oklch(0.22_0.04_55)] mb-5">
                    <Users className="inline w-5 h-5 mr-2 text-[oklch(0.65_0.16_48)]" />
                    Divisions
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {event.divisions.map((div) => (
                      <span
                        key={div}
                        className="px-4 py-2 bg-[oklch(0.94_0.02_85)] rounded font-body text-sm text-[oklch(0.35_0.04_55)] border border-[oklch(0.86_0.025_85)]"
                      >
                        {div}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related events */}
              {relatedEvents.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-semibold text-[oklch(0.22_0.04_55)] mb-4">
                    More {categoryLabels[event.category]} Events
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedEvents.map((rel) => (
                      <Link key={rel.id} href={`/events/${rel.id}`}>
                        <article className="group bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-[oklch(0.86_0.025_85)]">
                          <span className="font-mono-brand text-[10px] tracking-widest uppercase text-[oklch(0.65_0.16_48)]">
                            {new Date(rel.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                          <h4 className="font-display text-base font-semibold text-[oklch(0.22_0.04_55)] mt-1 group-hover:text-[oklch(0.48_0.09_152)] transition-colors">
                            {rel.title}
                          </h4>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[oklch(0.22_0.04_55)] rounded-lg p-6 text-white sticky top-28">
                <h3 className="font-display text-xl font-semibold mb-5">Event Details</h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[oklch(0.65_0.16_48)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono-brand text-[10px] tracking-widest uppercase text-white/40 mb-0.5">Date</p>
                      <p className="font-body text-sm text-white/90">{event.customDateDisplay || formatDate(event.date)}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[oklch(0.65_0.16_48)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono-brand text-[10px] tracking-widest uppercase text-white/40 mb-0.5">Time</p>
                      <p className="font-body text-sm text-white/90">{event.time}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[oklch(0.65_0.16_48)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono-brand text-[10px] tracking-widest uppercase text-white/40 mb-0.5">Location</p>
                      <div className="flex items-center justify-between">
                        <p className="font-body text-sm text-white/90">{event.location}</p>
                        {event.directionsUrl && (
                          <a
                            href={event.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[oklch(0.65_0.16_48)] hover:text-[oklch(0.82_0.14_48)] transition-colors"
                            title="Get directions"
                          >
                            <Navigation className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                  {event.entryFee && (
                    <li className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-[oklch(0.65_0.16_48)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono-brand text-[10px] tracking-widest uppercase text-white/40 mb-0.5">Entry Fee</p>
                        <p className="font-body text-sm text-white/90">{event.entryFee}</p>
                      </div>
                    </li>
                  )}
                  {event.maxPlayers && (
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[oklch(0.65_0.16_48)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono-brand text-[10px] tracking-widest uppercase text-white/40 mb-0.5">Capacity</p>
                        <p className="font-body text-sm text-white/90">{event.maxPlayers} players max</p>
                      </div>
                    </li>
                  )}
                </ul>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  {event.registrationUrl ? (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[oklch(0.65_0.16_48)] hover:bg-[oklch(0.52_0.16_48)] text-white font-body font-bold rounded transition-colors text-sm"
                    >
                      {event.registrationLabel || "Register Now"} <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="text-center py-3 bg-white/10 rounded font-body text-sm text-white/60">
                      No registration required
                    </div>
                  )}
                  <Link
                    href="/events"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-body text-sm rounded transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> All Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
