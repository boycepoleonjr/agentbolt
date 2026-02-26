import { Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 mt-24">
      <div className="mx-auto max-w-[720px] px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#525252]">
          © 2026 AgentBolt · Built by{" "}
          <a href="https://boyce.pro" className="underline hover:text-[#737373]">Boyce Poleon Jr</a>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://x.com/BoycePoleonJr" target="_blank" rel="noopener" aria-label="X" className="text-[#525252] hover:text-white transition-colors">
            <Twitter size={16} />
          </a>
          <a href="mailto:boyce@agentbolt.ai" aria-label="Email" className="text-[#525252] hover:text-white transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
