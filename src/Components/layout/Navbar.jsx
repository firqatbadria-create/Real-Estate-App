import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Suntlogo from "../images/real-estate-logo-1-free-png.png";

const menuConfig = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },

  {
    label: "Buy",
    to: "/buy",
    dropdown: [
      { label: "Buy Apartments", to: "/buy/apartments" },
      { label: "Buy Houses", to: "/buy/houses" },
      { label: "Buy Land", to: "/buy/land" },
      { label: "New Listings", to: "/buy/new" },
    ],
  },

  {
    label: "Rent",
    to: "/rent",
    dropdown: [
      { label: "Rent Apartments", to: "/rent/apartments" },
      { label: "Rent Houses", to: "/rent/houses" },
      { label: "Short-Term Rent", to: "/rent/short-term" },
      { label: "Long-Term Rent", to: "/rent/long-term" },
    ],
  },

  {
    label: "Sell",
    to: "/sell",
    dropdown: [
      { label: "List Property", to: "/sell/list" },
      { label: "Selling Guide", to: "/sell/guide" },
      { label: "Pricing / Valuation", to: "/sell/valuation" },
    ],
  },

  {
    label: "Agents",
    to: "/agents",
    dropdown: [
      { label: "All Agents", to: "/agents" },
      { label: "Top Rated", to: "/agents/top" },
      { label: "Become an Agent", to: "/agents/join" },
    ],
  },

  {
    label: "Contact",
    to: "/contact",
    dropdown: [
      { label: "Contact Us", to: "/contact" },
      { label: "Support", to: "/contact/support" },
      { label: "FAQ", to: "/contact/faq" },
    ],
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Caret({ open }) {
  return (
    <svg
      className={cn("h-4 w-4 transition-transform", open ? "rotate-180" : "")}
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

function MenuLink({ to, children, className = "", onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "font-semibold text-gray-900 hover:text-gray-700 transition",
        className
      )}
    >
      {children}
    </Link>
  );
}

function DesktopDropdown({ item, open, setOpen, closeAll }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-gray-900 hover:text-gray-700 transition"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
      >
        {item.label}
        <Caret open={open} />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full mt-2 w-64 rounded-xl bg-white shadow-xl ring-1 ring-black/5 z-[9999]",
          "origin-top opacity-0 scale-95 pointer-events-none transition duration-150",
          open && "opacity-100 scale-100 pointer-events-auto"
        )}
        role="menu"
      >
        <div className="py-2">
          {item.dropdown.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="block rounded-lg px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition"
              onClick={closeAll}
              role="menuitem"
            >
              {d.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({ item, open, onToggle, onNavigate }) {
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 font-semibold text-gray-900"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <Caret open={open} />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-200",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="pl-3 pb-2">
            {item.dropdown.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="block rounded-lg px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition"
                onClick={onNavigate}
              >
                {d.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

  const navRef = useRef(null);
  const desktopItems = useMemo(() => menuConfig, []);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileOpenMenu(null);
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) closeAll();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-[9998] w-full bg-white/95 backdrop-blur border-b border-gray-100">
      <div ref={navRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
            <img src={Suntlogo} alt="sunlogo" className="w-15 h-15" />
            {/* <svg
              width="44"
              height="34"
              viewBox="0 0 54 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-amber-700"
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
            </svg> */}
            <span className="text-2xl font-extrabold tracking-tight text-amber-800">
              SunTower
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {desktopItems.map((item) => {
              const hasDropdown = Array.isArray(item.dropdown);

              if (!hasDropdown) {
                return (
                  <MenuLink
                    key={item.label}
                    to={item.to}
                    className="px-4 py-2"
                    onClick={closeAll}
                  >
                    {item.label}
                  </MenuLink>
                );
              }

              const open = openMenu === item.label;

              return (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  open={open}
                  setOpen={(v) => setOpenMenu(v ? item.label : null)}
                  closeAll={closeAll}
                />
              );
            })}
          </nav>

          {/* Login button (functional) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="rounded-2xl bg-neutral-900 px-10 py-3 text-white font-bold shadow-sm hover:bg-neutral-800 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100 transition"
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileOpenMenu(null);
              setOpenMenu(null);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6 text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
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
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden bg-white border-t border-gray-100",
          "transition-[max-height] duration-200",
          mobileOpen ? "max-h-[800px]" : "max-h-0"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <nav className="flex flex-col">
            {menuConfig.map((item) => {
              const hasDropdown = Array.isArray(item.dropdown);

              if (!hasDropdown) {
                return (
                  <MenuLink
                    key={item.label}
                    to={item.to}
                    className="py-3"
                    onClick={closeAll}
                  >
                    {item.label}
                  </MenuLink>
                );
              }

              const open = mobileOpenMenu === item.label;

              return (
                <MobileDropdown
                  key={item.label}
                  item={item}
                  open={open}
                  onToggle={() =>
                    setMobileOpenMenu((cur) =>
                      cur === item.label ? null : item.label
                    )
                  }
                  onNavigate={closeAll}
                />
              );
            })}

            <div className="mt-4">
              <Link
                to="/login"
                onClick={closeAll}
                className="block w-full text-center rounded-2xl bg-neutral-900 px-6 py-3 text-white font-bold hover:bg-neutral-800 transition"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
