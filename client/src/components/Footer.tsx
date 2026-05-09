// ============================================================
// Footer — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial — Dark espresso bg
// ============================================================

import { Link } from "wouter";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";

const LOGO_IMAGE = "/manus-storage/pdgc-logo-clean_5db369b8.png";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_55)] text-white/80">
      {/* Main footer content */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div>
          <div className="mb-4">
            <img src={LOGO_IMAGE} alt="Peninsula Disc Golf Club" className="h-16 w-auto" />
          </div>
          <p className="font-body text-sm leading-relaxed text-white/60 max-w-xs">
            A non-profit organization dedicated to growing disc golf on the Peninsula — through community events, course stewardship, and youth outreach.
          </p>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-white text-base mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/events", label: "Events Calendar" },
              { href: "/about", label: "About the Club" },
              { href: "/blog", label: "News & Blog" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-white/60 hover:text-[oklch(0.65_0.16_48)] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-white text-base mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 font-body text-sm text-white/60">
              <Mail className="w-4 h-4 text-[oklch(0.65_0.16_48)] flex-shrink-0" />
              <a href="mailto:peninsuladiscgolf@gmail.com" className="hover:text-[oklch(0.65_0.16_48)] transition-colors">
                peninsuladiscgolf@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-5">
            <p className="font-mono-brand text-[10px] tracking-widest uppercase text-white/40 mb-3">Follow Us</p>
            <a href="https://www.facebook.com/groups/peninsuladiscgolf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[oklch(0.65_0.16_48)] hover:bg-[oklch(0.58_0.14_48)] text-white font-body text-sm transition-colors">
              <Facebook className="w-4 h-4" />
              Join Our Facebook Group
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Peninsula Disc Golf Club. A 501(c)(3) Non-Profit Organization.
          </p>
          <p className="font-mono-brand text-[10px] text-white/30 tracking-wide">
            Made with ♥ for the disc golf community
          </p>
        </div>
      </div>
    </footer>
  );
}
