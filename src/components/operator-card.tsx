interface OperatorCardProps {
  emoji: string;
  name: string;
  role: string;
  description: string;
}

export function OperatorCard({ emoji, name, role, description }: OperatorCardProps) {
  return (
    <div className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-5 hover:border-[#333] transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{emoji}</span>
        <div>
          <h3 className="text-white font-medium text-sm">{name}</h3>
          <p className="text-[#737373] text-xs">{role}</p>
        </div>
      </div>
      <p className="text-[#a3a3a3] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
