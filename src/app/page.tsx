import Link from "next/link";
import { Waitlist } from "@/components/waitlist";
import { Zap, Shield, Clock, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Users size={20} />,
    title: "Multi-Agent Teams",
    desc: "Not one chatbot — a full team of specialized AI operators working together. Dev, ops, research, comms, calendar, and more.",
  },
  {
    icon: <Shield size={20} />,
    title: "Self-Hosted & Secure",
    desc: "Your data stays on YOUR infrastructure. No vendor lock-in. Full control over every agent, tool, and integration.",
  },
  {
    icon: <Clock size={20} />,
    title: "Deployed in Days",
    desc: "From discovery call to running AI team in 3-5 days. Not months. Not quarters. Days.",
  },
  {
    icon: <Zap size={20} />,
    title: "Fraction of the Cost",
    desc: "Replace $7,500/mo in hires with a team that runs on ~$500/mo. 24/7 uptime, zero onboarding.",
  },
];

const operators = [
  { emoji: "🎯", name: "Orchestrator", desc: "Breaks down goals, delegates to specialists" },
  { emoji: "🔨", name: "Dev", desc: "Code, repos, CI/CD, testing" },
  { emoji: "🛡️", name: "Ops/SRE", desc: "Infrastructure, security audits, monitoring" },
  { emoji: "🔍", name: "Research", desc: "Market research, competitive analysis, content" },
  { emoji: "📬", name: "Comms", desc: "Email triage, message routing, drafts" },
  { emoji: "🗓️", name: "Calendar", desc: "Scheduling, tasks, daily briefings" },
];

const plans = [
  {
    name: "Starter",
    setup: "$1,000",
    monthly: "$500",
    features: ["1 messaging platform", "3 tool integrations", "Single AI operator", "Weekly monitoring"],
    subtext: "Pays for itself in 2 weeks.",
  },
  {
    name: "Business",
    setup: "$2,500",
    monthly: "$800",
    features: ["2 messaging platforms", "5 tool integrations", "3-5 operators", "Monthly reports"],
    subtext: "Replace a $2,000/mo VA.",
    highlighted: true,
  },
  {
    name: "Enterprise",
    setup: "$5,000",
    monthly: "$1,500",
    features: ["Unlimited platforms & integrations", "Full 8-operator team", "SLA + compliance", "Quarterly reviews"],
    subtext: "Full-scale AI operations.",
  },
];

const steps = [
  { num: "01", title: "Discovery", desc: "30-min call. I learn your workflows and pain points." },
  { num: "02", title: "Infrastructure", desc: "Secure server deployed. Security hardened. Monitoring active." },
  { num: "03", title: "Integration", desc: "Tools wired up. Workflows built. End-to-end testing." },
  { num: "04", title: "Handoff", desc: "Training, docs, support. Your AI team starts working." },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[720px] px-6">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <p className="text-sm text-[#525252] uppercase tracking-widest mb-4">AI Operator Infrastructure</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          Your AI team,<br />deployed in days.
        </h1>
        <p className="text-[#a3a3a3] text-lg leading-relaxed mb-8 max-w-[560px]">
          AgentBolt builds and deploys teams of specialized AI operators that run your 
          business operations — email, calendar, social media, security, code, and more. 
          Self-hosted. Zero vendor lock-in.
        </p>
        <div className="mb-8">
          <Waitlist />
        </div>
        <p className="text-xs text-[#525252]">
          Built by{" "}
          <a href="https://boyce.pro" className="underline hover:text-[#737373]">
            Boyce Poleon Jr
          </a>
        </p>
      </section>

      {/* Stats bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-[#1a1a1a]">
        {[
          { stat: "8", label: "AI operators" },
          { stat: "3-5", label: "days to deploy" },
          { stat: "$500", label: "/mo average cost" },
          { stat: "24/7", label: "uptime" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-bold text-white">{item.stat}</p>
            <p className="text-xs text-[#525252]">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="py-24">
        <h2 className="text-2xl font-semibold mb-10">Why AgentBolt</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="space-y-2">
              <span className="text-[#525252]">{f.icon}</span>
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operators */}
      <section className="py-24 border-t border-[#1a1a1a]">
        <h2 className="text-2xl font-semibold mb-2">The Operator Team</h2>
        <p className="text-[#737373] text-sm mb-8">Each agent has its own role, tools, security sandbox, and personality.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {operators.map((op) => (
            <div key={op.name} className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-4 hover:border-[#333] transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xl">{op.emoji}</span>
                <h3 className="text-white text-sm font-medium">{op.name}</h3>
              </div>
              <p className="text-xs text-[#a3a3a3] ml-9">{op.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 border-t border-[#1a1a1a] scroll-mt-16">
        <h2 className="text-2xl font-semibold mb-10">How It Works</h2>
        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-5">
              <span className="text-2xl font-bold text-[#1a1a1a] select-none">{s.num}</span>
              <div>
                <h3 className="text-white font-medium mb-1">{s.title}</h3>
                <p className="text-sm text-[#a3a3a3]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-[#1a1a1a] scroll-mt-16">
        <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
        <p className="text-[#737373] text-sm mb-10">Setup + monthly. No hidden fees. Cancel anytime.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-lg p-5 flex flex-col ${
                plan.highlighted
                  ? "border-white/30 bg-[#111111] shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  : "border-[#1a1a1a] bg-[#111111]"
              }`}
            >
              {plan.highlighted && (
                <span className="text-xs text-[#a3a3a3] uppercase tracking-widest mb-2">Most Popular</span>
              )}
              <h3 className="text-white font-semibold mb-1">{plan.name}</h3>
              <div className="mb-3">
                <span className="text-white text-xl font-bold">{plan.setup}</span>
                <span className="text-[#737373] text-xs"> setup + </span>
                <span className="text-white font-semibold">{plan.monthly}</span>
                <span className="text-[#737373] text-xs">/mo</span>
              </div>
              <ul className="space-y-1.5 mb-4 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-xs text-[#a3a3a3] flex items-start gap-2">
                    <span className="text-[#525252]">→</span>{f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#737373] italic">{plan.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-[#1a1a1a] text-center">
        <h2 className="text-2xl font-semibold mb-3">Ready to build your AI team?</h2>
        <p className="text-[#737373] text-sm mb-8">Join the waitlist for priority onboarding and launch pricing.</p>
        <div className="max-w-md mx-auto">
          <Waitlist />
        </div>
      </section>
    </div>
  );
}
