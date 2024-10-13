# Cache Proxy Server

A Cache Proxy Server written in TypeScript, using Node.js and supporting caching with Redis or Node-Cache. This server helps to efficiently cache API responses, improving performance and reducing load on external services.

## Table of Contents
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Using Redis](#using-redis)
- [Commands](#commands)
- [License](#license)

## Installation

To get started with this project, you'll need to have [Node.js](https://nodejs.org/) installed. You can then install the dependencies using Yarn. Make sure you have Yarn installed by visiting [Yarn](https://classic.yarnpkg.com/lang/en/).

### Clone the Repository
1. Open your terminal and run the following commands:
   ```bash
   mkdir Proxy-Server
   cd Proxy-Server
   git clone https://github.com/Lucas-Brites1/cache-proxy-cli
2. Navigate to the Project Directory:

   ```bash
   cd cache-proxy-cli

3. Install Dependencies: Run the following command to install the required dependencies:

   ```bash
   yarn install
   
## Using Redis
   
   This project offers the flexibility to use either Redis or Node-Cache lib for caching:

   **Option 1: Using Redis
   To use Redis as persistent cache for this server, follow these steps:

   ###Install Redis: You can download and install Redis from the official [Redis](https://redis.io/) website.

Start Redis Server: After installation, start the Redis server by running:

bash
Copiar código
redis-server
Ensure Redis is Running Correctly: Execute the following command:

bash
Copiar código
redis-cli ping
If Redis is running, it should respond with PONG.

Set Environment Variables: Go to the .env file in the project and replace the placeholders <your_redis_ip_here> and <your_redis_port_here> with your Redis server's IP address and port number, respectively. To find your Redis server's IP address and port:

If you are running Redis locally, the default IP address is 127.0.0.1 and the default port is 6379.
If you are using a remote Redis server, consult your service provider's documentation or management interface to obtain the correct IP address and port.
