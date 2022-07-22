---
lang: tr-TR
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# Modül Tabanlı Mimari

::: tip Dokümantasyon henüz tamamlanmadı!

- Bu doküman geliştirilme aşamasındadır ve içeriği değişebilir.

:::

## Modül Tabanlı Mimari Nedir?

Modül Tabanlı Mimari (MTM), bir programın işlevselliğini bağımsız bileşenlere ayırmak için modülleri kullanan bir yazılım mimarisidir. Modüller, bir program oluşturmak için kullanılabilecek bağımsız işlevsellik parçalarıdır.

<span class="text-primary">IstanbulJS</span>, orta ve büyük ölçekli uygulamalar için nesne yönelimli programlamayı şiddetle tavsiye eder. Ancak işiniz sadece request listener oluşturmaksa size çok daha sade bir altyapı sağlar. Modül Tabanlı Mimari kullanmak istemiyorsanız bir sonraki adıma geçebilirsiniz.

Modül tabanlı mimari ile programınızdaki her nesne bir modül haline gelir. Tıpkı [`veritabanı normalleştirmesi`](https://en.wikipedia.org/wiki/Database_normalization) gibi. Ürün bir nesnedir ve bir modülü olmalıdır. Kategori bir nesnedir ve bir modülü olmalıdır. Bu, programlarınızı daha sürdürülebilir, okunabilir ve esnek hale getirir.

<span class="text-primary">IstanbulJS</span>'in en önemli özelliği esnek ve aşamalı bir çerçeve olmasıdır. ve bunu modül tabanlı mimariye borçluyuz. Çünkü çerçeveyi geliştirirken bu felsefeyi kullandık.

## Önerilen Klasör Yapısı

Öncelikle bu konuda tamamen özgürsünüz. Ancak emin değilseniz, Önerilen klasör yapısını kullanabilirsiniz.

```:satırsız sayılar
📦 istanbul-projesi
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

Peki bunlar ne anlama geliyor?

- `src` kaynak kod klasörüdür.
- `product` ürün klasörüdür.
- `category` kategori klasörüdür.
- `product.controller.[js,ts]` ürün kontrolörüdür. (http dinleyicileri için)
- `product.gateway.[js,ts]` ürün ağ geçididir. (websocket dinleyicileri için)
- `product.entity.[js,ts]` ürün varlığıdır. (veritabanı tabloları için)
- `product.module.[js,ts]` ürün modülüdür.
- `product.service.[js,ts]` ürün hizmetidir. (veritabanı hizmetleri için)
- `category.controller.[js,ts]` kategori kontrolörüdür.
- `category.gateway.[js,ts]` kategori ağ geçididir.
- `category.entity.[js,ts]` kategori varlığıdır.
- `category.module.[js,ts]` kategori modülüdür.
- `category.service.[js,ts]` kategori hizmetidir.
- `main.module.[js,ts]` ana modüldür. (uygulama modülleri kaydı için)
- `[jsconfig,tsconfig].json` yapılandırma dosyasıdır. (daktilo yazısı veya javascript için)
- `main.[js,ts]` ana dosyadır. (uygulama için)
- `package.json` paket dosyasıdır.

## Bir Modül Oluştur

Bir modül oluşturmak için aşağıdaki gibi bir kod yazmanız gerekecek. Bunların ne anlama geldiğini birazdan açıklayacağız.

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule, Module } from "@istanbul/app"
import { ProductService } from "./product.service"

export const productModule : Module = createModule("product", {
    providers: [ProductService],
    exports: [ProductService]
})
```

</div>

<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@istanbul/app"
import { ProductService } from "./product.service"

export const productModule = createModule("product", {
    providers: [ProductService],
    exports: [ProductService]
})
```

</div>

<div class="prefer-commonjs">

```javascript:no-line-numbers
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

</div>

Modüller arasındaki ilişkiyi anlamak için `category.module` dosyamız muhtemelen şöyle görünecektir.

::: warning Uyarı!

- Provider'ların sırası önemlidir. Burada `CategoryService` dosyası `CategoryController` içinde kullanılıyorsa daha önce yazılması gerekir. Bağımlı sağlayıcı, sağlayıcısından daha önce yazıldıysa bağımlılığı başarıyla çözülemez.

:::



<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule, Module } from "@istanbul/app"
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
import { createModule } from "@istanbul/app"
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

</div>

Ve son olarak, modül tabanlı mimaride bir ana modüle ihtiyacımız var. Bunun nedeni, <span class="text-primary">IstanbulJS</span>'in modüller arasında parçadan bütüne bir ilişki kurmasıdır.

::: warning Uyarı!

Buradaki import sırası önemlidir. Öncelikle diğer modüllerde kullanılan modüller yazılmalıdır. Aksi takdirde, bağımlılıklar düzgün bir şekilde ele alınamaz.

:::


<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule, Module } from "@istanbul/app"
import { productModule } from "./product/product.module"
import { categoryModule } from "./category/category.module"

export const mainModule : Module = createModule("main", {
    imports: [productModule, categoryModule]
})
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@istanbul/app"
import { productModule } from "./product/product.module"
import { categoryModule } from "./category/category.module"

export const mainModule = createModule("main", {
    imports: [productModule, categoryModule]
})
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
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

</div>

Ve kök dizindeki ana dosyamız şöyle görünecek.

`createApp` fonksiyonu, isteğe bağlı bir `mainModule` alır. `createApp` işlevine bir modül sağlarsanız, <span class="text-primary">IstanbulJS</span>, modül tabanlı bir mimari kullanıyormuşsunuz gibi davranır.

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createApp, App } from "@istanbul/app"
import { mainModule } from "./src/main.module"

const app : App = createApp(mainModule);
app.start();
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createApp } from "@istanbul/app"
import { mainModule } from "./src/main.module"

const app = createApp(mainModule);
app.start();
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createApp } = require("@istanbul/app")
const { mainModule } = require("./src/main.module")

const app = createApp(mainModule);
app.start();
```

</div>

Bu kadar! Basit bir modül tabanlı sistem bu şekilde çalışır.

Canlı örnek yakında GitHub'da yayınlanacak.