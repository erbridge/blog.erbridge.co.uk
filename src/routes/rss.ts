import type { ServerResponse } from "http";
import type { Request } from "polka";
import { createFeed } from "../utils/server/createFeed";

export function get(_req: Request, res: ServerResponse) {
  const feed = createFeed("rss2", "rss");

  res.writeHead(200, {
    "Content-Type": "application/rss+xml",
  });

  res.end(feed.rss2());
}
