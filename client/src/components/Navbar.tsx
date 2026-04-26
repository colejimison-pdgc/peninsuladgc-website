// ============================================================
// Navbar — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial
// Sticky nav with transparent-to-solid scroll transition
// ============================================================

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Disc } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "News & Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome || menuOpen
          ? "bg-[oklch(0.22_0.04_55)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[oklch(0.65_0.16_48)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Disc className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-white text-sm leading-none">
              Peninsula
            </div>
            <div className="font-mono-brand text-[oklch(0.65_0.16_48)] text-[10px] tracking-widest uppercase leading-none mt-0.5">
              Disc Golf Club
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 font-body text-sm font-700 tracking-wide transition-colors rounded-sm relative group ${
                location === link.href
                  ? "text-[oklch(0.65_0.16_48)]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[oklch(0.65_0.16_48)] rounded-full" />
              )}
            </Link>
          ))}
          <Link
            href="/events"
            className="ml-4 px-5 py-2 bg-[oklch(0.65_0.16_48)] hover:bg-[oklch(0.52_0.16_48)] text-white font-body text-sm font-bold rounded transition-colors"
          >
            Join a Round
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.22_0.04_55)] border-t border-white/10 pb-4">
          <nav className="container flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3 font-body text-base transition-colors border-b border-white/5 ${
                  location === link.href
                    ? "text-[oklch(0.65_0.16_48)] font-bold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/events"
              className="mt-3 px-5 py-3 bg-[oklch(0.65_0.16_48)] hover:bg-[oklch(0.52_0.16_48)] text-white font-body text-sm font-bold rounded text-center transition-colors"
            >
              Join a Round
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
