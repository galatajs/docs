---
footer: false
lastUpdated: true
contributors: true
---

# Module Based Architecture

::: tip Documentation Not Yet Completed

- This document is under construction and its contents are subject to change.

:::

## What Is Module Based Architecture?

Module Based Architecture (MBA) is a software architecture that uses modules to separate the functionality of a program into independent components. Modules are independent pieces of functionality that can be used to build a program. 

<span class="text-primary">IstanbulJS</span> strongly recommends object-oriented programming for medium and large scale applications. However, If your job is to just create a request listener, it provides you with a much softer infrastructure. If you do not want to use module-based architecture, you can proceed to the next step.

With module-based architecture, each object in your program becomes a module. Just like [`database normalization`](https://en.wikipedia.org/wiki/Database_normalization). Product is an object and must be have a module. Category is an object and must have a module. This makes your programs more maintainable, readable, and flexible.

The most important features of <span class="text-primary">IstanbulJS</span> are that it is a flexible and progressive framework. and we owe this to module-based architecture. Because we used this philosophy while developing the framework.

## Recommended Folder Structure

First of all, you are completely free in this regard. But if you are not sure, you can use the Recommended folder structure.

```:no-line-numbers
📦 istanbul-project
 ┣ 📂 src
 ┃ ┗ 📂 product
 ┃ ┃ ┣ 📜 product.controller.[js,ts]
 ┃ ┃ ┣ 📜 product.gateway.[js,ts]
 ┃ ┃ ┣ 📜 product.entity.[js,ts]
 ┃ ┃ ┣ 📜 product.module.[js,ts]
 ┃ ┃ ┗ 📜 product.service.[js,ts]
  ┃ ┗ 📂 category
 ┃ ┃ ┣ 📜 category.controller.[js,ts]
 ┃ ┃ ┣ 📜 category.gateway.[js,ts]
 ┃ ┃ ┣ 📜 category.entity.[js,ts]
 ┃ ┃ ┣ 📜 category.module.[js,ts]
 ┃ ┃ ┗ 📜 category.service.[js,ts]
 ┃ ┗ 📜 main.module.[js,ts]
 ┣ 📜 [jsconfig,tsconfig].json
 ┣ 📜 main.[js,ts]
 ┗ 📜 package.json
```

So what do these mean?

- `src` is the source code folder.
- `product` is the product folder.
- `category` is the category folder.
- `product.controller.[js,ts]` is the product controller. (for http listeners)
- `product.gateway.[js,ts]` is the product gateway. (for websocket listeners)
- `product.entity.[js,ts]` is the product entity. (for database tables)
- `product.module.[js,ts]` is the product module.
- `product.service.[js,ts]` is the product service. (for database services)
- `category.controller.[js,ts]` is the category controller.
- `category.gateway.[js,ts]` is the category gateway.
- `category.entity.[js,ts]` is the category entity.
- `category.module.[js,ts]` is the category module.
- `category.service.[js,ts]` is the category service.
- `main.module.[js,ts]` is the main module. (for the application modules registration)
- `[jsconfig,tsconfig].json` is the configuration file. (for typescript or javascript)
- `main.[js,ts]` is the main file. (for the application)
- `package.json` is the package file.

## Create a Module

To create a module you will need to write code like the one below. We'II explain what these mean in a moment.

<CodeGroup>
<CodeGroupItem title="TypeScript" active>

```typescript:
import { createModule, Module } from "@istanbul/app"
import { ProductService } from "./product.service"

export const productModule : Module = createModule("product", {
    providers: [ProductService],
    exports: [ProductService]
})
```

</CodeGroupItem>
<CodeGroupItem title="EcmaScript">

```javascript:
import { createModule } from "@istanbul/app"
import { ProductService } from "./product.service"

export const productModule = createModule("product", {
    providers: [ProductService],
    exports: [ProductService]
})
```

</CodeGroupItem>
<CodeGroupItem title="CommonJS">

```javascript:
const { createModule } = require("@istanbul/app")
const { ProductService } = require("./product.service")

const productModule = createModule("product", {
    providers: [ProductService],
    exports: [ProductService]
})

module.exports = {
    productModule
}
```

</CodeGroupItem>
</CodeGroup>

To understand the relationship between modules, our `category.module` file would probably look like this.

::: warning Warning!

The order of providers's is important. Here, if the `CategoryService` file is used in `CategoryController`, it must be written before. If the dependent provider is written before its provider, its dependency cannot be resolved successfully.

:::

<CodeGroup>
<CodeGroupItem title="TypeScript" active>

```typescript:
import { createModule, Module } from "@istanbul/app"
import { CategoryService } from "./category.service"
import { CategoryController } from "./category.controller"
import { productModule } from "../product/product.module"

export const categoryModule : Module = createModule("category", {
    imports: [productModule],
    providers: [CategoryService, CategoryController],
})
```

</CodeGroupItem>
<CodeGroupItem title="EcmaScript">

```javascript:
import { createModule } from "@istanbul/app"
import { CategoryService } from "./category.service"
import { CategoryController } from "./category.controller"
import { productModule } from "../product/product.module"

export const categoryModule = createModule("category", {
    imports: [productModule],
    providers: [CategoryService, CategoryController],
})
```

</CodeGroupItem>
<CodeGroupItem title="CommonJS">

```javascript:
const { createModule } = require("@istanbul/app")
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

</CodeGroupItem>
</CodeGroup>

And finally, we need to have a main module in module-based architecture. This is because <span class="text-primary">IstanbulJS</span> establishes a part-to-whole relationship between modules.

::: warning Warning!

The import order here is important. First, the modules used in other modules should be written. Otherwise, the dependencies cannot be handled properly.

:::


<CodeGroup>
<CodeGroupItem title="TypeScript" active>

```typescript:
import { createModule, Module } from "@istanbul/app"
import { productModule } from "./product/product.module"
import { categoryModule } from "./category/category.module"

export const mainModule : Module = createModule("main", {
    imports: [productModule, categoryModule]
})
```

</CodeGroupItem>
<CodeGroupItem title="EcmaScript">

```javascript:
import { createModule } from "@istanbul/app"
import { productModule } from "./product/product.module"
import { categoryModule } from "./category/category.module"

export const mainModule = createModule("main", {
    imports: [productModule, categoryModule]
})
```

</CodeGroupItem>
<CodeGroupItem title="CommonJS">

```javascript:
const { createModule } = require("@istanbul/app")
const { productModule } = require("./product/product.module")
const { categoryModule } = require("./category/category.module")

const mainModule : Module = createModule("main", {
    imports: [productModule, categoryModule]
})
module.exports = {
    mainModule
}
```

</CodeGroupItem>
</CodeGroup>

And our main file in the root directory will look like this. 

The `createApp` function takes an optional `mainModule`. If you provide a module to the `createApp` function, <span class="text-primary">IstanbulJS</span> acts as if you are using a module-based architecture.

<CodeGroup>
<CodeGroupItem title="TypeScript" active>

```typescript:
import { createApp, App } from "@istanbul/app"
import { mainModule } from "./src/main.module"

const app : App = createApp(mainModule);
app.start();
```

</CodeGroupItem>
<CodeGroupItem title="EcmaScript">

```javascript:
import { createApp } from "@istanbul/app"
import { mainModule } from "./src/main.module"

const app = createApp(mainModule);
app.start();
```

</CodeGroupItem>
<CodeGroupItem title="CommonJS">

```javascript:
const { createApp } = require("@istanbul/app")
const { mainModule } = require("./src/main.module")

const app = createApp(mainModule);
app.start();
```

</CodeGroupItem>
</CodeGroup>

That's it! This is how a simple module-based system works.

Live example will be available soon on GitHub.