# Cache Proxy Server

Um servidor Cache Proxy escrito em TypeScript, utilizando [Node.js](https://nodejs.org/). Este servidor ajuda a cachear eficientemente as respostas de APIs, melhorando o desempenho e reduzindo a carga em serviços externos.

## Conteúdo

- [Instalação](#instalação)
- [Executando o Servidor](#executando-o-servidor)
- [Usando Redis](#usando-redis)
- [Licença](#licença)

## Instalação

Para começar com este projeto, você precisará ter [Node.js](https://nodejs.org/) instalado. Você pode então instalar as dependências utilizando o Yarn. Certifique-se de ter Yarn instalado visitando [Yarn](https://classic.yarnpkg.com/lang/en/).

### Clonar o Repositório

1. Abra seu terminal e execute os seguintes comandos:

    ```bash
    mkdir Proxy-Server
    cd Proxy-Server
    git clone https://github.com/Lucas-Brites1/cache-proxy-cli
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd cache-proxy-cli
    ```

3. Instale as dependências:

    ```bash
    yarn install
    ```

## Usando Redis

Este projeto oferece flexibilidade para utilizar Redis ou Node-Cache para cacheamento.

**Ao escolher usar Redis, será necessário configurar o servidor Redis em sua máquina. As vantagens do Redis são que ele simula um cache que não reseta após a execução. Em contrapartida, o Node-Cache não requer instalações adicionais, mas as informações não persistem após o fim da execução.**

### Opção 1: Usando Redis

*Se você preferir usar Node-Cache, simplesmente ignore a configuração do Redis e o servidor irá utilizá-lo automaticamente.*

Para usar Redis como cache persistente, siga os passos abaixo:

1. **Instale Redis**: Você pode baixar e instalar Redis pelo site oficial [Redis](https://redis.io/).

2. **Inicie o servidor Redis**: Após a instalação, inicie o servidor Redis:

    ```bash
    redis-server
    ```

3. **Verifique se o Redis está rodando corretamente**: Execute o seguinte comando:

    ```bash
    redis-cli ping
    ```

    Se o Redis estiver rodando, ele deve responder com `PONG`.

4. **Configure as variáveis de ambiente**: No arquivo `.env` do projeto, substitua `<your_redis_ip_here>` e `<your_redis_port_here>` pelo IP e porta do seu servidor Redis.

    - Se estiver rodando o Redis localmente, o IP padrão é `127.0.0.1` e a porta padrão é `6379`.

## Executando o Servidor

***Se você escolheu Redis como cache manager, siga os passos abaixo:***

1. **Executando o Servidor com Redis**:

    ```bash
    yarn start -- CACHE-REDIS -p <port_number> -u <url_to_fetch_information>
    ```

    Exemplo:

    ```bash
    yarn start -- CACHE-REDIS -p 3333 -u https://dummyjson.com/test
    ```

2. **Limpando o Cache**:
   - Limpar todo o cache:

     ```bash
     yarn start -- CLEAR-REDIS
     ```

   - Limpar uma chave específica:

     ```bash
     yarn start -- CLEAR-REDIS -k <url_to_clear>
     ```

***Se você escolheu Node-Cache como cache manager, siga os passos abaixo:***

1. **Executando o Servidor com Node-Cache**:

    ```bash
    yarn start -- CACHE-NODE -p <port_number> -u <url_to_fetch_information>
    ```

    Exemplo:

    ```bash
    yarn start -- CACHE-NODE -p 3333 -u https://dummyjson.com/test
    ```

2. **Limpando o Cache**:
   - Limpar todo o cache:

     ```bash
     yarn start -- CLEAR-NODE
     ```

   - Limpar uma chave específica:

     ```bash
     yarn start -- CLEAR-NODE -k <url_to_clear>
     ```

Depois, verifique `http://localhost:3333/` e veja os logs no console. Para ver a resposta da API, você pode usar ferramentas como [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/), ou [Bruno](https://www.usebruno.com/).

## Usando Ferramentas de Teste de API

- **Insomnia**:
    1. Baixe e instale [Insomnia](https://insomnia.rest/download).
    2. Abra o Insomnia e crie uma nova requisição.
    3. Defina o método como `GET` e insira a URL (ex.: `http://localhost:3333/`).
    4. Clique em `Send` para ver a resposta.

- **Postman**:
    1. Baixe e instale [Postman](https://www.postman.com/downloads/).
    2. Abra o Postman e crie uma nova requisição.
    3. Defina o método como `GET` e insira a URL (ex.: `http://localhost:3333/`).
    4. Clique em `Send` para ver a resposta.

- **Bruno**:
    1. Baixe e instale [Bruno](https://www.usebruno.com/download).
    2. Abra o Bruno e crie uma nova requisição.
    3. Defina o método como `GET` e insira a URL (ex.: `http://localhost:3333/`).
    4. Clique em `Send` para ver a resposta.
