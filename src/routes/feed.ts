import type { ServerResponse } from "http";
import type { Request } from "polka";
import { createFeed } from "../utils/server/createFeed";

export function get(_req: Request, res: ServerResponse) {
  const feed = createFeed("json", "feed");

  res.writeHead(200, {
    "Content-Type": "application/feed+json",
  });

  res.end(feed.json1());
}
