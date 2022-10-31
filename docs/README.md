---
home: true
pageClass: homepage
heroImage: /img/framework-logo.png
heroText: null
title: GalataJS - The Progressive, Flexible and Friendly Full Stack NodeJS Framework
actions:
  - text: Documentation
    link: /introduction/
    type: primary
  - text: Source Code
    link: https://github.com/galatajs
    type: secondary
features:
  - title: Progressive
    details: GalataJS is innovative in a way that won't bother you. All packages that NodeJS stabilizes are our development goal!
  - title: Flexible
    details: GalataJS is as much as you want. GalataJS provides a suitable infrastructure for all scales, from the smallest to the largest.
  - title: Friendly
    details: GalataJS was developed by developers, not aliens. Therefore, it is easier and less troublesome to reach everything you may need.
  - title: The Syntax You Want
    details: GalataJS is written in TypeScript and compiled to JavaScript. Therefore, it can be used as CommonJS, EcmaScript or TypeScript.
  - title: In All Areas
    details: Develop anything, whether you want a bank, cli, chat or blog. GalataJS has an infrastructure that will make your job easier!
  - title: Easy to Use
    details: GalataJS quickly creates module, service, controller and gateway with its cli package and allows you to focus on your work.
  
footer: <p class="license">Released under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.</p><p class="copyright">Copyright © 2022 <a href="https://github.com/ssibrahimbas" target="_blank">Sami Salih İbrahimbaş</a></p>
footerHtml: true
layout: GalataLayout
---

Life is too short to think about everything. We thought for you once, now the rest is as effortless as the codes below!


<CodeGroup>
<CodeGroupItem title="HTTP" active>

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

</CodeGroupItem>

<CodeGroupItem title="WEBSOCKET" active>

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createApp, App } from "@galatajs/app"
import { createWsApp, WsApp, Socket, Request, Response } from "@galatajs/ws"

const app : App = createApp()
const ws : WsApp = createWsApp()
app.register(ws)

ws.listen("view", (socket : Socket, req : Request, res : Response) => {
    res.reply("Welcome to GalataJS!")
})

app.start()
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createApp } from "@galatajs/app"
import { createWsApp } from "@galatajs/ws"

const app = createApp()
const ws = createWsApp()
app.register(ws)

ws.listen("view", (socket, req, res) => {
    res.reply("Welcome to GalataJS!")
})

app.start()
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createApp } = require("@galatajs/app")
const { createWsApp } = require("@galatajs/ws")

const app = createApp()
const ws = createWsApp()
app.register(ws)

ws.listen("view", (socket, req, res) => {
    res.reply("Welcome to GalataJS!")
})

app.start()
```

</div>

</CodeGroupItem>
</CodeGroup>

Although the codes are short, there is that much you can do. Start <a href="/introduction/#introduction">now</a>.

<h3 class="text-center">Sponsors</h3>

<div class="sponsor-container">
<div class="sponsor-item sponsor-empty" v-for="i in 4" :key="i">
  <span class="question-mark">?</span>
</div>
<div class="sponsor-item sponsor-marketing">
  <span class="marketing-text">Your logo will be displayed here when you become a sponsor.</span>
</div>
<div class="sponsor-item sponsor-empty" v-for="i in 4" :key="i">
  <span class="question-mark">?</span>
</div>
</div>