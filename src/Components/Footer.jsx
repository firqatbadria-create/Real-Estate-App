import React, { useEffect, useMemo, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function IconButton({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group inline-flex h-12 w-12 items-center justify-center rounded-full",
        "ring-2 ring-white/80 text-white/90 transition",
        "hover:bg-white/10 hover:ring-white"
      )}
      title={label}
    >
      {children}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="block text-white/85 hover:text-white transition font-semibold"
    >
      {children}
    </a>
  );
}

function SocialIcons() {
  return (
    <div className="mt-4 flex items-center gap-4">
      {/* Facebook */}
      <IconButton href="https://facebook.com" label="Facebook">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.4V11H7v3h3.1v8h3.4z" />
        </svg>
      </IconButton>

      {/* Instagram */}
      <IconButton href="https://instagram.com" label="Instagram">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM18 7.6a.7.7 0 1 1-.7-.7.7.7 0 0 1 .7.7z" />
        </svg>
      </IconButton>

      {/* LinkedIn */}
      <IconButton href="https://linkedin.com" label="LinkedIn">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M6.94 6.5A2.1 2.1 0 1 1 7 2.3a2.1 2.1 0 0 1-.06 4.2zM4.9 21.5h4V8.5h-4v13zM10.9 8.5h3.8v1.8h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7v6.7h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6h-4V8.5z" />
        </svg>
      </IconButton>

      {/* YouTube */}
      <IconButton href="https://youtube.com" label="YouTube">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      </IconButton>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!ok) {
      setStatus({ type: "error", msg: "Please enter a valid email." });
      return;
    }

    // Option B (no backend): show success message
    setStatus({ type: "success", msg: "Subscribed! We'll keep you updated." });
    setEmail("");
  };

  return (
    <div className="mt-6">
      <p className="text-white/80 font-semibold">Get updates (Newsletter)</p>
      <form onSubmit={onSubmit} className="mt-3 flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={cn(
            "w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/60",
            "ring-1 ring-white/15 focus:ring-2 focus:ring-sky-400 outline-none"
          )}
        />
        <button
          type="submit"
          className="rounded-xl bg-white text-black px-5 py-3 font-extrabold hover:bg-white/90 transition"
        >
          Join
        </button>
      </form>

      {status.type !== "idle" && (
        <p
          className={cn(
            "mt-2 text-sm font-semibold",
            status.type === "success" ? "text-emerald-300" : "text-rose-300"
          )}
        >
          {status.msg}
        </p>
      )}
    </div>
  );
}

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  // Back-to-top button (shows after scrolling)
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 350);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full bg-[#1f1f1f]">
      {/* Soft top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12">
          {/* Left */}
          <div>
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="flex items-center">
                <svg
                  width="54"
                  height="40"
                  viewBox="0 0 54 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-amber-500"
                >
                  <path
                    d="M3 20L27 3L51 20"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 18V37H45V18"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 37V24H37V37"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-amber-400">
                SunTower
              </span>
            </a>

            <p className="mt-4 text-white/60 font-semibold">
              find your dream home with us
            </p>

            <h4 className="mt-8 text-2xl font-extrabold text-white/70">
              Social Media Links
            </h4>

            <SocialIcons />

            <Newsletter />
          </div>

          {/* Column: Join */}
          <div>
            <h3 className="text-3xl font-extrabold text-white">Join</h3>
            <div className="mt-6 space-y-3">
              <FooterLink href="/join/agent">become an igent</FooterLink>
              <FooterLink href="/join/referrals">Get Referals</FooterLink>
              <FooterLink href="/join/careers">Careers</FooterLink>
            </div>
          </div>

          {/* Column: About */}
          <div>
            <h3 className="text-3xl font-extrabold text-white">About</h3>
            <div className="mt-6 space-y-3">
              <FooterLink href="/about/why">Why Choose Us</FooterLink>
              <FooterLink href="/about/community">Community Impact</FooterLink>
              <FooterLink href="/about/press">Press</FooterLink>
              <FooterLink href="/about/blogs">Blogs</FooterLink>
            </div>
          </div>

          {/* Column: Find Us */}
          <div>
            <h3 className="text-3xl font-extrabold text-white">Find Us</h3>
            <div className="mt-6 space-y-3">
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/help">Help Center</FooterLink>

              {/* Extra (advanced): quick contact */}
              <div className="pt-4">
                <p className="text-white/70 font-bold">Quick Contact</p>
                <p className="mt-2 text-white/60 font-semibold">
                  Email: support@suntower.com
                </p>
                <p className="text-white/60 font-semibold">
                  Phone: +93 700 000 000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/25" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/60 font-semibold">
            © {year} SunTower. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full px-5 py-3",
          "bg-white text-black font-extrabold shadow-lg transition",
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        ↑ Top
      </button>
    </footer>
  );
}
