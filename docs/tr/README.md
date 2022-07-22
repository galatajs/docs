---
home: true
pageClass: homepage
heroImage: /img/framework-logo.png
heroText: null
title: IstanbulJS - İlerici, Esnek ve Kullanıcı Dostu Tam Yığın NodeJS Çerçevesi
actions:
  - text: Dokümantasyon
    link: /tr/introduction/
    type: primary
  - text: Kaynak Kodu
    link: https://github.com/istanbulnode
    type: secondary
features:
  - title: İlerici
    details: İstanbul sizi rahatsız etmeyecek şekilde yenilikçi. NodeJS'in kararlı hale getirdiği tüm paketler geliştirme hedefimizdir!
  - title: Esnek
    details: İstanbul istediğiniz kadardır. İstanbul, en küçükten en büyük ölçeğe kadar tüm ölçeklere uygun altyapı sunmaktadır.
  - title: Kullanıcı Dostu
    details: İstanbul uzaylılar tarafından değil, geliştiriciler tarafından geliştirildi. Bu nedenle ihtiyacınız olabilecek her şeye ulaşmak daha kolay ve zahmetsiz.
  - title: İstediğiniz Sözdizimi
    details: Istanbul, TypeScript ile yazılmış ve JavaScript'e çevrildi. Bu nedenle CommonJS, EcmaScript ve TypeScript kullanabilirsiniz.
  - title: Tüm Alanlarınızda
    details: Bir banka, cli, sohbet veya blog olsun, istediğiniz her şeyi geliştirin. İstanbul işinizi kolaylaştıracak bir altyapıya sahip!
  - title: Kolay Kullanım
    details: Istanbul, cli paketi ile hızlı olarak modül, servis, controller ve gateway oluşturabilir ve sizin işinize odaklanmanızı sağlar.
footer: <p class="license"><a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a> altında yayınlandı.</p><p class="copyright">Tüm hakları saklıdır. © 2022 Sami Salih İbrahimbaş</p>
footerHtml: true
layout: IstanbulLayout
---

Hayat her şeyi düşünmek için çok kısa. Bir zamanlar sizin için düşündük, şimdi gerisi aşağıdaki kodlar kadar zahmetsiz!

<CodeGroup>
<CodeGroupItem title="HTTP" active>

<div class="prefer-typescript">

```typescript:
import { createApp, App } from "@istanbul/app"
import { createHttpServer, createRouter, Request, Response, NextFunction } from "@istanbul/http"

const app : App = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req : Request, res : Response, next : NextFunction) => {
    res.success("IstanbulJS'e Hoş Geldin!")
})

app.start()
```

</div>


<div class="prefer-ecmascript">

```javascript:
import { createApp } from "@istanbul/app"
import { createHttpServer, createRouter } from "@istanbul/http"

const app = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req, res, next) => {
    res.success("IstanbulJS'e Hoş Geldin!")
})

app.start()
```

</div>


<div class="prefer-commonjs">

```javascript:
const { createApp } = require("@istanbul/app")
const { createHttpServer, createRouter } = require("@istanbul/http")

const app = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req, res, next) => {
    res.success("IstanbulJS'e Hoş Geldin!")
})

app.start()
```

</div>


</CodeGroupItem>


<CodeGroupItem title="WEBSOCKET" active>


<div class="prefer-typescript">

```typescript:
import { createApp, App } from "@istanbul/app"
import { createWsApp, WsApp, Socket, Request, Response } from "@istanbul/ws"

const app : App = createApp()
const ws : WsApp = createWsApp()
app.register(ws)

ws.listen("view", (socket : Socket, req : Request, res : Response) => {
    res.reply("IstanbulJS'e Hoş Geldin!")
})

app.start()
```

</div>


<div class="prefer-ecmascript">

```javascript:
import { createApp } from "@istanbul/app"
import { createWsApp } from "@istanbul/ws"

const app = createApp()
const ws = createWsApp()
app.register(ws)

ws.listen("view", (socket, req, res) => {
    res.reply("IstanbulJS'e Hoş Geldin!")
})

app.start()
```

</div>


<div class="prefer-commonjs">

```javascript:
const { createApp } = require("@istanbul/app")
const { createWsApp } = require("@istanbul/ws")

const app = createApp()
const ws = createWsApp()
app.register(ws)

ws.listen("view", (socket, req, res) => {
    res.reply("IstanbulJS'e Hoş Geldin!")
})

app.start()
```

</div>

</CodeGroupItem>

</CodeGroup>

Kodlar kısa olsa da yapabileceğimiz birçok şey var. <a href="/tr/introduction/#giris">Şimdi</a> başlayın.

<h3 class="text-center">Sponsorlar</h3>

<div class="sponsor-container">
<div class="sponsor-item sponsor-empty" v-for="i in 4" :key="i">
  <span class="question-mark">?</span>
</div>
<div class="sponsor-item sponsor-marketing">
  <span class="marketing-text">Sponsor olduğunuzda logonuz burada görüntülenecektir.</span>
</div>
<div class="sponsor-item sponsor-empty" v-for="i in 4" :key="i">
  <span class="question-mark">?</span>
</div>
</div>