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

We have connected the auth module to the user module. Now let's dive a little further into the user module.

Let the User module be using a repository as it will perform operations on the database. With the `UserRepository`, we can perform database operations of the User. `UserService` should contains functions that will be used by the `authModule` or `UserController`, such as `createUser` and `getUserById`.

In this case `UserService` should use `UserRepository` for database operations. So `UserService` is first degree dependent on `UserRepository`. Therefore, `UserRepository` (depending element) must be written before in the provider list.

Here is the example for the `userModule`

<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/modules/user/user.module.ts
import { createModule, Module } from "@istanbul/app"
import { UserRepository } from "./user.repository"
import { UserService } from "./user.service"

export const userModule : Module = createModule("user", {
    providers: [ UserRepository, UserService ],
})
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/modules/user/user.module.js
import { createModule } from "@istanbul/app"
import { UserRepository } from "./user.repository"
import { UserService } from "./user.service"

export const userModule = createModule("user", {
    providers: [ UserRepository, UserService ],
})
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/modules/user/user.module.js
const { createModule } = require("@istanbul/app")
const { UserRepository } = require("./user.repository")
const { UserService } = require("./user.service")

const userModule = createModule("user", {
    providers: [ UserRepository, UserService ],
})

module.exports = { userModule }
```

</div>

That's it!

## Export Something

So far, we've talked about how to import a module, how to provide classes in a module, and the importance of their order.

But there is something that we missed and will solve right here. This is that we can only use the exported values of the modules we import.

For example, we imported the `userModule` to the `authModule` above.  We have exposed `UserService` as a provider in the `userModule`. However, despite all this, `UserService` cannot be used within the `authModule`. Because we haven't exported it in the `userModule` yet.

In short, if we want a provider to be used in an external module, we must export it.

Let's update the `UserModule` as follows

<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/modules/user/user.module.ts
import { createModule, Module } from "@istanbul/app"
import { UserRepository } from "./user.repository"
import { UserService } from "./user.service"

export const userModule : Module = createModule("user", {
    providers: [ UserRepository, UserService ],
    exports: [ UserService ],
})
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/modules/user/user.module.js
import { createModule } from "@istanbul/app"
import { UserRepository } from "./user.repository"
import { UserService } from "./user.service"

export const userModule = createModule("user", {
    providers: [ UserRepository, UserService ],
    exports: [ UserService ],
})
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/modules/user/user.module.js
const { createModule } = require("@istanbul/app")
const { UserRepository } = require("./user.repository")
const { UserService } = require("./user.service")

const userModule = createModule("user", {
    providers: [ UserRepository, UserService ],
    exports: [ UserService ],
})

module.exports = { userModule }
```

</div>

Now `authModule` can easily use `UserService`.

Here is an example for `authModule`

<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/auth/auth.service.ts
import { UserService } from "../user/user.service"

export class AuthService {
    private userService : UserService;

    constructor(params : {userService : UserService}) {
        this.userService = params.userService;
    }

    async createUser(createUserDto: CreateUserDto) : Promise<UserModel | null> {
        return this.userService.createUser(createUserDto);
    }
}
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/auth/auth.service.js
export class AuthService {
    #userService;

    constructor({userService}) {
        this.#userService = userService;
    }

    async createUser(createUserDto) {
        return this.#userService.createUser(createUserDto);
    }
}
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/auth/auth.service.js
class AuthService {
    #userService;

    constructor({userService}) {
        this.#userService = userService;
    }

    async createUser(createUserDto) {
        return this.#userService.createUser(createUserDto);
    }
}

module.exports = { AuthService }
```

</div>

and provide it in the `authModule`.