
# Cache  Proxy  Server

A  Cache  Proxy  Server  written  in  TypeScript,  using  [Node.js](https://node.js/?form=MG0AV3).  This  server  helps  to  efficiently  cache  API  responses,  improving  performance  and  reducing  load  on  external  services.

## Contents

-   [Installation](#installation)
    
-   [Running the Server](#running-the-server)
    
-   [Using Redis](#using-redis)
    
-   [License](#license)
    

## Installation

To  get  started  with  this  project,  you'll  need  to  have  [Node.js](https://nodejs.org/?form=MG0AV3)  installed.  You  can  then  install  the  dependencies  using  Yarn.  Make  sure  you  have  Yarn  installed  by  visiting  [Yarn](https://classic.yarnpkg.com/lang/en/?form=MG0AV3).


### Clone  the  Repository

1.  Open  your  terminal  and  run  the  following  commands:
    
    
    
    
    ```bash
    mkdir Proxy-Server
    cd Proxy-Server
    git clone https://github.com/Lucas-Brites1/cache-proxy-cli
    
    ```
    
2.  Navigate  to  the  Project  Directory:
    
   
    

    
    ```bash
    cd cache-proxy-cli
    
    ```
    
3.  Install  Dependencies:
   Run  the  following  command  to  install  the  required  dependencies
    
    

    
    ```bash
    yarn install
    
    ```
    

## Using Redis

This  project  offers  the  flexibility  to  use  either  Redis  or  Node-Cache  for  caching.

**When  choosing  to  run  the  program  with  Redis,  it  requires  a  bit  more  setup  as  you  will  need  to  configure  the  Redis  server  on  your  local  machine.  The  advantages  of  using  Redis  are  that  it  simulates  a  cache  that  does  not  reset  its  information  after  execution  ends.  In  contrast,  if  you  choose  Node-Cache,  no  additional  installations  are  needed,  but  the  information  will  not  persist  after  the  execution  finishes.**


### Option  1:  Using  Redis
*If you prefer to use Node-Cache, simply skip the Redis setup, and the server will automatically fall back to using it.*


To  use  Redis  as  persistent  cache  for  this  server,  follow  these  steps:

1.  **Install  Redis**:  You  can  download  and  install  Redis  from  the  official  [Redis website](https://redis.io/?form=MG0AV3).
    
2.  **Start  Redis  Server**:  After  installation,  start  the  Redis  server  by  running:
    
   
    

    
    ``` bash
    redis-server
    
    ```
    
3.  **Ensure  Redis  is  Running  Correctly**:  Execute  the  following  command:
    
 
    
    
    ``` bash
    redis-cli ping
    
    ```
    
    If  Redis  is  running,  it  should  respond  with  `PONG`.
    
4.  **Set  Environment  Variables**:  Go  to  the  `.env`  file  in  the  project  and  replace  the  placeholders  `<your_redis_ip_here>`  and  `<your_redis_port_here>`  with  your  Redis  server's  IP  address  and  port  number,  respectively.
    
    -   If  you  are  running  Redis  locally,  the  default  IP  address  is  `127.0.0.1`  and  the  default  port  is  `6379`.
        
    -   If  you  are  using  a  remote  Redis  server,  consult  your  service  provider's  documentation  or  management  interface  to  obtain  the  correct  IP  address  and  port.
        

## Running the Server

***If  you  choose  Redis  as  cache  manager  for  testing  this  project,  follow  the  steps  ahead:***

1.  **Running  the  Server**:
    ***REDIS***

	 	   
    ```bash
    yarn start -- CACHE-REDIS -p <port_number> -u <url_to_fetch_information>
    ```
    
    After  that,  you  just  need  to  open  your  localhost  at  the  port  you  specified.  For  example:
    
   
	     
    ```bash
    yarn start -- CACHE-REDIS -p 3333 -u https://dummyjson.com/test
    ```

3. **Clear Cache**:
   1. Clear all cache:

   ```bash
   yarn start -- CLEAR-REDIS
   ```

   2. Clear a specific key:
  
   ```bash
   yarn start -- CLEAR-REDIS -k <url_to_clear>
   ```

***If  you  choose  Node Cache  as  cache  manager  for  testing  this  project,  follow  the  steps  ahead:***

1.  **Running  the  Server**:
	***NODE CACHE***

	   ```bash
	   yarn start -- CACHE-NODE -p <port_number> -u <url_to_fetch_information>
	   ```

After  that,  you  just  need  to  open  your  localhost  at  the  port  you  specified.  For  example:
	     
	   ```bash
	   yarn start -- CACHE-NODE -p 3333 -u https://dummyjson.com/test
	   ```

2. Clear a specific key:
   1. Clear all cache:
  
	   ```bash
	   yarn start -- CLEAR-NODE
	   ```

   2. Clear a specific key:
  
	   ```bash
	   yarn start -- CLEAR-NODE -k <url_to_clear>
	   ```
    
Then  check  `http://localhost:3333/`  and  see  the  logs  in  the  console.  If  you  want  to  see  the  response  from  the  API,  you  can  use  tools  like  [Insomnia](https://insomnia.rest/?form=MG0AV3),  [Postman](https://www.postman.com/?form=MG0AV3),  or  [Bruno](https://www.usebruno.com/?form=MG0AV3).
    If you don’t know how to use API Testing Tools [click here](#using-api-testing-tools).
    

## Using API Testing Tools


-   **Insomnia**:
    
    1.  Download  and  install  [Insomnia](https://insomnia.rest/download/?form=MG0AV3).
        
    2.  Open  Insomnia  and  create  a  new  request.
        
    3.  Set  the  request  method  to  `GET`  and  enter  the  URL  (e.g.,  `http://localhost:3333/`).
        
    4.  Click  `Send`  to  see  the  response.
        
-   **Postman**:
    
    1.  Download  and  install  [Postman](https://www.postman.com/downloads/?form=MG0AV3).
        
    2.  Open  Postman  and  create  a  new  request.
        
    3.  Set  the  request  method  to  `GET`  and  enter  the  URL  (e.g.,  `http://localhost:3333/`).
        
    4.  Click  `Send`  to  see  the  response.
        
-   **Bruno**:
    
    1.  Download  and  install  [Bruno](https://www.usebruno.com/download?form=MG0AV3).
        
    2.  Open  Bruno  and  create  a  new  request.
        
    3.  Set  the  request  method  to  `GET`  and  enter  the  URL  (e.g.,  `http://localhost:3333/`).
        
    4.  Click  `Send`  to  see  the  response.
