import React, { useEffect, useState } from "react";

const cn = (...c) => c.filter(Boolean).join(" ");

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const isValidEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).toLowerCase());

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const v = email.trim();
    if (!v) {
      setStatus({ type: "error", msg: "Please enter your email address." });
      return;
    }
    if (!isValidEmail(v)) {
      setStatus({ type: "error", msg: "Please enter a valid email address." });
      return;
    }

    // ✅ Here you can call your API (Mailchimp/Brevo/your backend)
    // Example:
    // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email: v }) });

    setStatus({ type: "success", msg: "Subscribed! Check your inbox ✨" });
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show / hide arrow when scrolling
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative bg-[#0b0f14] text-white">
      {/* soft top border */}
      <div className="h-px w-100 bg-white/10" />

      <div className="pl-8 pr-8 pt-16 pb-10 max-w-7xl mx-auto">
        <div className="grid gap-2 lg:grid-cols-5">
          {/* Subscribe */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold">Get Our Newsletters</h3>

            <form onSubmit={handleSubscribe} className="mt-5">
              <div className="flex w-100 max-w-xl items-center gap-3 rounded-2xl bg-white px-2 py-2 shadow-sm">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status.type !== "idle")
                      setStatus({ type: "idle", msg: "" });
                  }}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent px-3 text-slate-900 outline-none placeholder:text-slate-500"
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className={cn(
                    "shrink-0 rounded-xl px-6 py-3 font-bold text-white transition",
                    "bg-[#2f8fe0] hover:bg-[#2577bf] active:scale-[0.99]"
                  )}
                >
                  Subscribe
                </button>
              </div>

              {status.msg ? (
                <p
                  className={cn(
                    "mt-3 text-sm",
                    status.type === "error"
                      ? "text-red-300"
                      : "text-emerald-300"
                  )}
                >
                  {status.msg}
                </p>
              ) : null}
            </form>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="text-2xl font-bold">Quick Link</h4>
            <ul className="mt-6 space-y-4 text-white/85">
              {["Features", "Pricing Plan", "Contact", "404"].map((t) => (
                <li key={t}>
                  <a href="#" className="hover:text-white transition">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Contact */}
          <div>
            <h4 className="text-2xl font-bold">Get In Touch</h4>
            <div className="mt-6 space-y-4 text-white/85">
              <p className="text-white">hello@pentaclay.com</p>
              <p>55 main Street, 2nd blockMelbourne, Austrlia</p>
              <p>+000 (123) 456 88</p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Resources</h4>
            <ul className="mt-6 space-y-4 text-white/85">
              {["About Us", "Changelog", "Blog", "Terms & Condition"].map(
                (t) => (
                  <li key={t}>
                    <a href="#" className="hover:text-white transition">
                      {t}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* <h4 className="mt-10 text-2xl font-bold">Get In Touch</h4>
        <div className="mt-6 space-y-4 text-white/85">
          <p className="text-white">hello@pentaclay.com</p>
          <p>55 main Street, 2nd blockMelbourne, Austrlia</p>
          <p>+000 (123) 456 88</p>
        </div> */}

        {/* Divider line */}
        <div className="relative mt-14">
          <div className="h-px w-full bg-white/10" />

          {/* Scroll to top button (functional) */}
          <button
            type="button"
            onClick={scrollToTop}
            className={cn(
              "absolute left-1/2 -top-7 -translate-x-1/2",
              "grid h-14 w-14 place-items-center rounded-2xl",
              "bg-[#2f8fe0] text-white shadow-lg transition",
              "hover:bg-[#2577bf] active:scale-[0.98]",
              showTop ? "opacity-100" : "opacity-50"
            )}
            aria-label="Scroll to top"
            title="Back to top"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 15l6-6 6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 20l6-6 6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.55"
              />
            </svg>
          </button>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
              {/* simple logo mark */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 7l-4 5 4 5"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 7l4 5-4 5"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 6l4 12"
                  stroke="#2f8fe0"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-3xl font-extrabold">Saatosa</span>
          </div>

          {/* Copyright */}
          <p className="text-white/75">
            Copyright <span className="text-[#2f8fe0] font-bold">@2025</span>{" "}
            Saatosa All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
