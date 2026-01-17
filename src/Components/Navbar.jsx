import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Saatlogo from "../Components/images/saatlogo.svg";

const pages = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
];

const cn = (...c) => c.filter(Boolean).join(" ");

function Chevron({ open }) {
  return (
    <svg
      className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Navbar() {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  const closeAll = () => {
    setPagesOpen(false);
    setMobileOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) closeAll();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const linkBase =
    "text-white/90 hover:text-white transition font-medium px-3 py-2 rounded-xl";
  const active = "text-white bg-white/10 ring-1 ring-white/10";

  return (
    <header className="sticky top-0 z-50">
      {/* Top gradient bar (optional like screenshot vibe) */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#050b1e] via-[#0a1a3a] to-[#1a3cff]" />

      <div className="bg-gradient-to-r from-[#050b1e] via-[#0a1a3a] to-[#1a3cff]">
        <div ref={navRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <img src={Saatlogo} alt="Saatosa Logo" className="h-10 w-auto" />
            {/* <Link to="/" className="flex items-center gap-3" onClick={closeAll}> */}
            {/* </Link> */}

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Pages dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPagesOpen(true)}
                onMouseLeave={() => setPagesOpen(false)}
              >
                <button
                  type="button"
                  className={cn(linkBase, "inline-flex items-center gap-2")}
                  aria-haspopup="menu"
                  aria-expanded={pagesOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    setPagesOpen((v) => !v);
                  }}
                >
                  Pages <Chevron open={pagesOpen} />
                </button>

                <div
                  className={cn(
                    "absolute left-0 top-full mt-3 w-60 rounded-2xl bg-[#0f1a30] shadow-2xl ring-1 ring-white/10",
                    "origin-top opacity-0 scale-95 pointer-events-none transition duration-250",
                    pagesOpen && "opacity-100 scale-100 pointer-events-auto"
                  )}
                  role="menu"
                >
                  <div className="p-2">
                    {pages.map((p) => (
                      <NavLink
                        key={p.to}
                        to={p.to}
                        role="menuitem"
                        onClick={closeAll}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-xl px-4 py-3 text-sm text-white/90 hover:text-white hover:bg-white/10 transition",
                            isActive && "bg-white/10 text-white"
                          )
                        }
                      >
                        {p.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink
                to="/about"
                onClick={closeAll}
                className={({ isActive }) => cn(linkBase, isActive && active)}
              >
                About us
              </NavLink>

              <NavLink
                to="/features"
                onClick={closeAll}
                className={({ isActive }) => cn(linkBase, isActive && active)}
              >
                Features
              </NavLink>

              <NavLink
                to="/pricing"
                onClick={closeAll}
                className={({ isActive }) => cn(linkBase, isActive && active)}
              >
                Pricing
              </NavLink>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                onClick={closeAll}
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition"
              >
                Contact
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* Mobile button */}
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-2xl p-2 text-white/90 hover:text-white hover:bg-white/10 transition"
              onClick={() => {
                setMobileOpen((v) => !v);
                setPagesOpen(false);
              }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile panel */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-[max-height] duration-200",
              mobileOpen ? "max-h-[520px]" : "max-h-0"
            )}
          >
            <div className="pb-5">
              <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                {/* Pages accordion */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between rounded-xl px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 transition font-medium"
                  onClick={() => setPagesOpen((v) => !v)}
                  aria-expanded={pagesOpen}
                >
                  Pages <Chevron open={pagesOpen} />
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-200",
                    pagesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="min-h-0">
                    <div className="pt-1">
                      {pages.map((p) => (
                        <NavLink
                          key={p.to}
                          to={p.to}
                          onClick={closeAll}
                          className={({ isActive }) =>
                            cn(
                              "block rounded-xl px-3 py-3 text-sm text-white/85 hover:text-white hover:bg-white/10 transition",
                              isActive && "bg-white/10 text-white"
                            )
                          }
                        >
                          {p.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>

                <NavLink
                  to="/about"
                  onClick={closeAll}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 transition font-medium",
                      isActive && "bg-white/10 text-white"
                    )
                  }
                >
                  About us
                </NavLink>

                <NavLink
                  to="/features"
                  onClick={closeAll}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 transition font-medium",
                      isActive && "bg-white/10 text-white"
                    )
                  }
                >
                  Features
                </NavLink>

                <NavLink
                  to="/pricing"
                  onClick={closeAll}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 transition font-medium",
                      isActive && "bg-white/10 text-white"
                    )
                  }
                >
                  Pricing
                </NavLink>

                <Link
                  to="/contact"
                  onClick={closeAll}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-white font-semibold hover:bg-sky-400 transition"
                >
                  Contact <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
          {/* end mobile */}
        </div>
      </div>
    </header>
  );
}
