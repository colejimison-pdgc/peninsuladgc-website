// ============================================================
// Blog / News Page — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// Features: Featured post hero, category filter, post grid
// ============================================================

import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Filter } from "lucide-react";
import { blogPosts, categoryColors, categoryLabels, formatShortDate } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COURSE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663521680723/4LmVc63AAJJPPDnm7ZNEvC/course-scenic-f5bzDYBHMESqz9UzBZnzrH.webp";

const blogCategories = [
  { value: "all", label: "All Posts" },
  { value: "news", label: "News" },
  { value: "tournament-recap", label: "Tournament Recaps" },
  { value: "course-update", label: "Course Updates" },
  { value: "community", label: "Community" },
  { value: "tips", label: "Tips & Technique" },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <div className="min-h-screen flex flex-col bg-cream-soft">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${COURSE_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0_0_0/0.50)] backdrop-blur-xs md:hidden" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-evergreen-deep/82 to-evergreen-deep/65" />
        <div className="relative z-10 container">
          <div className="md:bg-[oklch(0_0_0/0.40)] md:backdrop-blur-sm rounded-lg p-8 max-w-2xl">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-cream mb-2">Peninsula Disc Golf Club</p>
            <h1 className="font-display text-5xl font-semibold text-white mb-3">News & Blog</h1>
            <p className="font-body text-white/70 max-w-xl text-lg">
              Course updates, tournament recaps, community stories, and tips to improve your game.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && activeCategory === "all" && (
        <section className="py-12 bg-white border-b border-brand-border">
          <div className="container">
            <p className="font-mono-brand text-[11px] tracking-widest uppercase text-brand-red mb-5">Featured Story</p>
            <Link href={`/blog/${featured.id}`}>
              <article className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-evergreen p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`event-tag ${categoryColors[featured.category]}`}>
                      {categoryLabels[featured.category]}
                    </span>
                    <span className="font-mono-brand text-[10px] text-white/40">
                      {formatShortDate(featured.date)}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-cream transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="font-body text-white/70 leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-white/50">By {featured.author}</span>
                    <span className="inline-flex items-center gap-1 font-body text-sm font-bold text-sage group-hover:text-cream group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* ── FILTER BAR ── */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-brand-border shadow-sm">
        <div className="container">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            <Filter className="w-4 h-4 text-muted-ink flex-shrink-0 mr-1" />
            {blogCategories.map((cat) => (
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

      {/* ── POSTS GRID ── */}
      <main className="flex-1 py-14">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-muted-ink">No posts in this category</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-4 font-body text-sm text-evergreen hover:underline"
              >
                View all posts
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === "all" ? rest : filtered).map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                    {post.image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`event-tag ${categoryColors[post.category]}`}>
                          {categoryLabels[post.category]}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-evergreen mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-body text-sm text-muted-ink line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 pt-4 border-t border-sage-soft flex items-center justify-between">
                        <span className="font-body text-xs text-muted-ink">By {post.author}</span>
                        <span className="font-mono-brand text-[10px] text-muted-ink">
                          {formatShortDate(post.date)}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
