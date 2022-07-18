---
lang: tr-TR
footer: false
lastUpdated: true
contributors: true
---

# Modül Tabanlı Mimari

::: tip Dokümantasyon henüz tamamlanmadı!

- Bu doküman geliştirilme aşamasındadır ve içeriği değişebilir.

:::

## Modül Tabanlı Mimari Nedir?

Modül Tabanlı Mimari (MTM), bir programın işlevselliğini bağımsız bileşenlere ayırmak için modülleri kullanan bir yazılım mimarisidir. Modüller, bir program oluşturmak için kullanılabilecek bağımsız işlevsellik parçalarıdır.

<span class="text-primary">IstanbulJS</span>, orta ve büyük ölçekli uygulamalar için nesne yönelimli programlamayı şiddetle tavsiye eder. Ancak işiniz sadece request listener oluşturmaksa size çok daha sade bir altyapı sağlar.

Modül tabanlı mimari ile programınızdaki her nesne bir modül haline gelir. Tıpkı [`veritabanı normalleştirmesi`](https://en.wikipedia.org/wiki/Database_normalization) gibi. Ürün bir nesnedir ve bir modülü olmalıdır. Kategori bir nesnedir ve bir modülü olmalıdır. Bu, programlarınızı daha sürdürülebilir, okunabilir ve esnek hale getirir.

<span class="text-primary">IstanbulJS</span>'in en önemli özelliği esnek ve aşamalı bir çerçeve olmasıdır. ve bunu modül tabanlı mimariye borçluyuz. Çünkü çerçeveyi geliştirirken bu felsefeyi kullandık.