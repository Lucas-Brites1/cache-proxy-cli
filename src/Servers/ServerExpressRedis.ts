import express, { Express } from "express";
import { MiddlewareCacheRedis } from "../Middlewares/RedisMiddleware";
import { Cacher } from "../Controllers/RedisCacheController";

const app: Express = express();

export const Server = async (PORT: number, URL: string) => {
  app.use(MiddlewareCacheRedis(URL));
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and making requests to the URL: ${URL}!`);
  });
}

export const Clear = async (Key?: string): Promise<void> => {
  try {
    const cache = new Cacher();
    if (Key) return cache.clearCache(Key);
    return cache.clearCache();
  } catch (error) {
    console.error("Error trying to clear cache.");
  }
}
