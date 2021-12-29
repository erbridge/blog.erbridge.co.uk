import * as sapper from "@sapper/server";
import compression from "compression";
import type { ListenCallback, Middleware } from "polka";
import polka from "polka";
import sirv from "sirv";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  .use(
    compression({ threshold: 0 }) as unknown as Middleware,
    sirv("static", { dev }),
    sapper.middleware() as unknown as Middleware
  )
  .listen(PORT, ((err: any) => {
    if (err) {
      console.log("error", err);
    }
  }) as ListenCallback);
