import type { ServerResponse } from "http";
import type { Request } from "polka";
import { createFeed } from "../utils/server/createFeed";

export function get(_req: Request, res: ServerResponse) {
  const feed = createFeed("atom", "atom");

  res.writeHead(200, {
    "Content-Type": "application/atom+xml",
  });

  res.end(feed.atom1());
}
