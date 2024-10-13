import { Response, Request, NextFunction } from "express";
import { NodeCacher } from "../Controllers/NodeCacheController";
import axios from "axios";

const nodeCache = new NodeCacher();

export const MiddlewareCacheNode = (url: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = await nodeCache.fetchData(url);
    if (data) {
      console.log("Found in cache {Node}!");
      res.set("X-Cache", "HIT");
      res.status(200).send(data);
    } else {
      try {
        const fetchApiData = await axios.get(url);
        nodeCache.insertData(url, fetchApiData.data);
        console.log("Not found in cache {Node}...");
        res.set("X-Cache", "MISS");
        res.status(200).send(fetchApiData.data);
      } catch (error) {
        console.error(`Error trying to fetch information from URL: `, url);
        res.status(500).send("Error fetching data.");
      }
    }

    next();
  };
}
