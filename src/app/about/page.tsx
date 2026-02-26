import type { Metadata } from "next";
import { Twitter, Instagram, Github, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Full-stack developer, esports CEO, and AI infrastructure builder.",
};

const timeline = [
  { year: "2023–Present", text: "Full-Stack Developer, Finfrock Industries" },
  { year: "2024–Present", text: "Founder & CEO, Luminon Gaming (Top 4 Halo Infinite)" },
  { year: "2026", text: "Founded AgentBolt — AI operator team infrastructure" },
];

const socials = [
  { href: "https://x.com/BoycePoleonJr", icon: <Twitter size={16} />, label: "X" },
  { href: "https://instagram.com/boycepoleonjr", icon: <Instagram size={16} />, label: "Instagram" },
  { href: "https://github.com/boycepoleonjr", icon: <Github size={16} />, label: "GitHub" },
  { href: "mailto:boyce@agentbolt.ai", icon: <Mail size={16} />, label: "Email" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="text-3xl font-bold mb-8">About</h1>

      {/* Photo placeholder */}
      <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-[#333] mb-8 flex items-center justify-center text-[#525252] text-xs">
        Photo
      </div>

      <div className="space-y-4 text-[#a3a3a3] leading-relaxed mb-16">
        <p>
          I&apos;m a TypeScript developer at Finfrock Industries by day and the founder of 
          Luminon Gaming — a top-4 Halo Infinite esports organization — by night.
        </p>
        <p>
          In February 2026, I built an 8-operator AI team that runs both my personal life 
          and my esports business. Not a chatbot. Not a Zapier flow. A full team of specialized 
          AI agents — each with their own role, tools, security sandbox, and personality.
        </p>
        <p>
          I went from grinding 16-hour days to CEO mode — informed of what was done, what&apos;s 
          pending, and what&apos;s next. Now I build these teams for other businesses.
        </p>
      </div>

      {/* Timeline */}
      <h2 className="text-xl font-semibold mb-6">Timeline</h2>
      <div className="space-y-4 mb-16">
        {timeline.map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <span className="text-sm text-[#525252] font-mono w-32 shrink-0">{item.year}</span>
            <span className="text-sm text-[#a3a3a3]">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Socials */}
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm text-[#525252] hover:text-white transition-colors"
            aria-label={s.label}
          >
            {s.icon}
            <span>{s.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
