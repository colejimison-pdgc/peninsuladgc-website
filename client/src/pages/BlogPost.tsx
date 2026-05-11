// ============================================================
// Blog Post Detail Page — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// ============================================================

import { Link, useParams } from "wouter";
import { ArrowLeft, User, Calendar, Tag, ChevronRight } from "lucide-react";
import { blogPosts, categoryColors, categoryLabels, formatDate, formatShortDate } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.015_85)]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl text-[oklch(0.22_0.04_55)] mb-4">Post Not Found</h1>
            <Link href="/blog" className="font-body text-[oklch(0.48_0.09_152)] hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const otherPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.97_0.015_85)]">
      <Navbar />

      {/* ── HERO ── */}
      {post.image && (
        <section className="relative pt-16 overflow-hidden">
          <div className="h-72 md:h-96 relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[oklch(0_0_0/0.50)] backdrop-blur-xs md:hidden" />
            <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[oklch(0.12_0.04_55)/0.85] via-[oklch(0.12_0.04_55)/0.3] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 container pb-8">
              <div className="md:bg-[oklch(0_0_0/0.40)] md:backdrop-blur-sm rounded-lg p-8 max-w-3xl">
                <Link href="/blog" className="inline-flex items-center gap-1 font-body text-sm text-white/70 hover:text-white mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to News & Blog
                </Link>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`event-tag ${categoryColors[post.category]}`}>
                    {categoryLabels[post.category]}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-semibold text-white max-w-3xl leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {!post.image && (
        <div className="bg-[oklch(0.22_0.04_55)] pt-28 pb-10">
          <div className="container">
            <Link href="/blog" className="inline-flex items-center gap-1 font-body text-sm text-white/70 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to News & Blog
            </Link>
            <span className={`event-tag ${categoryColors[post.category]} mb-3 inline-block`}>
              {categoryLabels[post.category]}
            </span>
            <h1 className="font-display text-4xl font-semibold text-white max-w-3xl">{post.title}</h1>
          </div>
        </div>
      )}

      {/* ── CONTENT ── */}
      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <div className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-[oklch(0.86_0.025_85)]">
                <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.52_0.04_55)]">
                  <User className="w-4 h-4" />
                  <span>By <strong className="text-[oklch(0.35_0.04_55)]">{post.author}</strong></span>
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.52_0.04_55)]">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-[oklch(0.52_0.04_55)]">
                  <Tag className="w-4 h-4" />
                  <span>{categoryLabels[post.category]}</span>
                </div>
              </div>

              {/* Excerpt / lede */}
              <p className="font-display text-xl text-[oklch(0.35_0.04_55)] leading-relaxed mb-8 italic">
                {post.excerpt}
              </p>

              {/* Body */}
              <div className="prose-custom space-y-5">
                {post.content.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-[oklch(0.35_0.04_55)] leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Share / CTA */}
              <div className="mt-12 pt-8 border-t border-[oklch(0.86_0.025_85)]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Link href="/blog" className="inline-flex items-center gap-1 font-body text-sm font-bold text-[oklch(0.48_0.09_152)] hover:text-[oklch(0.36_0.09_152)] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> All Posts
                  </Link>
                  <Link href="/events" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.48_0.09_152)] hover:bg-[oklch(0.36_0.09_152)] text-white font-body text-sm font-bold rounded transition-colors">
                    View Upcoming Events <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Related posts */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-[oklch(0.86_0.025_85)]">
                <h3 className="font-display text-lg font-semibold text-[oklch(0.22_0.04_55)] mb-4">
                  {relatedPosts.length > 0 ? "Related Posts" : "More Posts"}
                </h3>
                <div className="space-y-4">
                  {(relatedPosts.length > 0 ? relatedPosts : otherPosts).map((related) => (
                    <Link key={related.id} href={`/blog/${related.id}`}>
                      <div className="group flex gap-3 cursor-pointer">
                        {related.image && (
                          <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <span className={`event-tag ${categoryColors[related.category]} mb-1 inline-block`}>
                            {categoryLabels[related.category]}
                          </span>
                          <h4 className="font-body text-sm font-bold text-[oklch(0.22_0.04_55)] group-hover:text-[oklch(0.48_0.09_152)] transition-colors line-clamp-2 leading-snug">
                            {related.title}
                          </h4>
                          <p className="font-mono-brand text-[10px] text-[oklch(0.52_0.04_55)] mt-1">
                            {formatShortDate(related.date)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Club CTA */}
              <div className="bg-[oklch(0.22_0.04_55)] rounded-lg p-6 text-white">
                <h3 className="font-display text-lg font-semibold mb-2">Join the Club</h3>
                <p className="font-body text-sm text-white/70 mb-4">
                  Become a member and support disc golf on the Peninsula.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.65_0.16_48)] hover:bg-[oklch(0.52_0.16_48)] text-white font-body text-sm font-bold rounded transition-colors w-full justify-center"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
