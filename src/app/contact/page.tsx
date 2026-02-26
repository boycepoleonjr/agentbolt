import type { Metadata } from "next";
import { Mail, Twitter } from "lucide-react";
import { Waitlist } from "@/components/waitlist";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute discovery call or reach out directly.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="text-3xl font-bold mb-2">Let&apos;s Talk</h1>
      <p className="text-[#a3a3a3] leading-relaxed mb-12">
        Discovery Call (Free, 30 min) — I&apos;ll learn your workflows, identify automation 
        opportunities, and give you a custom recommendation.
      </p>

      {/* Calendly placeholder */}
      <div className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-12 text-center mb-12">
        <p className="text-[#525252] text-sm mb-4">Calendly embed coming soon</p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Book a Discovery Call
        </a>
      </div>

      {/* Waitlist */}
      <div className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-6 mb-12">
        <h2 className="text-lg font-semibold mb-1">Join the Waitlist</h2>
        <p className="text-sm text-[#737373] mb-4">Get notified when we launch and lock in early pricing.</p>
        <Waitlist />
      </div>

      <div className="space-y-3">
        <a
          href="mailto:boyce@agentbolt.ai"
          className="flex items-center gap-3 text-sm text-[#a3a3a3] hover:text-white transition-colors"
        >
          <Mail size={16} className="text-[#525252]" />
          boyce@agentbolt.ai
        </a>
        <a
          href="https://x.com/BoycePoleonJr"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-3 text-sm text-[#a3a3a3] hover:text-white transition-colors"
        >
          <Twitter size={16} className="text-[#525252]" />
          @BoycePoleonJr
        </a>
      </div>
    </div>
  );
}
