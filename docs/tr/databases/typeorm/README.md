---
lang: tr-TR
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# TypeORM Paketi

::: tip Dokümantasyon henüz tamamlanmadı!

- Bu doküman geliştirilme aşamasındadır ve içeriği değişebilir.

:::

<span class="text-primary">IstanbulJS</span> esnek ve ölçeklenebilir bir çerçevedir ve bu esnekliği veritabanı kısmında da korur. İstediğiniz veritabanını, istediğiniz veritabanı sürücüsünü ve istediğiniz nodejs orm paketini kullanabilirsiniz.

Bu belgede, modüller aracılığıyla [TypeORM](https://typeorm.io/) ve <span class="text-primary">IstanbulJS</span> projesini birlikte nasıl kullanabileceğinizi anlatacağız.

## Kurulum

`istanbul/typeorm`, <span class="text-primary">IstanbulJS</span> projesinde TypeORM özelliklerini kullanmak üzere tasarlanmış bir pakettir. Bu paket TypeORM ve TypeORM bağımlılıklarını içerir. Ayrıca TypeORM kurmanıza gerek yoktur.

Ancak kullanacağınız veritabanı sürücüsünü seçmelisiniz. Örneğimizde mysql kullanacağız ve bu kadar. Bu yüzden `mysql2` sürücüsünü kullanacağız.

::: warning Küçük Bir Hatırlatma

- Burada yapılan işlemler TypeORM'nin kendi mantığı ile ilgilidir. Daha fazla bilgi için [tıklayın](https://typeorm.io/#installation).

:::

<code-group>

<code-group-item title="NPM" active>

```bash:no-line-numbers
npm install --save @istanbul/typeorm mysql2
```

</code-group-item>

<code-group-item title="YARN">

```bash:no-line-numbers
yarn add @istanbul/typeorm mysql2
```

</code-group-item>

</code-group>

## Kayıt

TypeORM kullandığımızı <span class="text-primary">IstanbulJS</span> uygulamamıza söylememiz gerekiyor. Bu, modüller içindeki depoyu `repository` kullanabilmemiz ve uygulama başlatıldığında veritabanına bağlanabilmemiz için gereklidir.

Projemizin ana dosyasına aşağıdaki kodları yazmalıyız.

<div class="prefer-typescript">

```typescript:no-line-numbers
// /main.ts
import { createTypeorm } from "@istanbul/typeorm";

app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);
```

Tamamlandığında, böyle görünecek

```typescript:no-line-numbers
// /main.ts
import { createApp, App } from "@istanbul/app";
import { createHttpServer } from "@istanbul/http";
import { createTypeorm } from "@istanbul/typeorm";
import { mainModule } from "./src/main.module";

const app: App = createApp(mainModule);
app.register(createHttpServer());
app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);

app.start();
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /main.js
import { createTypeorm } from "@istanbul/typeorm";

app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);
```

Tamamlandığında, böyle görünecek

```javascript:no-line-numbers
// /main.js
import { createApp } from "@istanbul/app";
import { createHttpServer } from "@istanbul/http";
import { createTypeorm } from "@istanbul/typeorm";
import { mainModule } from "./src/main.module";

const app = createApp(mainModule);
app.register(createHttpServer());
app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);

app.start();
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /main.js
const { createTypeorm } = require("@istanbul/typeorm");

app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);
```

Tamamlandığında, böyle görünecek

```javascript:no-line-numbers
// /main.js
const { createApp } = require("@istanbul/app");
const { createHttpServer } = require("@istanbul/http");
const { createTypeorm } = require("@istanbul/typeorm");
const { mainModule } = require("./src/main.module");

const app = createApp(mainModule);
app.register(createHttpServer());
app.register(
  createTypeorm({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "test",
  })
);

app.start();
```

</div>

### Bir Varlık Oluşturun

Burada yapacağımız iş TypeORM rehberlerindeki ile birebir aynı.

İşte basit bir varlık:


<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/product/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
```


</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/product/product.entity.js
import typeorm from "typeorm";

export const Product = new typeorm.EntitySchema({
    name: "Product",
    tableName: "product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        price: {
            type: "int",
            nullable: false
        }
    }
})
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/product/product.entity.js
const typeorm = require("typeorm");

const Product = new typeorm.EntitySchema({
    name: "Product",
    tableName: "product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        price: {
            type: "int",
            nullable: false
        }
    }
})

module.exports = {
    Product
}
```

</div>

## Modül Kaydı

Güzel, varlıklarımızı yarattık. Şimdi onları modüle kaydetmemiz gerekiyor.

`product.module` dosyamızı aşağıdaki gibi oluşturmalıyız.


<div class="prefer-typescript">

```typescript:no-line-numbers
import { createModule, Module } from "@istanbul/app";
import { registerEntity } from "@istanbul/typeorm";
import { Product } from "./product.entity";

export const productModule : Module = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
});
```

</div>


<div class="prefer-ecmascript">

```javascript:no-line-numbers
import { createModule } from "@istanbul/app";
import { registerEntity } from "@istanbul/typeorm";
import { Product } from "./product.entity";

export const productModule = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
});
```

</div>


<div class="prefer-commonjs">

```javascript:no-line-numbers
const { createModule } = require("@istanbul/app");
const { registerEntity } = require("@istanbul/typeorm");
const { Product } = require("./product.entity");

const productModule = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
});

module.exports = {
    productModule
}
```

</div>

Bu kadar! Şimdi modüllerle çalışmanın büyük bir avantajını göreceğiz. Her nesnemizi daha kolay yönetebiliriz. Ve modüller bizim için gerekli bağımlılıkları sağlıyor!

Nasıl? Okumaya devam et...

## Ürün Hizmeti Oluştur

Entity'mizi oluşturduk,
Neden? Niye? Basit bir soru. Tabii ki kullanmak için.

Varlıklarımızı depolarla kullanacağız. Ve depolarımızı hizmetler içinde kullanmalıyız. Hiçbir şekilde ağ geçidine ve denetleyiciye taşınmamalıdır.

Ürün varlığımızı kullanan hizmet dosyamız muhtemelen şöyle görünecektir


<div class="prefer-typescript">

```typescript:no-line-numbers
// /src/product/product.service.ts
import { Product } from "./product.entity";
import { Repository } from "typeorm";

export class ProductService {
  productRepository: Repository<Product>;

  constructor(params: { productRepository: Repository<Product> }) {
    this.productRepository = params.productRepository;
  }

  async createProduct(product: Product): Promise<Product> {
    const savedProduct = this.productRepository.create({
      name: product.name,
      price: product.price,
    });
    await this.productRepository.save(savedProduct);
    return savedProduct;
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }
}
```

Ve modüle kaydedin

```typescript:no-line-numbers
// /src/product/product.module.ts
// ...blabla
import { ProductService } from "./product.service";
// ...blabla

export const productModule : Module = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
  providers: [ProductService],
});
```

</div>



<div class="prefer-ecmascript">

```javascript:no-line-numbers
// /src/product/product.service.js
export class ProductService {
  productRepository;

  constructor(params) {
    this.productRepository = params.productRepository;
  }

  async createProduct(product) {
    const savedProduct = this.productRepository.create({
      name: product.name,
      price: product.price,
    });
    await this.productRepository.save(savedProduct);
    return savedProduct;
  }

  async getProductById(id) {
    return this.productRepository.findOneBy({ id });
  }
}
```

Ve modüle kaydedin

```javascript:no-line-numbers
// /src/product/product.module.js
// ...blabla
import { ProductService } from "./product.service";
// ...blabla

export const productModule = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
  providers: [ProductService],
});
```

</div>



<div class="prefer-commonjs">

```javascript:no-line-numbers
// /src/product/product.service.js
class ProductService {
  productRepository;

  constructor(params) {
    this.productRepository = params.productRepository;
  }

  async createProduct(product) {
    const savedProduct = this.productRepository.create({
      name: product.name,
      price: product.price,
    });
    await this.productRepository.save(savedProduct);
    return savedProduct;
  }

  async getProductById(id) {
    return this.productRepository.findOneBy({ id });
  }
}

module.exports = {
    ProductService
}
```

Ve modüle kaydedin

```javascript:no-line-numbers
// /src/product/product.module.js
// ...blabla
const { ProductService } = require("./product.service");
// ...blabla

const productModule = createModule("product", {
  imports: [registerEntity("productRepository", Product)],
  providers: [ProductService],
});

module.exports = {
    productModule
}
```

</div>


Bu kadar! Basit bir mysql bağlantısı kurduk, bir varlık oluşturduk ve bu varlık için bir servis dosyası yazdık.

Gerçek hayatta da bunu kontrollere bağlıyoruz. Ancak yazıyı uzatmamak adına burada anlatmayacağız. Bu makaledeki http paketiyle kullanılan örneğin bir örneği [burada bulunabilir](https://github.com/istanbulnode/app/tree/main/examples/01-typeorm).