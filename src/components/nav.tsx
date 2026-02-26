"use client";

import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="mx-auto max-w-[720px] px-6 flex items-center justify-between h-14">
        <Link href="/" className="text-white font-semibold text-lg tracking-tight hover:text-white">
          AgentBolt
        </Link>
        <div className="flex items-center gap-6">
          <a href="#pricing" className="text-sm text-[#a3a3a3] hover:text-white transition-colors hidden sm:block">
            Pricing
          </a>
          <a href="#how-it-works" className="text-sm text-[#a3a3a3] hover:text-white transition-colors hidden sm:block">
            How It Works
          </a>
          <a
            href="https://boyce.pro"
            target="_blank"
            rel="noopener"
            className="text-sm text-[#525252] hover:text-white transition-colors"
          >
            by Boyce
          </a>
        </div>
      </div>
    </nav>
  );
}
