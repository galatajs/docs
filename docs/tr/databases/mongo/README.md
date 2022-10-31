---
lang: tr-TR
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# MongoDB Paketi

::: tip Dokümantasyon henüz tamamlanmadı!

- Bu doküman geliştirilme aşamasındadır ve içeriği değişebilir.

:::

<span class="text-primary">GalataJS</span> esnek ve ölçeklenebilir bir çerçevedir ve bu esnekliği veritabanı kısmında da korur. İstediğiniz veritabanını, istediğiniz veritabanı sürücüsünü ve istediğiniz nodejs orm paketini kullanabilirsiniz.

Bu belgede, [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) ve <span class="text-primary">GalataJS</span>'yi modüller aracılığıyla birlikte nasıl kullanabileceğinizi açıklayacağız.

## Kurulum

`galatajs/mongodb` paketi, mongodb sürücüsünü <span class="text-primary">GalataJS</span>'e entegre etmek için geliştirildi. Sürücüyü yerleşik olarak getirmez, harici olarak kurulması gerekir.


<code-group>

<code-group-item title="NPM" active>

```bash:no-line-numbers
npm install --save @galatajs/mongodb mongodb
```

</code-group-item>

<code-group-item title="YARN">

```bash:no-line-numbers
yarn add @galatajs/mongodb mongodb
```

</code-group-item>

</code-group>

## Kayıt

<span class="text-primary">GalataJS</span> uygulamamıza MongoDB kullandığımızı söylememiz gerekiyor. Bu, modüller içindeki depoyu kullanabilmemiz, koleksiyonları modüllerimize dinamik olarak sağlayabilmemiz ve uygulama başlatıldığında veritabanına bağlanabilmemiz için gereklidir.

Projemizin ana dosyasına aşağıdaki kodları yazmalıyız.


<div class="prefer-typescript">

```typescript:no-line-numbers
// /main.ts
import { createMongodbApp } from "@galatajs/mongodb";

app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
```

Tamamlandığında şu şekilde görünecektir

```typescript:no-line-numbers
// /main.ts
import { createApp, App } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { createMongodbApp } from "@galatajs/mongodb";
import { mainModule } from "./src/main.module";

const app : App = createApp(mainModule);
app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
app.register(createHttpServer());

app.start();
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /main.js
import { createMongodbApp } from "@galatajs/mongodb";

app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
```

Tamamlandığında şu şekilde görünecektir

```javascript:no-line-numbers
// /main.js
import { createApp } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { createMongodbApp } from "@galatajs/mongodb";
import { mainModule } from "./src/main.module";

const app = createApp(mainModule);
app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
app.register(createHttpServer());

app.start();
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /main.js
const { createMongodbApp } = require("@galatajs/mongodb");

app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);
```

Tamamlandığında şu şekilde görünecektir

```javascript:no-line-numbers
// /main.js
const { createApp } = require("@galatajs/app");
const { createHttpServer } = require("@galatajs/http");
const { createMongodbApp } = require("@galatajs/mongodb");
const { mainModule } = require("./src/main.module");

const app = createApp(mainModule);
app.register(createHttpServer());
app.register(
  createMongodbApp({
    url: "your_mongodb_uri",
  })
);

app.start();
```

</div>

### Bir Varlık Oluşturun

MongoDB sürücüsü, TypeORM ve Mongoose'da olduğu gibi JavaScript tarafında şemalar oluşturmanıza pek izin vermiyor.

<div class="prefer-typescript">

Ancak bunu arayüz ile yapacağız ve küçük bir fark gibi görünse de herhangi bir eksiğimiz olmayacak.

MongoDB koleksiyonları geneldir ve Belgeler arabirimini genişleten bir arabirim bekler.

İşte basit bir varlık:

```typescript:no-line-numbers
// /src/product/product.entity.ts
import { Document, ObjectId } from "mongodb";

export interface Product {
  _id?: ObjectId;
  name: string;
  price: number;
}

export interface ProductSchema extends Document, Product {}
```

</div>

<div class="prefer-ecmascript prefer-commonjs">

So unfortunately you cannot create a schema in projects where you use JavaScript.

</div>

## Modül Kaydı

MongoDB Koleksiyonlarımızı modüllerimizde kullanmak için onları kaydetmemiz gerekiyor. <span class="text-primary">GalataJS</span> sizin için gerekli bağımlılığı otomatik olarak sağlayacaktır.

`product.module` dosyamızı aşağıdaki gibi oluşturmalıyız.

<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule } from "@galatajs/app";
import { registerCollection } from "@galatajs/mongodb";

export const productModule = createModule("product", {
  imports: [registerCollection("products")],
});

