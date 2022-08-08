---
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# Modules

::: warning Warning

- This document assumes you have read our module-based architecture document.
- IF you haven't read it yet, [please click here](../../essentials/module-based-architecture.md) to read the document on module-based architecture. 

:::

Modules allow you to develop applications with an object-oriented architecture and it is recommended to use module-based architecture.

Everything is your app is treated as an object each is a module. For example, in an e-commerce application, products, categories and users are different objects. Just as you import them into different tables in the database, you can also process them through different modules in <span class="text-primary">IstanbulJS</span> modules.

However, this only applies to medium-large projects. If you are doing a small demo it will be overkill.

## Creating A Module

To create a module, we will send our module name and necessary parameters to the `createModule` function. Then we will register it in our `main` module.

<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/product/product.module
import { createModule, Module } from "@istanbul/app"

export const productModule : Module = createModule("product", {
    imports: [ ],
    providers: [ ],
    exports: [ ]
})
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/product/product.module
import { createModule } from "@istanbul/app"

export const productModule = createModule("product", {
    imports: [ ],
    providers: [ ],
    exports: [ ]
})
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/product/product.module
const { createModule } = require("@istanbul/app")

const productModule = createModule("product", {
    imports: [ ],
    providers: [ ],
    exports: [ ]
})

module.exports = { productModule }
```

</div>

::: tip
- The import, provider and export arrays here as completely optional and you don't need to specify it if you don't have any exports.
- We have already sent them because we will specify them one by one in this document.
:::

<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/main.module
import { createModule, Module } from "@istanbul/app"
import { productModule } from "./product/product.module"

export const mainModule : Module = createModule("main", {
    imports: [ productModule ],
})

// /main.ts
import { mainModule } from "./src/main.module"

const app = createApp(mainModule) // this line is required
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/main.module
import { createModule } from "@istanbul/app"
import { productModule } from "./product/product.module"

export const mainModule = createModule("main", {
    imports: [ productModule ],
})

// /main.ts
import { mainModule } from "./src/main.module"

const app = createApp(mainModule) // this line is required
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/main.module
const { createModule } = require("@istanbul/app")
const { productModule } = require("./product/product.module")

const mainModule = createModule("main", {
    imports: [ productModule ],
})

module.exports = { mainModule }

// /main.ts
const { mainModule } = require("./src/main.module")

const app = createApp(mainModule) // this line is required
```

</div>

## Dependent Module Injection

A module may have to use a different module. For example the auth module has to use the user module. Here, the auth module should import the user module. So how?

That's it

<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/auth/auth.module
import { createModule, Module } from "@istanbul/app"
import { userModule } from "../user/user.module"

export const authModule : Module = createModule("auth", {
    imports: [ userModule ]
})
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/auth/auth.module
import { createModule } from "@istanbul/app"
import { userModule } from "../user/user.module"

export const authModule = createModule("auth", {
    imports: [ userModule ]
})
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/auth/auth.module
const { createModule } = require("@istanbul/app")
const { userModule } = require("../user/user.module")

const authModule = createModule("auth", {
    imports: [ userModule ]
})

module.exports = {
    authModule
}
```

</div>

Here the auth module has imported the user module.

However, there is one very important point: The registration order. The registration order is the order of modules, imports, providers or exports. And if a provider uses another provider in any way, the dependent provider must be written later. Likewise, the dependent module should be written after then dependent module.

## Provide Something

## Export Something