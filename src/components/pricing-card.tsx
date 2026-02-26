interface PricingCardProps {
  name: string;
  setup: string;
  monthly: string;
  features: string[];
  subtext: string;
  highlighted?: boolean;
}

export function PricingCard({ name, setup, monthly, features, subtext, highlighted }: PricingCardProps) {
  return (
    <div
      className={`border rounded-lg p-6 flex flex-col ${
        highlighted
          ? "border-white/30 bg-[#111111] shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          : "border-[#1a1a1a] bg-[#111111]"
      }`}
    >
      {highlighted && (
        <span className="text-xs text-[#a3a3a3] uppercase tracking-widest mb-3">
          Most Popular
        </span>
      )}
      <h3 className="text-white font-semibold text-lg mb-1">{name}</h3>
      <div className="mb-4">
        <span className="text-white text-2xl font-bold">{setup}</span>
        <span className="text-[#737373] text-sm"> setup</span>
        <span className="text-[#525252] text-sm"> + </span>
        <span className="text-white font-semibold">{monthly}</span>
        <span className="text-[#737373] text-sm">/mo</span>
      </div>
      <ul className="space-y-2 mb-6 flex-1">
        {features.map((f, i) => (
          <li key={i} className="text-sm text-[#a3a3a3] flex items-start gap-2">
            <span className="text-[#525252] mt-0.5">→</span>
            {f}
          </li>
        ))}
      </ul>
      <p className="text-xs text-[#737373] italic">{subtext}</p>
    </div>
  );
}