```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@galatajs/app";
import { registerCollection } from "@galatajs/mongodb";

export const productModule = createModule("product", {
  imports: [registerCollection("products")],
});
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createModule } = require("@galatajs/app");
const { registerCollection } = require("@galatajs/mongodb");

const productModule = createModule("product", {
  imports: [registerCollection("products")],
});

module.exports = {
    productModule
}
```

</div>

Bu kadar! Şimdi modüllerle çalışmanın büyük bir avantajını göreceğiz. Her nesnemizi daha kolay yönetebiliriz. Ve modüller bizim için gerekli bağımlılıkları sağlıyor!

Nasıl? Okumaya devam et...

## Ürün Hizmeti Oluştur

Mongo Koleksiyonumuzu kaydettik,
Neden? Niye? Basit bir soru. Tabii ki kullanmak için.

Koleksiyonlarımızı depolarla kullanacağız. Ve depolarımızı hizmetler içinde kullanmalıyız. Hiçbir şekilde ağ geçidine ve denetleyiciye taşınmamalıdır.

Ürün varlığımızı kullanan hizmet dosyamız muhtemelen şöyle görünecektir


<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/product/product.service.ts
import { Collection, InsertOneResult, ObjectId } from "mongodb";
import { Product, ProductSchema } from "./product.entity";

export class ProductService {
  productsCollection: Collection<ProductSchema>;

  constructor(params: { productsCollection: Collection<ProductSchema> }) {
    this.productsCollection = params.productsCollection;
  }

  async createProduct(product: Product): Promise<ObjectId> {
    const productResult: InsertOneResult<ProductSchema> =
      await this.productsCollection.insertOne(product);
    return productResult.insertedId;
  }

  async getAllProducts(): Promise<ProductSchema[]> {
    const findResult: ProductSchema[] = await this.productsCollection
      .find()
      .toArray();
    return findResult;
  }

  async getProductById(id: string): Promise<ProductSchema | null> {
    const findResult: ProductSchema | null =
      await this.productsCollection.findOne({ _id: new ObjectId(id) });
    return findResult;
  }
}
```

Ve modülünüze kaydedin

```typescript:no-line-numbers
// /src/product/product.module.ts
// ...blabla
import { ProductService } from "./product.service";
// ...blabla

export const productModule : Module = createModule("product", {
  imports: [registerCollection("products")],
  providers: [ProductService],
});
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/product/product.service.js
import { ObjectId } from "mongodb";

export class ProductService {
  productsCollection

  constructor(params) {
    this.productsCollection = params.productsCollection;
  }

  async createProduct(product) {
    const productResult = await this.productsCollection.insertOne(product);
    return productResult.insertedId;
  }

  async getAllProducts(){
    const findResult = await this.productsCollection
      .find()
      .toArray();
    return findResult;
  }

  async getProductById(id) {
    const findResult = await this.productsCollection.findOne({ _id: new ObjectId(id) });
    return findResult;
  }
}
```

Ve modülünüze kaydedin

```javascript:no-line-numbers
// /src/product/product.module.js
// ...blabla
import { ProductService } from "./product.service";
// ...blabla

export const productModule = createModule("product", {
  imports: [registerCollection("products")],
  providers: [ProductService],
});
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/product/product.service.js
const { ObjectId } = require("mongodb");

class ProductService {
  productsCollection

  constructor(params) {
    this.productsCollection = params.productsCollection;
  }

  async createProduct(product) {
    const productResult = await this.productsCollection.insertOne(product);
    return productResult.insertedId;
  }

  async getAllProducts(){
    const findResult = await this.productsCollection
      .find()
      .toArray();
    return findResult;
  }

  async getProductById(id) {
    const findResult = await this.productsCollection.findOne({ _id: new ObjectId(id) });
    return findResult;
  }
}

module.exports = {
    ProductService
}
```

Ve modülünüze kaydedin

```javascript:no-line-numbers
// /src/product/product.module.js
// ...blabla
const { ProductService } = require("./product.service");
// ...blabla

const productModule = createModule("product", {
  imports: [registerCollection("products")],
  providers: [ProductService],
});
module.exports = {
    productModule
}
```

</div>

Bu kadar! Basit bir mongodb bağlantısı kurduk, bir koleksiyonun modülümüze nasıl entegre edileceğini öğrendik ve bu koleksiyon için bir servis dosyası yazdık.

Gerçek hayatta bunu kontrolörlere bağlıyoruz. Ancak yazıyı uzatmamak adına burada anlatmayacağız. Bu makaledeki http paketiyle kullanılan örneğe bir örnek [burada bulunabilir](https://github.com/galatajs/app/tree/main/examples/02-mongodb).