---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# Module Based Architecture

::: tip Documentation Not Yet Completed

- This document is under construction and its contents are subject to change.

:::

## What Is Module Based Architecture?

Module Based Architecture (MBA) is a software architecture that uses modules to separate the functionality of a program into independent components. Modules are independent pieces of functionality that can be used to build a program. 

<span class="text-primary">GalataJS</span> strongly recommends object-oriented programming for medium and large scale applications. However, If your job is to just create a request listener, it provides you with a much softer infrastructure. If you do not want to use module-based architecture, you can proceed to the next step.

With module-based architecture, each object in your program becomes a module. Just like [`database normalization`](https://en.wikipedia.org/wiki/Database_normalization). Product is an object and must be have a module. Category is an object and must have a module. This makes your programs more maintainable, readable, and flexible.

The most important features of <span class="text-primary">GalataJS</span> are that it is a flexible and progressive framework. and we owe this to module-based architecture. Because we used this philosophy while developing the framework.

## Recommended Folder Structure

First of all, you are completely free in this regard. But if you are not sure, you can use the Recommended folder structure.

<div class="prefer-typescript">

```:no-line-numbers
📦 galatajs-project
 ┣ 📂 src
 ┃ ┗ 📂 product
 ┃ ┃ ┣ 📜 product.controller.ts
 ┃ ┃ ┣ 📜 product.gateway.ts
 ┃ ┃ ┣ 📜 product.entity.ts
 ┃ ┃ ┣ 📜 product.module.ts
 ┃ ┃ ┗ 📜 product.service.ts
  ┃ ┗ 📂 category
 ┃ ┃ ┣ 📜 category.controller.ts
 ┃ ┃ ┣ 📜 category.gateway.ts
 ┃ ┃ ┣ 📜 category.entity.ts
 ┃ ┃ ┣ 📜 category.module.ts
 ┃ ┃ ┗ 📜 category.service.ts
 ┃ ┗ 📜 main.module.ts
 ┣ 📜 tsconfig.json
 ┣ 📜 main.ts
 ┗ 📜 package.json
```

</div>

<div class="prefer-ecmascript prefer-commonjs">

```:no-line-numbers
📦 galatajs-project
 ┣ 📂 src
 ┃ ┗ 📂 product
 ┃ ┃ ┣ 📜 product.controller.js
 ┃ ┃ ┣ 📜 product.gateway.js
 ┃ ┃ ┣ 📜 product.entity.js
 ┃ ┃ ┣ 📜 product.module.js
 ┃ ┃ ┗ 📜 product.service.js
  ┃ ┗ 📂 category
 ┃ ┃ ┣ 📜 category.controller.js
 ┃ ┃ ┣ 📜 category.gateway.js
 ┃ ┃ ┣ 📜 category.entity.js
 ┃ ┃ ┣ 📜 category.module.js
 ┃ ┃ ┗ 📜 category.service.js
 ┃ ┗ 📜 main.module.js
 ┣ 📜 jsconfig.json
 ┣ 📜 main.js
 ┗ 📜 package.json
```

</div>

So what do these mean?

<div class="prefer-typescript">

- `src` is the source code folder.
- - `product` is the product folder.
- - - `product.controller.ts` is the product controller. (for http listeners)
- - - `product.gateway.ts` is the product gateway. (for websocket listeners)
- - - `product.entity.ts` is the product entity. (for database tables)
- - - `product.module.ts` is the product module.
- - - `product.service.ts` is the product service. (for database services)
- - `category` is the category folder.
- - - `category.controller.ts` is the category controller.
- - - `category.gateway.ts` is the category gateway.
- - - `category.entity.ts` is the category entity.
- - - `category.module.ts` is the category module.
- - - `category.service.ts` is the category service.
- - `main.module.ts` is the main module. (for the application modules registration)
- `tsconfig.json` is the configuration file. (for typescript config)
- `main.ts` is the main file. (for the application)
- `package.json` is the package file.

</div>

<div class="prefer-ecmascript prefer-commonjs">

- `src` is the source code folder.
- - `product` is the product folder.
- - - `product.controller.js` is the product controller. (for http listeners)
- - - `product.gateway.js` is the product gateway. (for websocket listeners)
- - - `product.entity.js` is the product entity. (for database tables)
- - - `product.module.js` is the product module.
- - - `product.service.js` is the product service. (for database services)
- - `category` is the category folder.
- - - `category.controller.js` is the category controller.
- - - `category.gateway.js` is the category gateway.
- - - `category.entity.js` is the category entity.
- - - `category.module.js` is the category module.
- - - `category.service.js` is the category service.
- - `main.module.js` is the main module. (for the application modules registration)
- `jsconfig.json` is the configuration file. (for javascript config)
- `main.js` is the main file. (for the application)
- `package.json` is the package file.

</div>

## Create a Module

To create a module you will need to write code like the one below. We'II explain what these mean in a moment.

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule, Module } from "@galatajs/app"
import { ProductService } from "./product.service"

