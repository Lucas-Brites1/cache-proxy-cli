import { RedisClientType, createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

class Cacher {
  private IP: string;
  private client: RedisClientType;

  constructor() {
    this.IP = process.env.REDIS_IP as string;
    this.client = createClient({
      url: `redis://${this.IP}:${process.env.REDIS_PORT}`
    });

    this.client.on("error", (error) => {
      console.error("Error instantiating Cacher from Redis Server:", error);
    });
  }

  async connect(): Promise<void> {
    try {
      if (!this.client.isOpen) {
        await this.client.connect();
      }
    } catch (error) {
      console.error("Error trying to connect to Redis:", error);
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this.client.isOpen) {
        await this.client.disconnect();
      }
    } catch (error) {
      console.error("Error trying to disconnect from Redis:", error);
    }
  }

  async fetchData<T>(key: string): Promise<T | null> {
    await this.connect();
    try {
      const result = await this.client.get(key);
      if (result) {
        return JSON.parse(result) as T;
      }
      return null;
    } catch (error) {
      console.error(`Error fetching cache data {KEY ${key}}:`, error);
      return null;
    } finally {
      await this.disconnect();
    }
  }

  async insertData(key: string, value: unknown): Promise<void> {
    await this.connect();
    try {
      await this.client.set(key, JSON.stringify(value));
      console.log(`Data inserted into cache for key ${key}.`);
    } catch (error) {
      console.error(`Error inserting data into cache {KEY ${key}}:`, error);
    } finally {
      await this.disconnect();
    }
  }

  async clearCache(key?: string): Promise<void> {
    await this.connect();
    try {
      if (!key) {
        await this.client.flushAll();
        console.log("Entire cache cleared.");
      } else {
        await this.client.del(key);
        console.log(`Key ${key} deleted from cache.`);
      }
    } catch (error) {
      console.error(`Error deleting key ${key}:`, error);
    } finally {
      await this.disconnect();
    }
  }
}

export { Cacher };
