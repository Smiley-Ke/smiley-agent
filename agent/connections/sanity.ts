import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sanity.io",
  description: "Fetch and manage structured content.",
  auth: connect("mcp.sanity.io/prj_RUcMkj0PXwcWpGIeLjirkS3pNSS5"),
});
