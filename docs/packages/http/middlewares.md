---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# Middlewares
A Middleware is a function which is called before the route handler and gets executed for every incoming connection. In GalataJS, they can be defined in three ways:

## In the Route Scope

The middleware is bound to a specific route and is only executed when the route is visited.

```ts
import {createApp} from "@galatajs/app";
import {createHttpServer, createRouter, createRoute, Request, Response, NextFunction} from "@galatajs/http";

const app = createApp<App>();
const server = createHttpServer();
app.register(server.build());

const router = createRouter({prefix: 'product'});

const checkProductId = (req: Request, res: Response, next: NextFunction) => {
  if (!!req.params.productId) return next();
  res.notFound("Product ID is required");
}

//binding the middleware to the route
router.get(":productId", checkProductId, (req: Request, res: Response, next: NextFunction) => {
  res.success("Product found");
});

app.start();
```

## In the Router Scope

The middleware is bound to the router using the `router.use()` function.

```ts
import {createApp} from "@galatajs/app";
import {createHttpServer, createRouter, createRoute, Request, Response, NextFunction} from "@galatajs/http";

const app = createApp<App>();
const server = createHttpServer();
app.register(server.build());

const router = createRouter({prefix: 'product'});

const checkProductId = (req: Request, res: Response, next: NextFunction) => {
  if (!!req.params.productId) return next();
  res.notFound("Product ID is required");
}

router.get(":productId", (req: Request, res: Response, next: NextFunction) => {
  res.success("Product found");
});

//binding the middleware to the router
router.use(checkProductId);

app.start();
```

## In the Global Scope

The middleware is bound to the server using the `server.use()`function and is executed everytime the server recieves a request.

```ts
import {createApp} from "@galatajs/app";
import {createHttpServer, createRouter, createRoute, Request, Response, NextFunction} from "@galatajs/http";

const app = createApp<App>();
const server = createHttpServer();
app.register(server.build());

const router = createRouter({ prefix: 'product' });

const checkProductId = (req: Request, res: Response, next: NextFunction) => {
  if (!!req.params.productId) return next();
  res.notFound("Product ID is required");
}

// http://localhost:3000/product/123
router.get(":productId", (req: Request, res: Response, next: NextFunction) => {
  res.success("Product found");
});

//binding the middleware to the server
server.use(checkProductId);

app.start();
```



