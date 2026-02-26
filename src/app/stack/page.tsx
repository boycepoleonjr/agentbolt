import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Stack",
  description: "The infrastructure behind an 8-operator AI team running daily.",
};

const sections = [
  {
    title: "Agents",
    items: [
      "Gina — Claude Opus, WhatsApp + Telegram",
      "Luna — Sonnet + Opus escalation, Telegram + Discord",
      "6 specialized operators for dev, ops, research, comms, calendar, and orchestration",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "OpenClaw on WSL2 (primary workstation)",
      "DigitalOcean VPS for remote services",
      "WireGuard VPN for secure access",
      "Docker containers — Qdrant (vector DB), Firecrawl (web scraping)",
    ],
  },
  {
    title: "Security",
    items: [
      "Daily automated security audits at 9:30 AM",
      "Docker sandboxing for sub-agents",
      "Allowlisted messaging — no open DMs",
      "Credential isolation — secrets in .env only",
    ],
  },
  {
    title: "Integrations",
    items: [
      "Google Workspace (Gmail, Calendar, Drive)",
      "Asana, GitHub, GitLab, Cloudflare",
      "ElevenLabs (TTS), Canva (design)",
      "Custom CLI tools for places, weather, PDF editing",
    ],
  },
  {
    title: "Cost",
    items: [
      "~$15/day API costs",
      "$6/mo VPS (DigitalOcean)",
      "Model routing: Haiku (volume), Sonnet (skilled work), Opus (strategy)",
      "Total: under $500/mo for a full AI team",
    ],
  },
];

export default function Stack() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="text-3xl font-bold mb-2">What I Actually Run</h1>
      <p className="text-[#737373] mb-12">
        This isn&apos;t theoretical. Here&apos;s the infrastructure behind my personal AI team.
      </p>

      <div className="space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold mb-3 text-white">{s.title}</h2>
            <ul className="space-y-2">
              {s.items.map((item, i) => (
                <li key={i} className="text-sm text-[#a3a3a3] flex items-start gap-2">
                  <span className="text-[#525252] mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
