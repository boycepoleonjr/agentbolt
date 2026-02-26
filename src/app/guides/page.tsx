import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides",
  description: "Step-by-step guides for deploying and managing AI operators.",
};

const upcoming = [
  { title: "Security 101: Locking Down Your AI Operator", soon: true },
  { title: "Multi-Agent Teams: When One Isn't Enough", soon: true },
  { title: "Cost Optimization: Running AI Operators on $15/Day", soon: true },
  { title: "The CEO Playbook: Running Your Business in CEO Mode", soon: true },
];

export default function Guides() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="text-3xl font-bold mb-2">Guides</h1>
      <p className="text-[#737373] mb-12">Practical, step-by-step tutorials for building AI operator teams.</p>

      {/* Featured */}
      <div className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-8 mb-12 hover:border-[#333] transition-colors">
        <span className="text-xs text-[#525252] uppercase tracking-widest mb-3 block">Featured Guide</span>
        <h2 className="text-xl font-semibold text-white mb-2">Set Up Your First AI Operator</h2>
        <p className="text-sm text-[#a3a3a3] mb-4 leading-relaxed">
          A step-by-step guide to deploying an AI assistant that achieves your goals. 
          From choosing your model to wiring up tools and deploying to production.
        </p>
        <span className="inline-flex items-center gap-1 text-sm text-[#a3a3a3] hover:text-white transition-colors cursor-pointer">
          Coming Soon <ArrowRight size={14} />
        </span>
      </div>

      {/* Upcoming */}
      <h2 className="text-lg font-semibold mb-4">Upcoming</h2>
      <div className="space-y-3">
        {upcoming.map((g) => (
          <div key={g.title} className="flex items-center justify-between border-b border-[#1a1a1a] pb-3">
            <span className="text-sm text-[#a3a3a3]">{g.title}</span>
            <span className="text-xs text-[#525252] border border-[#1a1a1a] rounded px-2 py-0.5">Coming Soon</span>
          </div>
        ))}
      </div>
    </div>
  );
}
