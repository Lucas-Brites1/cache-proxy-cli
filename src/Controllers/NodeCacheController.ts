import NodeCache from "node-cache";

export class NodeCacher {
  private cache: NodeCache;
  
  constructor() {
    this.cache = new NodeCache({ stdTTL: 120, checkperiod: 180 });
  }

  insertData(key: string, value: unknown): boolean {
    try {
      this.cache.set(key, JSON.stringify(value));
      console.log("Data inserted successfully {Node-Cache}.");
      return true;
    } catch (error) {
      console.error(`Error while trying to insert new data {Node-Cache}`, error);
      return false;
    }
  }

  fetchData(key: string): unknown | null {
    try {
      const value = this.cache.get(key);
      if (value) {
        console.log(`Data found in key ${key}!`);
        return JSON.parse(value as string);
      }
      console.log(`Data not found in key ${key}`);
      return null;
    } catch (error) {
      console.error(`Error while fetching data {Node-Cache}`);
      return null;
    }
  }

  clearCache(key?: string): boolean {
    try {
      if (key) {
        this.cache.del(key);
        console.log(`Key: ${key} deleted successfully {Node-Cache}.`);
      } else {
        this.cache.flushAll();
        console.log(`All data deleted successfully {Node-Cache}.`);
      }
      return true;
    } catch (error) {
      console.error(`Error while trying to delete cache information {Node-Cache}.`);
      return false;
    }
  }
}
