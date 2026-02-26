import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on AI operators, automation, and building teams that work for you.",
};

const posts = [
  {
    slug: "why-i-built-ai-team",
    title: "Why I Built an 8-Agent AI Team Instead of Hiring",
    date: "2026-02-25",
    readTime: "5 min",
    excerpt:
      "I was working 16-hour days running an esports org and a full-time dev job. Then I built a team of AI operators that changed everything.",
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-[#737373] mb-12">
        Thoughts on AI operators, automation, and building teams that work for you.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-[#1a1a1a] bg-[#111111] rounded-lg p-6 hover:border-[#333] transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-[#525252] font-mono">{post.date}</span>
              <span className="text-xs text-[#525252]">·</span>
              <span className="text-xs text-[#525252]">{post.readTime}</span>
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">{post.title}</h2>
            <p className="text-sm text-[#a3a3a3] leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
