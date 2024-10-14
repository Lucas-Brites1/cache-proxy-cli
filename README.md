# Cache Proxy Server

A Cache Proxy server written in TypeScript, using [Node.js](https://nodejs.org/). This server helps efficiently cache API responses, improving performance and reducing load on external services.

## Table of Contents

- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Using Redis](#using-redis)
- [License](#license)

## Installation

To get started with this project, you will need to have [Node.js](https://nodejs.org/) installed. You can then install the dependencies using Yarn. Make sure you have Yarn installed by visiting [Yarn](https://classic.yarnpkg.com/lang/en/).

### Clone the Repository

1. Open your terminal and run the following commands:

    ```bash
    mkdir Proxy-Server
    cd Proxy-Server
    git clone https://github.com/Lucas-Brites1/cache-proxy-cli
    ```

2. Navigate to the project directory:

    ```bash
    cd cache-proxy-cli
    ```

3. Install the dependencies:

    ```bash
    yarn install
    ```

## Using Redis

This project offers flexibility to use either Redis or Node-Cache for caching.

**If you choose to use Redis, you will need to set up the Redis server on your machine. The advantages of Redis are that it simulates a cache that does not reset after execution. In contrast, Node-Cache requires no additional installations but does not persist information after the end of execution.**

### Option 1: Using Redis

*If you prefer to use Node-Cache, simply ignore the Redis setup, and the server will automatically use it.*

To use Redis as persistent cache, follow the steps below:

1. **Install Redis**: You can download and install Redis from the official website [Redis](https://redis.io/).

2. **Start the Redis server**: After installation, start the Redis server:

    ```bash
    redis-server
    ```

3. **Check if Redis is running correctly**: Run the following command:

    ```bash
    redis-cli ping
    ```

    If Redis is running, it should respond with `PONG`.

4. **Set up environment variables**: In the project's `.env` file, replace `<your_redis_ip_here>` and `<your_redis_port_here>` with the IP and port of your Redis server.

    - If running Redis locally, the default IP is `127.0.0.1` and the default port is `6379`.

## Running the Server

***If you chose Redis as the cache manager, follow the steps below:***

1. **Running the Server with Redis**:

    ```bash
    yarn start -- CACHE-REDIS -p <port_number> -u <url_to_fetch_information>
    ```

    Example:

    ```bash
    yarn start -- CACHE-REDIS -p 3333 -u https://dummyjson.com/test
    ```

2. **Clearing the Cache**:
   - Clear the entire cache:

     ```bash
     yarn start -- CLEAR-REDIS
     ```

   - Clear a specific key:

     ```bash
     yarn start -- CLEAR-REDIS -k <url_to_clear>
     ```

***If you chose Node-Cache as the cache manager, follow the steps below:***

1. **Running the Server with Node-Cache**:

    ```bash
    yarn start -- CACHE-NODE -p <port_number> -u <url_to_fetch_information>
    ```

    Example:

    ```bash
    yarn start -- CACHE-NODE -p 3333 -u https://dummyjson.com/test
    ```

2. **Clearing the Cache**:
   - Clear the entire cache:

     ```bash
     yarn start -- CLEAR-NODE
     ```

   - Clear a specific key:

     ```bash
     yarn start -- CLEAR-NODE -k <url_to_clear>
     ```

After that, check `http://localhost:3333/` and see the logs in the console. To see the API response, you can use tools like [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/), or [Bruno](https://www.usebruno.com/).

## Using API Testing Tools

- **Insomnia**:
    1. Download and install [Insomnia](https://insomnia.rest/download).
    2. Open Insomnia and create a new request.
    3. Set the method to `GET` and enter the URL (e.g., `http://localhost:3333/`).
    4. Click `Send` to see the response.

- **Postman**:
    1. Download and install [Postman](https://www.postman.com/downloads/).
    2. Open Postman and create a new request.
    3. Set the method to `GET` and enter the URL (e.g., `http://localhost:3333/`).
    4. Click `Send` to see the response.

- **Bruno**:
    1. Download and install [Bruno](https://www.usebruno.com/download).
    2. Open Bruno and create a new request.
    3. Set the method to `GET` and enter the URL (e.g., `http://localhost:3333/`).
    4. Click `Send` to see the response.
