---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# MongoDB Package

::: tip Documentation Not Yet Completed

- This document is under construction and its contents are subject to change.

:::

<span class="text-primary">GalataJS</span> is a flexible and scalable framework and maintains this flexibility in the database part as well. You can use whatever database you want, the database driver you want, and the nodejs orm package you want.

In this document, we will explain how you can use [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) and <span class="text-primary">GalataJS</span> project together through modules.

## Installation

The `galatajs/mongodb` package was developed to integrate the mongodb driver into <span class="text-primary">GalataJS</span>. It does not bring the driver as built-in, it has to be installed externally.

<code-group>

<code-group-item title="NPM" active>

```bash:no-line-numbers
npm install --save @galatajs/mongodb mongodb
```

</code-group-item>

<code-group-item title="YARN">

```bash:no-line-numbers
yarn add @galatajs/mongodb mongodb
```

</code-group-item>

</code-group>

## Registration

We need to tell our <span class="text-primary">GalataJS</span> application  that we are using MongoDB. This is necessary for us to be able to use the repository within the modules, to provide the collections dynamically to our modules, and to be able to connect to the database when the application is started.

We should write the following codes in the main file of our project


<div class="prefer-typescript">

```typescript:no-line-numbers
// /main.ts
import { createMongodbApp } from "@galatajs/mongodb";

app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
```

When complete, it will look like this

```typescript:no-line-numbers
// /main.ts
import { createApp, App } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { createMongodbApp } from "@galatajs/mongodb";
import { mainModule } from "./src/main.module";

const app : App = createApp(mainModule);
app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
app.register(createHttpServer());

app.start();
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /main.js
import { createMongodbApp } from "@galatajs/mongodb";

app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
```

When complete, it will look like this

```javascript:no-line-numbers
// /main.js
import { createApp } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { createMongodbApp } from "@galatajs/mongodb";
import { mainModule } from "./src/main.module";

const app = createApp(mainModule);
app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
app.register(createHttpServer());

app.start();
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /main.js
const { createMongodbApp } = require("@galatajs/mongodb");

app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
```

When complete, it will look like this

```javascript:no-line-numbers
// /main.js
const { createApp } = require("@galatajs/app");
const { createHttpServer } = require("@galatajs/http");
const { createMongodbApp } = require("@galatajs/mongodb");
const { mainModule } = require("./src/main.module");

const app = createApp(mainModule);
app.register(createHttpServer());
app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);

app.start();
```

</div>

### Create a Entity

The MongoDB driver doesn't quite allow you to create schemas on the JavaScript side like you can with TypeORM and Mongoose.

<div class="prefer-typescript">

However, we will do this with the interface and we will not have any shortcomings, even if it looks a little difference.

MongoDB collections are generic and expect an interface that extends the Documents interface.

Here is a simple entity:

```typescript:no-line-numbers
// /src/product/product.entity.ts
import { Document, ObjectId } from "mongodb";

export interface Product {
  _id?: ObjectId;
  name: string;
  price: number;
}

export interface ProductSchema extends Document, Product {}
```


</div>


<div class="prefer-ecmascript prefer-commonjs">

So unfortunately you cannot create a schema in projects where you use JavaScript.

</div>

## Module Registration

To use our MongoDB Collections in our modules, we need to register them. <span class="text-primary">GalataJS</span> will automatically provide the required dependency for you.


We should create our `product.module` file as follows

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule } from "@galatajs/app";
import { registerCollection } from "@galatajs/mongodb";

export const productModule = createModule("product", {
  imports: [registerCollection("products")],
});

```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@galatajs/app";
import { registerCollection } from "@galatajs/mongodb";

export const productModule = createModule("product", {
  imports: [registerCollection("products")],
});
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createModule } = require("@galatajs/app");
const { registerCollection } = require("@galatajs/mongodb");

const productModule = createModule("product", {
  imports: [registerCollection("products")],
});

module.exports = {
    productModule
}
```

</div>

That's it! Now we will see a big advantage of working with modules. We can manage each of our object more easily. And the modules provide the necessary dependencies for us! 

How Does? Continue reading...

## Create Product Service

We registered our Mongo Collection, 
Why? A simple question. Of course to use. 

We will use our Collections with repositories. And we should use our repositories inside services. It should not be moved to the gateway and controller in any way.

Our service file using our product entity would probably look like this


<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/product/product.service.ts
import { Collection, InsertOneResult, ObjectId } from "mongodb";
import { Product, ProductSchema } from "./product.entity";

export class ProductService {
  productsCollection: Collection<ProductSchema>;

  constructor(params: { productsCollection: Collection<ProductSchema> }) {
    this.productsCollection = params.productsCollection;
  }

  async createProduct(product: Product): Promise<ObjectId> {
    const productResult: InsertOneResult<ProductSchema> =
      await this.productsCollection.insertOne(product);
    return productResult.insertedId;
  }

  async getAllProducts(): Promise<ProductSchema[]> {
    const findResult: ProductSchema[] = await this.productsCollection
      .find()
      .toArray();
    return findResult;
  }

  async getProductById(id: string): Promise<ProductSchema | null> {
    const findResult: ProductSchema | null =
      await this.productsCollection.findOne({ _id: new ObjectId(id) });
    return findResult;
  }
}
```

And register to the module

```typescript:no-line-numbers
// /src/product/product.module.ts
// ...blabla
import { ProductService } from "./product.service";
// ...blabla

export const productModule : Module = createModule("product", {
  imports: [registerCollection("products")],
  providers: [ProductService],
});
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/product/product.service.js
import { ObjectId } from "mongodb";

export class ProductService {
  productsCollection

  constructor(params) {
    this.productsCollection = params.productsCollection;
  }

  async createProduct(product) {
    const productResult = await this.productsCollection.insertOne(product);
    return productResult.insertedId;
  }

  async getAllProducts(){
    const findResult = await this.productsCollection
      .find()
      .toArray();
    return findResult;
  }

  async getProductById(id) {
    const findResult = await this.productsCollection.findOne({ _id: new ObjectId(id) });
    return findResult;
  }
}
```

And register to the module

```javascript:no-line-numbers
// /src/product/product.module.js
// ...blabla
import { ProductService } from "./product.service";
// ...blabla

export const productModule = createModule("product", {
  imports: [registerCollection("products")],
  providers: [ProductService],
});
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/product/product.service.js
const { ObjectId } = require("mongodb");

class ProductService {
  productsCollection

  constructor(params) {
    this.productsCollection = params.productsCollection;
  }

  async createProduct(product) {
    const productResult = await this.productsCollection.insertOne(product);
    return productResult.insertedId;
  }

  async getAllProducts(){
    const findResult = await this.productsCollection
      .find()
      .toArray();
    return findResult;
  }

  async getProductById(id) {
    const findResult = await this.productsCollection.findOne({ _id: new ObjectId(id) });
    return findResult;
  }
}

module.exports = {
    ProductService
}
```

And register to the module

```javascript:no-line-numbers
// /src/product/product.module.js
// ...blabla
const { ProductService } = require("./product.service");
// ...blabla

const productModule = createModule("product", {
  imports: [registerCollection("products")],
  providers: [ProductService],
});
module.exports = {
    productModule
}
```

</div>

This much! We established a simple mongodb connection, learned how to integrate a collection into our module and wrote a service file for this collection.

In real life, we attribute this to controllers. However, in order not to prolong the article, we will not describe it here. An example of the example used with the http package in this article [can be found here](https://github.com/galatajs/app/tree/main/examples/02-mongodb).