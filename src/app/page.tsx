import Link from "next/link";
import { OperatorCard } from "@/components/operator-card";
import { Waitlist } from "@/components/waitlist";
import { ArrowRight, Zap, Trophy, Shield, Clock } from "lucide-react";

const operators = [
  { emoji: "☘️", name: "Gina", role: "Personal AI", description: "Calendar, email triage, daily briefings, research" },
  { emoji: "🌙", name: "Luna", role: "Co-CEO", description: "Social media, tournament ops, brand content" },
  { emoji: "🎯", name: "Axle", role: "Orchestrator", description: "Breaks down goals, delegates to specialists" },
  { emoji: "🔨", name: "Forge", role: "Dev", description: "Code, repos, CI/CD, testing" },
  { emoji: "🛡️", name: "Sentinel", role: "Ops/SRE", description: "Infrastructure, security audits, monitoring" },
  { emoji: "🔍", name: "Scout", role: "Research", description: "Market research, content drafting, competitive analysis" },
  { emoji: "📬", name: "Relay", role: "Comms", description: "Email triage, message routing, draft replies" },
  { emoji: "🗓️", name: "Atlas", role: "Calendar", description: "Scheduling, tasks, daily briefings" },
];

const explore = [
  { href: "/about", label: "About", desc: "My story and background" },
  { href: "/services", label: "Services", desc: "Pricing and packages" },
  { href: "/how-it-works", label: "How It Works", desc: "The 4-phase process" },
  { href: "/guides", label: "Guides", desc: "Step-by-step tutorials" },
  { href: "/stack", label: "My Stack", desc: "What I actually run" },
  { href: "/contact", label: "Contact", desc: "Book a discovery call" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[720px] px-6">
      {/* Hero */}
      <section className="py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          I build AI teams that run businesses.
        </h1>
        <p className="text-[#a3a3a3] text-lg leading-relaxed mb-8 max-w-[600px]">
          I&apos;m Boyce — full-stack developer, esports CEO, and AI infrastructure builder. 
          I designed an 8-operator AI team that manages my esports org, triages my email, 
          runs security audits, and ships code. Now I build these teams for other businesses.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white text-sm transition-colors"
          >
            Read the Guide <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Waitlist */}
      <section className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-6 mb-12">
        <h2 className="text-lg font-semibold mb-1">Get Early Access</h2>
        <p className="text-sm text-[#737373] mb-4">Join the waitlist for priority onboarding and launch pricing.</p>
        <Waitlist />
      </section>

      {/* Social proof */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 border-t border-b border-[#1a1a1a]">
        {[
          { icon: <Zap size={16} />, text: "8 AI Operators running daily" },
          { icon: <Trophy size={16} />, text: "Top 4 Halo worldwide" },
          { icon: <Shield size={16} />, text: "Self-hosted, zero lock-in" },
          { icon: <Clock size={16} />, text: "3-5 day deployment" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            <span className="text-[#525252]">{item.icon}</span>
            <span className="text-xs text-[#a3a3a3]">{item.text}</span>
          </div>
        ))}
      </section>

      {/* Operators */}
      <section className="py-24">
        <h2 className="text-2xl font-semibold mb-2">What My AI Team Actually Does</h2>
        <p className="text-[#737373] text-sm mb-8">8 specialized operators, each with their own role, tools, and personality.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {operators.map((op) => (
            <OperatorCard key={op.name} {...op} />
          ))}
        </div>
      </section>

      {/* Explore */}
      <section className="py-24 border-t border-[#1a1a1a]">
        <h2 className="text-2xl font-semibold mb-8">Explore</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {explore.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-4 hover:border-[#333] transition-colors group"
            >
              <h3 className="text-white text-sm font-medium group-hover:text-white mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-[#737373]">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
