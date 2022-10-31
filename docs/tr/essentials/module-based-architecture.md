---
lang: tr-TR
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# Modül Tabanlı Mimari

::: tip Dokümantasyon henüz tamamlanmadı!

- Bu doküman geliştirilme aşamasındadır ve içeriği değişebilir.

:::

## Modül Tabanlı Mimari Nedir?

Modül Tabanlı Mimari (MTM), bir programın işlevselliğini bağımsız bileşenlere ayırmak için modülleri kullanan bir yazılım mimarisidir. Modüller, bir program oluşturmak için kullanılabilecek bağımsız işlevsellik parçalarıdır.

<span class="text-primary">GalataJS</span>, orta ve büyük ölçekli uygulamalar için nesne yönelimli programlamayı şiddetle tavsiye eder. Ancak işiniz sadece request listener oluşturmaksa size çok daha sade bir altyapı sağlar. Modül Tabanlı Mimari kullanmak istemiyorsanız bir sonraki adıma geçebilirsiniz.

Modül tabanlı mimari ile programınızdaki her nesne bir modül haline gelir. Tıpkı [`veritabanı normalleştirmesi`](https://en.wikipedia.org/wiki/Database_normalization) gibi. Ürün bir nesnedir ve bir modülü olmalıdır. Kategori bir nesnedir ve bir modülü olmalıdır. Bu, programlarınızı daha sürdürülebilir, okunabilir ve esnek hale getirir.

<span class="text-primary">GalataJS</span>'in en önemli özelliği esnek ve aşamalı bir çerçeve olmasıdır. ve bunu modül tabanlı mimariye borçluyuz. Çünkü çerçeveyi geliştirirken bu felsefeyi kullandık.

## Önerilen Klasör Yapısı

Öncelikle bu konuda tamamen özgürsünüz. Ancak emin değilseniz, Önerilen klasör yapısını kullanabilirsiniz.

<div class="prefer-typescript">

```:no-line-numbers
📦 galatajs-projesi
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
📦 galatajs-projesi
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


Peki bunlar ne anlama geliyor?


<div class="prefer-typescript">

- `src` kaynak kod klasörüdür.
- - `product` ürün klasörüdür.
- - - `product.controller.ts` ürün kontrolörüdür. (http dinleyicileri için)
- - - `product.gateway.ts` ürün ağ geçididir. (websocket dinleyicileri için)
- - - `product.entity.ts` ürün varlığıdır. (veritabanı tabloları için)
- - - `product.module.ts` ürün modülüdür.
- - - `product.service.ts` ürün hizmetidir. (veritabanı hizmetleri için)
- - `category` kategori klasörüdür.
- - - `category.controller.ts` kategori kontrolörüdür.
- - - `category.gateway.ts` kategori ağ geçididir.
- - - `category.entity.ts` kategori varlığıdır.
- - - `category.module.ts` kategori modülüdür.
- - - `category.service.ts` kategori hizmetidir.
- - `main.module.ts` ana modüldür. (uygulama modülleri kaydı için)
- `tsconfig.json` yapılandırma dosyasıdır. (typescript için)
- `main.ts` ana dosyadır. (uygulama için)
- `package.json` paket dosyasıdır.

</div>

<div class="prefer-ecmascript prefer-commonjs">

- `src` kaynak kod klasörüdür.
- - `product` ürün klasörüdür.
- - - `product.controller.js` ürün kontrolörüdür. (http dinleyicileri için)
- - - `product.gateway.js` ürün ağ geçididir. (websocket dinleyicileri için)
- - - `product.entity.js` ürün varlığıdır. (veritabanı tabloları için)
- - - `product.module.js` ürün modülüdür.
- - - `product.service.js` ürün hizmetidir. (veritabanı hizmetleri için)
- - `category` kategori klasörüdür.
- - - `category.controller.js` kategori kontrolörüdür.
- - - `category.gateway.js` kategori ağ geçididir.
- - - `category.entity.js` kategori varlığıdır.
- - - `category.module.js` kategori modülüdür.
- - - `category.service.js` kategori hizmetidir.
- - `main.module.js` ana modüldür. (uygulama modülleri kaydı için)
- `jsconfig.json` yapılandırma dosyasıdır. (javascript için)
- `main.js` ana dosyadır. (uygulama için)
- `package.json` paket dosyasıdır.

</div>

## Bir Modül Oluştur

Bir modül oluşturmak için aşağıdaki gibi bir kod yazmanız gerekecek. Bunların ne anlama geldiğini birazdan açıklayacağız.

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

Modüller arasındaki ilişkiyi anlamak için `category.module` dosyamız muhtemelen şöyle görünecektir.

::: warning Uyarı!

- Provider'ların sırası önemlidir. Burada `CategoryService` dosyası `CategoryController` içinde kullanılıyorsa daha önce yazılması gerekir. Bağımlı sağlayıcı, sağlayıcısından daha önce yazıldıysa bağımlılığı başarıyla çözülemez.

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

Ve son olarak, modül tabanlı mimaride bir ana modüle ihtiyacımız var. Bunun nedeni, <span class="text-primary">GalataJS</span>'in modüller arasında parçadan bütüne bir ilişki kurmasıdır.

::: warning Uyarı!

Buradaki import sırası önemlidir. Öncelikle diğer modüllerde kullanılan modüller yazılmalıdır. Aksi takdirde, bağımlılıklar düzgün bir şekilde ele alınamaz.

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

Ve kök dizindeki ana dosyamız şöyle görünecek.

`createApp` fonksiyonu, isteğe bağlı bir `mainModule` alır. `createApp` işlevine bir modül sağlarsanız, <span class="text-primary">GalataJS</span>, modül tabanlı bir mimari kullanıyormuşsunuz gibi davranır.

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

Bu kadar! Basit bir modül tabanlı sistem bu şekilde çalışır.

Canlı örnek yakında GitHub'da yayınlanacak.