export async function GET() {
  const content = `# AgentBolt by Boyce Poleon Jr

> AI operator team infrastructure — custom multi-agent systems deployed in 3-5 days for businesses. Built on OpenClaw, self-hosted, zero vendor lock-in.

AgentBolt builds and deploys teams of specialized AI operators that manage business operations: email triage, calendar management, social media, security audits, code review, and more. Each operator has its own role, tools, security sandbox, and personality.

## Pages

- [Home](https://agentbolt.ai/home.md): Overview of services, operator team, and social proof
- [About](https://agentbolt.ai/about.md): Background, timeline, and philosophy
- [Services](https://agentbolt.ai/services.md): Pricing tiers and add-ons
- [How It Works](https://agentbolt.ai/how-it-works.md): 4-phase deployment process and architecture
- [My Stack](https://agentbolt.ai/stack.md): Infrastructure, tools, and cost breakdown
- [Contact](https://agentbolt.ai/contact.md): Discovery call booking and email

## Guides

- [Set Up Your First AI Operator](https://agentbolt.ai/guides/first-ai-operator.md): Step-by-step deployment guide

## Blog

- [Why I Built an 8-Agent AI Team Instead of Hiring](https://agentbolt.ai/blog/why-i-built-ai-team.md): From 16-hour days to CEO mode

## Optional

- [RSS Feed](https://agentbolt.ai/feed.xml): Blog post feed for subscriptions
- [Sitemap](https://agentbolt.ai/sitemap.xml): Full sitemap
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
