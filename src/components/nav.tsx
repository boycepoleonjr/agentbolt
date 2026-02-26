"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="mx-auto max-w-[720px] px-6 flex items-center justify-between h-14">
        <Link href="/" className="text-white font-semibold text-lg tracking-tight hover:text-white">
          boyce.pro
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#a3a3a3] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#a3a3a3] hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a] px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-[#a3a3a3] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
