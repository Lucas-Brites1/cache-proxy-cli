import axios from "axios";
import { Cacher } from "../Controllers/RedisCacheController";
import { Request, Response, NextFunction } from "express";

export const MiddlewareCacheRedis = (URL: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const KEY = URL;
    const cache = new Cacher();
    const data = await cache.fetchData(KEY);

    if (data) {
      console.log("Found in cache!");
      res.set("X-Cache", "HIT");
      res.status(200).send(data);
    } else {
      try {
        console.log("Not found in cache");
        res.set("X-Cache", "MISS");
        let response = await axios.get(KEY);
        response = response.data;
        await cache.insertData(KEY, response);
        res.status(200).send(response);
      } catch (error) {
        console.error(`Error trying to make request: `, error);
        res.status(500).send("Request error: " + `${JSON.stringify(error)}`);
      }
    }

    next();
  };
}
