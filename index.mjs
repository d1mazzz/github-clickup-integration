import http from "node:http";
import { handler } from "./handler.mjs";
import { onApplicationBootstrap } from "./onApplicationBootstrap/index.mjs";

const server = http.createServer(handler);

const PORT = process.env.NODE === "test" ? 4000 : process.env.PORT;

if (!PORT) {
  console.error("Http server port was not provided");
  process.exit(1);
}

server
  .listen(PORT, async () => {
    console.log(`server is listening on: ${PORT}`);
    await onApplicationBootstrap().then(
      (res) => console.log("Application bootstrapped successfully"),
      (rej) => {
        console.log("Cannot bootstrap application", { rej });
        process.exit(2);
      }
    );
  })
  .on("error", ({ error, reason }) => {
    console.log("Server error: ", error);
    reason.end("Error");
  });
