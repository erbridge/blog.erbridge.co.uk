import { walkSync } from "@nodelib/fs.walk";
import frontMatter from "front-matter";
import fs from "fs";
import type { ServerResponse } from "http";
import path from "path";
import type { Request } from "polka";

const ROUTES_ROOT_PATH = path.resolve("src", "routes");
const POST_ROOT_PATH = path.resolve(ROUTES_ROOT_PATH, "inclusivity");
const ALL_PATH_SEP = new RegExp(path.sep, "g");

const getAllPosts = () =>
  walkSync(POST_ROOT_PATH)
    .filter((entry) => entry.name.endsWith(".sveltemd"))
    .map((entry) => {
      const file = fs.readFileSync(entry.path, "utf-8");
      const { attributes } = frontMatter<{
        title: string;
        subtitle?: string;
        date: string;
      }>(file);

      const slug = path
        .relative(ROUTES_ROOT_PATH, entry.path)
        .replace(new RegExp(`${path.extname(entry.path)}$`), "")
        .replace(ALL_PATH_SEP, "/");

      return { ...attributes, slug };
    });

export function get(_req: Request, res: ServerResponse) {
  const posts = getAllPosts();

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(posts));
}
