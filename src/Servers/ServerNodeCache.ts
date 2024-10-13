import express, { Express } from "express";
import { MiddlewareCacheNode } from "../Middlewares/NodeMiddleware";
import { NodeCacher } from "../Controllers/NodeCacheController";

const app: Express = express();

export const ServerNode = (port: number, url: string) => {
  app.use(MiddlewareCacheNode(url));
  
  app.listen(port, () => {
    console.log(`Server is online, using Node-Cache, port: ${port}.`);
  });
}

export const ClearNode = (Key?: string): void => {
  try {
    const nodeCache = new NodeCacher(); 
    if (Key) {
      nodeCache.clearCache(Key);
    } else {
      nodeCache.clearCache();
    }
  } catch (error) {
    console.error(`Error trying to clear Node-Cache: ${error}`);
  }
}
