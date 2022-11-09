---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# Http Package

::: tip Documentation Not Yet Completed

- This document is under construction.

:::

::: warning Warning

- This document assumes you have read the document on how to setup your GalataJS project.
- IF you haven't read it yet, [please click here](../../introduction/README.md/#setup-your-galatajs-project) to read the document on how to setup your project . 

:::

This package is the main http package of the galatajs framework. It supports HTTP/1.1, HTTP/1.2 and all veriosn HTTPS supports. It also extends NodeJS's http types, so they are overwritable.

What does the http package include?
- [``Installation``](./#Installation)
- [``Middlewares``](./middlewares.md)
- [``The Request Object``](./request.md)
- [``Customizing Package Settings``](./customizing-package-settings.md)



## Installation
To install the http package:

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash:no-line-numbers
yarn add @galatajs/http
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash:no-line-numbers
npm install @galatajs/http
```

  </CodeGroupItem>
</CodeGroup>

## Usage

```ts
import {createApp, App} from '@galatajs/app';
import {createHttpServer, createRouter, createRoute, Request, Response, NextFunction} from "@galatajs/http";

const app = createApp<App>();
const server = createHttpServer();

const router = createRouter({prefix: 'api'});
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.success('Hello World!');
});

app.register(server.build());
app.start();
```
This app starts a server and responds with “Hello World!” for requests to the URL `127.0.0.1:3000/api` or route. For every other path, it will respond with a 404 Not Found.

## Using Versioned Routes
You can specify the version number when creating an instance of a Router.

```ts
import {createApp} from "@galatajs/app";
import {createHttpServer, createRouter, createRoute, Request, Response, NextFunction} from "@galatajs/http";

const app = createApp<App>();
const server = createHttpServer();
app.register(server.build());

//setting the version to the 2
const router = createRouter({ prefix: 'product', version: 2 });

const checkProductId = (req: Request, res: Response, next: NextFunction) => {
  if (!!req.params.productId) return next();
  res.notFound("Product ID is required");
}

// http://localhost:3000/product/v2/123
router.get(":productId", (req: Request, res: Response, next: NextFunction) => {
  res.success("Product found");
});

server.use(checkProductId);

app.start();
```