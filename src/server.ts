import * as sapper from "@sapper/server";
import compression from "compression";
import polka from "polka";
import sirv from "sirv";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    (sapper.middleware() as unknown) as polka.Middleware
  )
  .listen(PORT, (err: any) => {
    if (err) {
      console.log("error", err);
    }
  });
