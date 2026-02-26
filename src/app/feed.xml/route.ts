export async function GET() {
  const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>AgentBolt Blog</title>
  <subtitle>AI operator teams for businesses</subtitle>
  <link href="https://agentbolt.ai/feed.xml" rel="self"/>
  <link href="https://agentbolt.ai"/>
  <id>https://agentbolt.ai/</id>
  <updated>2026-02-25T00:00:00Z</updated>
  <author>
    <name>Boyce Poleon Jr</name>
    <email>boyce@agentbolt.ai</email>
  </author>
  <entry>
    <title>Why I Built an 8-Agent AI Team Instead of Hiring</title>
    <link href="https://agentbolt.ai/blog/why-i-built-ai-team"/>
    <id>https://agentbolt.ai/blog/why-i-built-ai-team</id>
    <updated>2026-02-25T00:00:00Z</updated>
    <summary>I was working 16-hour days running an esports org and a full-time dev job. Then I built a team of AI operators that changed everything.</summary>
  </entry>
</feed>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
  });
}
