// Future: MCP Streamable HTTP endpoint
// Agents will connect here to:
// - tools/subscribe_newsletter: Sign up an email for blog notifications
// - tools/get_guides: Download guide content as markdown
// - tools/get_blog_posts: List and read blog posts
// - tools/book_discovery_call: Get booking link
// - resources/site_structure: Full site map and content index
// - resources/latest_posts: Most recent blog posts
// - resources/guide_catalog: Available guides with descriptions
//
// Protocol: MCP Streamable HTTP (JSON-RPC over HTTP POST/GET with SSE)
// Spec: https://modelcontextprotocol.io/specification/2025-11-25/basic/transports

export async function POST() {
  return Response.json(
    { error: "MCP endpoint coming soon. Use /llms.txt for agent-readable content." },
    { status: 501 }
  );
}

export async function GET() {
  return Response.json(
    { name: "agentbolt", version: "0.1.0", status: "coming-soon" },
    { status: 200 }
  );
}
