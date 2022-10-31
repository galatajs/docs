---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# GalataJS's Lifecycle

Almost everything on Earth has a lifecycle. For example, human is born, lives and dies. We cook, eat and clean. All these are in themselves the lifecycle.

Since <span class="text-primary">GalataJS</span> is a NodeJS Framework, the events will be server-side events. Like `onAppStarted` and `onAppFinished`. Also <span class="text-primary">GalataJS</span> allows you to use some NodeJS signals as well.

## What Is NodeJS Signals?

Your application may be closed by the user or the system for various reasons. NodeJS manages these operations with signals and various signals give you various information. For more information, [please visit here](https://nodejs.org/api/process.html#process_signal_events).

## GalataJS's Lifecycle Sequence

<span class="text-primary">GalataJS</span> allows you to use lifecycle when you use module-based architecture. All providers in the module can use these hooks (if they want). Below is schematic of this, and further below, each is described individually.

<div class="light-content">
    <img src="/img/diagrams/galatajs-lifecycle-light.png" />
</div>

<div class="dark-content">
<img src="/img/diagrams/galatajs-lifecycle-dark.png" />
</div>

### appCreated

The `createApp` function is executed as soon as it is called and is not very usable.

### onModuleInstalled

The module runs as soon as it is installed. This runs a little before `onAppStarted` and if your module is a database module you can delay the creation of other modules and app here. <span class="text-primary">GalataJS</span> will fully wait for the module to load.

Here is an example

<div class="prefer-typescript">

Since you are using TypeScript, it is recommended to implement the hooks' interfaces.

```typescript:no-line-numbers
import { onModuleInstalled } from "@galatajs/app";

export class SomeProvider implements onModuleInstalled {

    async onModuleInstalled() : Promise<void> {
        return new Promise<void>((resolve, reject) : void => {
            setTimeout(() => {
                resolve();
            }, 1000);
            })
        })
    }
}
```

You need to pass this class as a provider to a module.

a beautify of `onModuleInstalled`; is that the current module sends its providers up to the current provider as parameters.

for example you have a module like below

```typescript:no-line-numbers
import { createModule, Module } from "@galatajs/app";
import { productModule } from "../product/product.module";

export const categoryModule : Module = createModule("category", {
    imports: [ productModule ],
    providers: [ ProviderA, ProviderB, ProviderC ],
    exports: [ ProviderB ]
})
```

In this case, the following steps take:

- install `productModule`
- create a providers object containing the `productModule`'s exports
- add `ProviderA` instance to providers object
- add `ProviderB` instance to providers object
- add `ProviderC` instance to providers object

So `ProviderC` has `ProviderB` but `ProviderB` does not have `ProviderC`.

More

```typescript:no-line-numbers
// providerA.ts
import { onModuleInstalled } from "@galatajs/app";
import { ProductService } from "../product/product.service";

export class ProviderA implements onModuleInstalled {

    onModuleInstalled(params: {productService: ProductService}) : <void> {
        // do something
    }
}
```

```typescript:no-line-numbers
// providerB.ts
import { onModuleInstalled } from "@galatajs/app";
import { ProductService } from "../product/product.service";
import { ProviderA } from "./providerA"

export class ProviderB implements onModuleInstalled {

    onModuleInstalled(params: {productService: ProductService, providerA: ProviderA}) : <void> {
        // do something
    }
}
```

```typescript:no-line-numbers
// providerC.ts
import { onModuleInstalled } from "@galatajs/app";
import { ProductService } from "../product/product.service";
import { ProviderA } from "./providerA"
import { ProviderB } from "./providerB"

export class ProviderC implements onModuleInstalled {

    onModuleInstalled(params: {productService: ProductService, providerA: ProviderA, providerB: ProviderB}) : <void> {
        // do something
    }
}
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
export class SomeProvider {

    async onModuleInstalled() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
            })
        })
    }
}
```

You need to pass this class as a provider to a module.


a beautify of `onModuleInstalled`; is that the current module sends its providers up to the current provider as parameters.

for example you have a module like below

```javascript:no-line-numbers
import { createModule } from "@galatajs/app";
import { productModule } from "../product/product.module";

export const categoryModule = createModule("category", {
    imports: [ productModule ],
    providers: [ ProviderA, ProviderB, ProviderC ],
    exports: [ ProviderB ]
})
```

In this case, the following steps take:

- install `productModule`
- create a providers object containing the `productModule`'s exports
- add `ProviderA` instance to providers object
- add `ProviderB` instance to providers object
- add `ProviderC` instance to providers object

So `ProviderC` has `ProviderB` but `ProviderB` does not have `ProviderC`.

More

```javascript:no-line-numbers
// providerA.js
export class ProviderA {
    onModuleInstalled({ productService }) {
        // do something
    }
}
```

```javascript:no-line-numbers
// providerB.js
export class ProviderB {
    onModuleInstalled({ productService, providerA }) {
        // do something
    }
}
```

```javascript:no-line-numbers
// providerC.js
export class ProviderC {
    onModuleInstalled({ productService, providerA, providerB }) {
        // do something
    }
}
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
class SomeProvider {

    async onModuleInstalled() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
            })
        })
    }
}

module.exports = {
    SomeProvider
}
```

You need to pass this class as a provider to a module.


a beautify of `onModuleInstalled`; is that the current module sends its providers up to the current provider as parameters.

for example you have a module like below

```javascript:no-line-numbers
const { createModule } = require("@galatajs/app")
const { productModule } = require("../product/product.module")

const categoryModule = createModule("category", {
    imports: [ productModule ],
    providers: [ ProviderA, ProviderB, ProviderC ],
    exports: [ ProviderB ]
})

module.exports = {
    categoryModule
}
```

In this case, the following steps take:

- install `productModule`
- create a providers object containing the `productModule`'s exports
- add `ProviderA` instance to providers object
- add `ProviderB` instance to providers object
- add `ProviderC` instance to providers object

So `ProviderC` has `ProviderB` but `ProviderB` does not have `ProviderC`.

More

```javascript:no-line-numbers
// providerA.js
class ProviderA {
    onModuleInstalled({ productService }) {
        // do something
    }
}

module.exports = {
    ProviderA
}
```

```javascript:no-line-numbers
// providerB.js
class ProviderB {
    onModuleInstalled({ productService, providerA }) {
        // do something
    }
}

module.exports = {
    ProviderB
}
```

```javascript:no-line-numbers
// providerC.js
class ProviderC {
    onModuleInstalled({ productService, providerA, providerB }) {
        // do something
    }
}

module.exports = {
    ProviderC
}
```

</div>

### onAppStarted

It runs when the application is started and when all modules are installed.

Example Usage

<div class="prefer-typescript">

Since you are using TypeScript, it is recommended to implement the hooks' interfaces.
    
```typescript:no-line-numbers
import { OnAppStarted } from "@galatajs/app"

export class SomeProvider implements OnAppStarted {

    onAppStarted() : void {
        // do something
    }
}
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
export class SomeProvider {

    onAppStarted(){
        // do something
    }
}
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
class SomeProvider {
    onAppStarted(){
        // do something
    }
}

module.exports = {
    SomeProvider
}
```

</div>

### onAppFinished

Runs when the app is closed by the system or user and the `app.close()` function is called. It sends NodeJS's signals as parameters.

Example Usage

<div class="prefer-typescript">

Since you are using TypeScript, it is recommended to implement the hooks' interfaces.
    
```typescript:no-line-numbers
import { OnAppFinished } from "@galatajs/app"

export class SomeProvider implements OnAppFinished {

    onAppFinished(signal: string) : void {
        if(signal === 'SIGTERM') {}
        // do something
    }
}
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
export class SomeProvider{

    onAppFinished(signal) {
        if(signal === 'SIGTERM') {}
        // do something
    }
}
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
class SomeProvider {
    onAppFinished(signal) {
        if(signal === 'SIGTERM') {}
        // do something
    }
}

module.exports = {
    SomeProvider
}
```

</div>