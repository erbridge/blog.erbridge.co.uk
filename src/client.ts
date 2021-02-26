import "@erbridge/website-theme/stylesheets/global.css";
import * as sapper from "@sapper/app";
import "normalize.css";
import "prismjs";

sapper.start({
  target: document.querySelector("#sapper"),
});
