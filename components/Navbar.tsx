"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Who We Are" },
    { href: "/services", label: "Services" },
    { href: "/jobs", label: "Jobs", badge: "Hiring" },
    { href: "/why-zuvan", label: "Why Zuvan" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceSubLinks = [
    { href: "/services", label: "All Services Overview" },
    { href: "/it-consulting", label: "01 | IT Consulting" },
    { href: "/staffing", label: "02 | Staffing Solutions" },
    { href: "/recruitment", label: "03 | Direct Recruitment" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-1">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/assets/images/logo-main-transparent.png"
                alt="Zuvan Software Services"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 inline-flex items-center gap-1.5 ${
                    active
                      ? "text-blue-700 bg-blue-50/80 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 border border-amber-200 tracking-wider">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+914048219900"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-700 py-2 px-3 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Line</span>
            </a>

            <Link href="/contact" className="btn-primary py-2.5 px-4 text-xs sm:text-sm">
              <span>Let&apos;s Partner</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer Aside */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out lg:hidden overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
              <div className="relative h-11 w-44">
                <Image
                  src="/assets/images/logo-main-transparent.png"
                  alt="Zuvan Software Services"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Links */}
          <nav className="mt-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-amber-100 text-amber-800 border border-amber-200">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ChevronRight className={`w-4 h-4 ${active ? "text-blue-700" : "text-slate-400"}`} />
                </Link>
              );
            })}

            <div className="my-3 border-t border-slate-100 pt-3">
              <div className="px-3.5 py-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider font-heading">
                Our Services &amp; Delivery
              </div>
              {serviceSubLinks.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-blue-700 hover:bg-slate-50 transition-colors"
                >
                  <span>{sub.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-6 border-t border-slate-100">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full py-3.5 text-center text-sm"
          >
            <span>Let&apos;s Build Something Great</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-center text-[11px] text-slate-400 mt-3 font-medium">
            Zuvan Software Services Pvt. Ltd. • Hyderabad, India
          </p>
        </div>
      </aside>
    </>
  );
}

