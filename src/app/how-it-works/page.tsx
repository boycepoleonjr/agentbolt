import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "4-phase deployment process: Discovery, Infrastructure, Integration, Handoff.",
};

const phases = [
  {
    num: "01",
    title: "Discovery",
    timing: "Day 0",
    desc: "30-minute call. I learn your workflows, tools, pain points. You tell me what's eating your time. I design the solution.",
  },
  {
    num: "02",
    title: "Infrastructure",
    timing: "Days 1–2",
    desc: "Secure VPS or cloud provisioned. OpenClaw gateway deployed. Security hardened. Monitoring active. Your data stays on YOUR infrastructure.",
  },
  {
    num: "03",
    title: "Integration",
    timing: "Days 2–4",
    desc: "Tools wired up — CRM, email, calendar, project management. AI model routing configured. Custom workflows built. End-to-end testing.",
  },
  {
    num: "04",
    title: "Handoff",
    timing: "Day 5",
    desc: "Training session, full docs, support channels. Your AI team starts working. I monitor and optimize weekly.",
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="text-3xl font-bold mb-2">How It Works</h1>
      <p className="text-[#737373] mb-16">From call to running AI team in 5 days.</p>

      <div className="space-y-12 mb-24">
        {phases.map((p) => (
          <div key={p.num} className="flex gap-6">
            <div className="text-3xl font-bold text-[#1a1a1a] select-none">{p.num}</div>
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                <span className="text-xs text-[#525252] font-mono">{p.timing}</span>
              </div>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <h2 className="text-xl font-semibold mb-4">Architecture</h2>
      <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 font-mono text-sm text-[#a3a3a3] overflow-x-auto">
        <pre>{`You → Messaging App → Orchestrator (Axle)
                          ├→ Dev (Forge)
                          ├→ Ops (Sentinel)
                          ├→ Research (Scout)
                          ├→ Comms (Relay)
                          ├→ Calendar (Atlas)
                          ├→ Memory (Vault)
                          └→ Guardian (Warden)`}</pre>
      </div>
    </div>
  );
}
