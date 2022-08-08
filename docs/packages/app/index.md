---
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# App Package

This package is the main package of <span class="text-primary">IstanbulJS</span>. It keeps some ready-made modules inside and behaves minimally while keeping them. There is really nothing superfluous and everything that exists is lightweight.

What does the app package include?

- [``Modules``](/package/app/modules)
- [``Lifecycle Hooks``](/essentials/lifecycle)
- [``Plugins``](/packages/app/plugins)
- [``App Methods``](/packages/app/app-methods)

for example an <span class="text-primary">IstanbulJS</span> application is started like this

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createApp, App } from "@istanbul/app"
import { createHttpServer, createRouter, Request, Response, NextFunction } from "@istanbul/http"

const app : App = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req : Request, res : Response, next : NextFunction) => {
    res.success("Welcome to IstanbulJS!")
})

app.start()
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createApp } from "@istanbul/app"
import { createHttpServer, createRouter } from "@istanbul/http"

const app = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req, res, next) => {
    res.success("Welcome to IstanbulJS!")
})

app.start()
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createApp } = require("@istanbul/app")
const { createHttpServer, createRouter } = require("@istanbul/http")

const app = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req, res, next) => {
    res.success("Welcome to IstanbulJS!")
})

app.start()
```

</div>