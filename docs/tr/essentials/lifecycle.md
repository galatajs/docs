---
lang: tr-TR
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# İstanbul'un Yaşam Döngüsü

Dünyadaki hemen hemen her şeyin bir yaşam döngüsü vardır. Örneğin insan doğar, yaşar ve ölür. Yemek yapıyoruz, yiyoruz ve temizliyoruz. Bütün bunlar kendi içinde yaşam döngüsüdür.

<span class="text-primary">IstanbulJS</span> bir NodeJS Framework'ü olduğundan, olaylar sunucu tarafı olaylar olacaktır. `onAppStarted` ve `onAppFinished` gibi. Ayrıca <span class="text-primary">IstanbulJS</span>, bazı NodeJS sinyallerini de kullanmanıza olanak tanır.

## NodeJS Sinyalleri Nedir?

Uygulamanız çeşitli nedenlerle kullanıcı veya sistem tarafından kapatılabilir. NodeJS bu işlemleri sinyallerle yönetir ve çeşitli sinyaller size çeşitli bilgiler verir. Daha fazla bilgi için [lütfen burayı ziyaret edin](https://nodejs.org/api/process.html#process_signal_events).

## İstanbul'un Yaşam Döngüsü Sırası

<span class="text-primary">IstanbulJS</span>, modül tabanlı mimari kullandığınızda yaşam döngüsünü kullanmanıza olanak tanır. Modüldeki tüm sağlayıcılar (isterlerse) bu kancaları kullanabilirler. Aşağıda bunun şeması verilmiştir ve daha aşağıda her biri ayrı ayrı açıklanmıştır.

<div class="light-content">
    <img src="/img/diagrams/istanbuljs-lifecycle-light.png" />
</div>

<div class="dark-content">
<img src="/img/diagrams/istanbuljs-lifecycle-dark.png" />
</div>

### appCreated

`createApp` işlevi çağrıldığı anda yürütülür ve çok kullanışlı değildir.

### onModuleInstalled

Modül kurulur kurulmaz çalışır. Bu, `onAppStarted`'dan biraz önce çalışır ve modülünüz bir veritabanı modülüyse, burada diğer modüllerin ve uygulamanın oluşturulmasını geciktirebilirsiniz. <span class="text-primary">IstanbulJS</span>, modülün yüklenmesini tamamen bekleyecektir.

İşte bir örnek

<div class="prefer-typescript">

TypeScript kullandığınız için, kancaların arabirimlerini uygulamanız önerilir.

```typescript:no-line-numbers
import { onModuleInstalled } from "@istanbul/app";

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

Bu sınıfı sağlayıcı olarak bir modüle geçirmeniz gerekiyor.

`onModuleInstalled`'ın güzel yanı; mevcut modülün sağlayıcılarını mevcut sağlayıcıya parametre olarak göndermesidir.

örneğin aşağıdaki gibi bir modülünüz var

```typescript:no-line-numbers
import { createModule, Module } from "@istanbul/app";
import { productModule } from "../product/product.module";

export const categoryModule : Module = createModule("category", {
    imports: [ productModule ],
    providers: [ ProviderA, ProviderB, ProviderC ],
    exports: [ ProviderB ]
})
```

Bu durumda, aşağıdaki adımlar uygulanır:

- `productModule` yükleyin
- `productModule` dışa aktarmalarını içeren bir sağlayıcı nesnesi oluşturun
- sağlayıcı nesnesine `ProviderA` örneğini ekleyin
- sağlayıcı nesnesine `ProviderB` örneğini ekleyin
- sağlayıcı nesnesine `ProviderC` örneğini ekleyin

Yani `ProviderC`, `ProviderB`'ye sahiptir, ancak `ProviderB`, `ProviderC` içermez.

Dahası

```typescript:no-line-numbers
// providerA.ts
import { onModuleInstalled } from "@istanbul/app";
import { ProductService } from "../product/product.service";

export class ProviderA implements onModuleInstalled {

    onModuleInstalled(params: {productService: ProductService}) : <void> {
        // do something
    }
}
```

```typescript:no-line-numbers
// providerB.ts
import { onModuleInstalled } from "@istanbul/app";
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
import { onModuleInstalled } from "@istanbul/app";
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

Bu sınıfı sağlayıcı olarak bir modüle geçirmeniz gerekiyor.

`onModuleInstalled`'ın güzel yanı; mevcut modülün sağlayıcılarını mevcut sağlayıcıya parametre olarak göndermesidir.

örneğin aşağıdaki gibi bir modülünüz var

```javascript:no-line-numbers
import { createModule } from "@istanbul/app";
import { productModule } from "../product/product.module";

export const categoryModule = createModule("category", {
    imports: [ productModule ],
    providers: [ ProviderA, ProviderB, ProviderC ],
    exports: [ ProviderB ]
})
```

Bu durumda, aşağıdaki adımlar uygulanır:

- `productModule` yükleyin
- `productModule` dışa aktarmalarını içeren bir sağlayıcı nesnesi oluşturun
- sağlayıcı nesnesine `ProviderA` örneğini ekleyin
- sağlayıcı nesnesine `ProviderB` örneğini ekleyin
- sağlayıcı nesnesine `ProviderC` örneğini ekleyin

Yani `ProviderC`, `ProviderB`'ye sahiptir, ancak `ProviderB`, `ProviderC` içermez.

Dahası


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

Bu sınıfı sağlayıcı olarak bir modüle geçirmeniz gerekiyor.

`onModuleInstalled`'ın güzel yanı; mevcut modülün sağlayıcılarını mevcut sağlayıcıya parametre olarak göndermesidir.

örneğin aşağıdaki gibi bir modülünüz var

```javascript:no-line-numbers
const { createModule } = require("@istanbul/app")
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

Bu durumda, aşağıdaki adımlar uygulanır:

- `productModule` yükleyin
- `productModule` dışa aktarmalarını içeren bir sağlayıcı nesnesi oluşturun
- sağlayıcı nesnesine `ProviderA` örneğini ekleyin
- sağlayıcı nesnesine `ProviderB` örneğini ekleyin
- sağlayıcı nesnesine `ProviderC` örneğini ekleyin

Yani `ProviderC`, `ProviderB`'ye sahiptir, ancak `ProviderB`, `ProviderC` içermez.

Dahası


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

Uygulama başlatıldığında ve tüm modüller kurulduğunda çalışır.

Örnek Kullanım

<div class="prefer-typescript">

TypeScript kullandığınız için, kancaların arabirimlerini uygulamanız önerilir.

```typescript:no-line-numbers
import { OnAppStarted } from "@istanbul/app"

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

Uygulama, sistem veya kullanıcı tarafından kapatıldığında ve `app.close()` işlevi çağrıldığında çalışır. NodeJS'nin sinyallerini parametre olarak gönderir.

Örnek Kullanım

<div class="prefer-typescript">

TypeScript kullandığınız için, kancaların arabirimlerini uygulamanız önerilir.

```typescript:no-line-numbers
import { OnAppFinished } from "@istanbul/app"

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