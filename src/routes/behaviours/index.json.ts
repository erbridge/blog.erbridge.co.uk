import type { ServerResponse } from "http";
import type { Request } from "polka";
import { getAllPosts } from "../../utils/server/getAllPosts";

export function get(_req: Request, res: ServerResponse) {
  const posts = getAllPosts("behaviours");

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(posts));
}
