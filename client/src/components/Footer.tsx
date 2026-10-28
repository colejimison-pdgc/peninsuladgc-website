// ============================================================
// Footer — Peninsula Disc Golf Club
// Design: Outdoor Adventure Editorial — Deep evergreen bg
// ============================================================

import { Link } from "wouter";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";

const LOGO_IMAGE = "/logos/PDGC_Primary_Stacked_OneColor_White_72ppi.png";

export default function Footer() {
  return (
    <footer className="bg-evergreen-deep text-white/80">
      {/* Main footer content */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div>
          <div className="mb-4">
            <img src={LOGO_IMAGE} alt="Peninsula Disc Golf Club" className="h-32 w-auto" />
          </div>
          <p className="font-body text-sm leading-relaxed text-white/60 max-w-xs">
            A non-profit organization dedicated to growing disc golf on the Peninsula through community events, course stewardship, and youth outreach.
          </p>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-white text-base mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/events", label: "Events" },
              { href: "/about", label: "About the Club" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-white/60 hover:text-cream transition-colors">
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
              <Mail className="w-4 h-4 text-sage flex-shrink-0" />
              <a href="mailto:pdgcinfo@peninsuladgc.org" className="hover:text-cream transition-colors">
                pdgcinfo@peninsuladgc.org
              </a>
            </li>
          </ul>
          <div className="mt-5">
            <p className="font-mono-brand text-[10px] tracking-widest uppercase text-white/40 mb-3">Follow Us</p>
            <a href="https://www.facebook.com/groups/peninsuladiscgolf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-red hover:bg-brand-red-dark text-white font-body text-sm transition-colors">
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
        </div>
      </div>
    </footer>
  );
}
