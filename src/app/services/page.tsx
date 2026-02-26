import type { Metadata } from "next";
import Link from "next/link";
import { PricingCard } from "@/components/pricing-card";

export const metadata: Metadata = {
  title: "Services",
  description: "AI operator teams deployed in 3-5 days. Starter, Business, and Enterprise packages.",
};

const plans = [
  {
    name: "Starter",
    setup: "$1,000",
    monthly: "$500",
    features: ["1 messaging platform", "3 tool integrations", "Single AI operator", "Weekly monitoring"],
    subtext: "Save 10+ hours/week. Pays for itself in 2 weeks.",
  },
  {
    name: "Business",
    setup: "$2,500",
    monthly: "$800",
    features: ["2 messaging platforms", "5 tool integrations", "3-5 operators", "Feature additions + monthly reports"],
    subtext: "Replace a $2,000/mo VA with a team that never sleeps.",
    highlighted: true,
  },
  {
    name: "Enterprise",
    setup: "$5,000",
    monthly: "$1,500",
    features: ["Multiple platforms, unlimited integrations", "Full 8-operator team", "SLA + compliance controls", "Quarterly business reviews"],
    subtext: "Enterprise automation at a fraction of traditional consulting.",
  },
];

const addons = [
  { name: "Multi-Agent Orchestration", price: "+$2,000 setup / +$300/mo" },
  { name: "Compliance Controls", price: "+$1,500 setup / +$200/mo" },
  { name: "Custom Integrations", price: "$150/hr" },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="text-3xl font-bold mb-2">Your AI Team, Deployed in Days</h1>
      <p className="text-[#737373] mb-12">Choose a plan. Get started in a single call.</p>

      <div className="grid md:grid-cols-3 gap-4 mb-16">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>

      {/* Add-ons */}
      <h2 className="text-xl font-semibold mb-4">Add-ons</h2>
      <div className="space-y-3 mb-16">
        {addons.map((a) => (
          <div key={a.name} className="flex justify-between items-center border-b border-[#1a1a1a] pb-3">
            <span className="text-sm text-[#a3a3a3]">{a.name}</span>
            <span className="text-sm text-[#525252] font-mono">{a.price}</span>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        Book a Free Discovery Call
      </Link>
    </div>
  );
}
