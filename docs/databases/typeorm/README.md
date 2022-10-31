---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# TypeORM Package

::: tip Documentation Not Yet Completed

- This document is under construction and its contents are subject to change.

:::

<span class="text-primary">GalataJS</span> is a flexible and scalable framework and maintains this flexibility in the database part as well. You can use whatever database you want, the database driver you want, and the nodejs orm package you want.

In this document, we will explain how you can use [TypeORM](https://typeorm.io/) and <span class="text-primary">GalataJS</span> project together through modules.

## Installation

`galatajs/typeorm` is a package designed to use TypeORM features on the <span class="text-primary">GalataJS</span> project. This package contains the dependencies of TypeORM and TypeORM. Also you don't need to install TypeORM.

However, you must choose the database driver you will use. In our example we will use mysql and this is it. So we will use `mysql2` driver.

::: warning A Little Reminder

- The operations done here are related to the logic of TypeORM itself. [Click](https://typeorm.io/#installation) for more information.

:::

<code-group>

<code-group-item title="NPM" active>

```bash:no-line-numbers
npm install --save @galatajs/typeorm mysql2
```

</code-group-item>

<code-group-item title="YARN">

```bash:no-line-numbers
yarn add @galatajs/typeorm mysql2
```

</code-group-item>

</code-group>

## Registration

We need to tell our <span class="text-primary">GalataJS</span> application  that we are using TypeORM. This is necessary so that we can use the repository within the modules and connect to the database when the application is started.

We should write the following codes in the main file of our project

<div class="prefer-typescript">

```typescript:no-line-numbers
// /main.ts
import { createTypeorm } from "@galatajs/typeorm";

app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);
```

When complete, it will look like this

```typescript:no-line-numbers
// /main.ts
import { createApp, App } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { createTypeorm } from "@galatajs/typeorm";
import { mainModule } from "./src/main.module";

const app: App = createApp(mainModule);
app.register(createHttpServer());
app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);

app.start();
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /main.js
import { createTypeorm } from "@galatajs/typeorm";

app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);
```

When complete, it will look like this

```javascript:no-line-numbers
// /main.js
import { createApp } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { createTypeorm } from "@galatajs/typeorm";
import { mainModule } from "./src/main.module";

const app = createApp(mainModule);
app.register(createHttpServer());
app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);

app.start();
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /main.js
const { createTypeorm } = require("@galatajs/typeorm");

app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);
```

When complete, it will look like this

```javascript:no-line-numbers
// /main.js
const { createApp } = require("@galatajs/app");
const { createHttpServer } = require("@galatajs/http");
const { createTypeorm } = require("@galatajs/typeorm");
const { mainModule } = require("./src/main.module");

const app = createApp(mainModule);
app.register(createHttpServer());
app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);

app.start();
```

</div>

### Create a Entity

The work we will do here is exactly the same as in the TypeORM guides. 

Here is a simple entity:

<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/product/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
```


</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/product/product.entity.js
import typeorm from "typeorm";

export const Product = new typeorm.EntitySchema({
    name: "Product",
    tableName: "product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        price: {
            type: "int",
            nullable: false
        }
    }
})
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/product/product.entity.js
const typeorm = require("typeorm");

const Product = new typeorm.EntitySchema({
    name: "Product",
    tableName: "product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        price: {
            type: "int",
            nullable: false
        }
    }
})

module.exports = {
    Product
}
```

</div>

## Module Registration

Good, we've created our entities. Now we need to register them in the module.

We should create our `product.module` file as follows

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule, Module } from "@galatajs/app";
import { registerEntity } from "@galatajs/typeorm";
import { Product } from "./product.entity";

export const productModule : Module = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
});
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@galatajs/app";
import { registerEntity } from "@galatajs/typeorm";
import { Product } from "./product.entity";

export const productModule = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
});
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createModule } = require("@galatajs/app");
const { registerEntity } = require("@galatajs/typeorm");
const { Product } = require("./product.entity");

const productModule = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
});

module.exports = {
    productModule
}
```

</div>

That's it! Now we will see a big advantage of working with modules. We can manage each of our object more easily. And the modules provide the necessary dependencies for us! 

How Does? Continue reading...

## Create Product Service

We created our Entity, 
Why? A simple question. Of course to use. 

We will use our Entities with repositories. And we should use our repositories inside services. It should not be moved to the gateway and controller in any way.

Our service file using our product entity would probably look like this

<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/product/product.service.ts
import { Product } from "./product.entity";
import { Repository } from "typeorm";

export class ProductService {
  productRepository: Repository<Product>;

  constructor(params: { productRepository: Repository<Product> }) {
    this.productRepository = params.productRepository;
  }

  async createProduct(product: Product): Promise<Product> {
    const savedProduct = this.productRepository.create({
      name: product.name,
      price: product.price,
    });
    await this.productRepository.save(savedProduct);
    return savedProduct;
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
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
  imports: [registerEntity("productRepository", Product)],
  providers: [ProductService],
});
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/product/product.service.js
export class ProductService {
  productRepository;

  constructor(params) {
    this.productRepository = params.productRepository;
  }

  async createProduct(product) {
    const savedProduct = this.productRepository.create({
      name: product.name,
      price: product.price,
    });
    await this.productRepository.save(savedProduct);
    return savedProduct;
  }

  async getProductById(id) {
    return this.productRepository.findOneBy({ id });
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
  imports: [registerEntity("productRepository", Product)],
  providers: [ProductService],
});
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/product/product.service.js
class ProductService {
  productRepository;

  constructor(params) {
    this.productRepository = params.productRepository;
  }

  async createProduct(product) {
    const savedProduct = this.productRepository.create({
      name: product.name,
      price: product.price,
    });
    await this.productRepository.save(savedProduct);
    return savedProduct;
  }

  async getProductById(id) {
    return this.productRepository.findOneBy({ id });
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
  imports: [registerEntity("productRepository", Product)],
  providers: [ProductService],
});

module.exports = {
    productModule
}
```

</div>

That's it! We made a simple mysql connection, created an entity and wrote a service file for this entity.

In real life we also attribute this to controls. However, in order not to prolong the article, we will not describe it here. An example of the example in this article used with the http package can be [found here](https://github.com/galatajs/app/tree/main/examples/01-typeorm).