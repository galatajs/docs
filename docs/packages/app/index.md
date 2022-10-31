---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# App Package

This package is the main package of <span class="text-primary">GalataJS</span>. It keeps some ready-made modules inside and behaves minimally while keeping them. There is really nothing superfluous and everything that exists is lightweight.

What does the app package include?

- [``Modules``](./modules)
- [``Lifecycle Hooks``](../../essentials/lifecycle)
- [``Plugins``](./plugins)
- [``App Methods``](./app-methods)

for example an <span class="text-primary">GalataJS</span> application is started like this

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createApp, App } from "@galatajs/app"
import { createHttpServer, createRouter, Request, Response, NextFunction } from "@galatajs/http"

const app : App = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req : Request, res : Response, next : NextFunction) => {
    res.success("Welcome to GalataJS!")
})

app.start()
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createApp } from "@galatajs/app"
import { createHttpServer, createRouter } from "@galatajs/http"

const app = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req, res, next) => {
    res.success("Welcome to GalataJS!")
})

app.start()
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createApp } = require("@galatajs/app")
const { createHttpServer, createRouter } = require("@galatajs/http")

const app = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req, res, next) => {
    res.success("Welcome to GalataJS!")
})

app.start()
```

</div>