export const productModule : Module = createModule("product", {
    providers: [ProductService],
    exports: [ProductService]
})
```

</div>

<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@galatajs/app"
import { ProductService } from "./product.service"

export const productModule = createModule("product", {
    providers: [ProductService],
    exports: [ProductService]
})
```

</div>

<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createModule } = require("@galatajs/app")
const { ProductService } = require("./product.service")

const productModule = createModule("product", {
    providers: [ProductService],
    exports: [ProductService]
})

module.exports = {
    productModule
}
```

</div>

To understand the relationship between modules, our `category.module` file would probably look like this.

::: warning Warning!

The order of providers's is important. Here, if the `CategoryService` file is used in `CategoryController`, it must be written before. If the dependent provider is written before its provider, its dependency cannot be resolved successfully.

:::



<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule, Module } from "@galatajs/app"
import { CategoryService } from "./category.service"
import { CategoryController } from "./category.controller"
import { productModule } from "../product/product.module"

export const categoryModule : Module = createModule("category", {
    imports: [productModule],
    providers: [CategoryService, CategoryController],
})
```

</div>

<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@galatajs/app"
import { CategoryService } from "./category.service"
import { CategoryController } from "./category.controller"
import { productModule } from "../product/product.module"

export const categoryModule = createModule("category", {
    imports: [productModule],
    providers: [CategoryService, CategoryController],
})
```

</div>

<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createModule } = require("@galatajs/app")
const { CategoryService } = require("./category.service")
const { CategoryController } = require("./category.controller")
const { productModule } = require("../product/product.module")

const categoryModule = createModule("category", {
    imports: [productModule],
    providers: [CategoryService, CategoryController],
})

module.exports = {
    categoryModule
}
```

</div>


And finally, we need to have a main module in module-based architecture. This is because <span class="text-primary">GalataJS</span> establishes a part-to-whole relationship between modules.

::: warning Warning!

The import order here is important. First, the modules used in other modules should be written. Otherwise, the dependencies cannot be handled properly.

:::


<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule, Module } from "@galatajs/app"
import { productModule } from "./product/product.module"
import { categoryModule } from "./category/category.module"

export const mainModule : Module = createModule("main", {
    imports: [productModule, categoryModule]
})
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@galatajs/app"
import { productModule } from "./product/product.module"
import { categoryModule } from "./category/category.module"

export const mainModule = createModule("main", {
    imports: [productModule, categoryModule]
})
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createModule } = require("@galatajs/app")
const { productModule } = require("./product/product.module")
const { categoryModule } = require("./category/category.module")

const mainModule : Module = createModule("main", {
    imports: [productModule, categoryModule]
})
module.exports = {
    mainModule
}
```

</div>

And our main file in the root directory will look like this. 

The `createApp` function takes an optional `mainModule`. If you provide a module to the `createApp` function, <span class="text-primary">GalataJS</span> acts as if you are using a module-based architecture.

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createApp, App } from "@galatajs/app"
import { mainModule } from "./src/main.module"

const app : App = createApp(mainModule);
app.start();
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createApp } from "@galatajs/app"
import { mainModule } from "./src/main.module"

const app = createApp(mainModule);
app.start();
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createApp } = require("@galatajs/app")
const { mainModule } = require("./src/main.module")

const app = createApp(mainModule);
app.start();
```

</div>

That's it! This is how a simple module-based system works.

Live example will be available soon on GitHub.