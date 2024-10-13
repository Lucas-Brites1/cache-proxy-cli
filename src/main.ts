import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { Server, Clear } from "./Servers/ServerExpressRedis";
import { ServerNode, ClearNode } from "./Servers/ServerNodeCache";

const argv = yargs(hideBin(process.argv))
.command("CACHE-REDIS", "Start the server and Redis to cache information.", {
  port: { type: "number", alias: "p", demandOption: true },
  url: { type: "string", alias: "u", demandOption: true },
},
(argv) => {
  const { port, url } = argv;
  // Start server with local Redis:
  Server(port, url);
})
.command("CACHE-NODE", "Start the server with node cache.", {
  port: { type: "number", alias: "p", demandOption: true },
  url: { type: "string", alias: "u", demandOption: true }
}, (argv) => {
  const { port, url } = argv;
  // Start server with node cache:
  ServerNode(port, url);
})
.command("CLEAR-REDIS", "Clear cache from the Redis server.", {
  key: { type: "string", alias: "k", demandOption: false }
},
(argv) => {
  const { key } = argv;
  Clear(key);
})
.command("CLEAR-NODE", "Clear cache from the node-cache server.", {
  key: { type: "string", alias: "k", demandOption: false }
},
(argv) => {
  const { key } = argv;
  ClearNode(key);
})
.demandCommand()
.help()
.parse();
