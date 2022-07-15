---
lang: tr-TR
footer: false
lastUpdated: true
contributors: true
next:
  text: İstanbul'un Yaşam Döngüsü
  link: /tr/essentials/lifecycle.html
---

# Giriş

::: tip Üretim için hazır değil!

- <span class="text-primary">Istanbul</span> hala geliştirme aşamasındadır ve muhtemelen <span class="text-primary">2023 yılının 3. Çeyreği</span>'nde kararlı sürümü yayınlanacaktır. Bu zamana kadar üretim için kullanmanızı önermiyoruz.

:::

## İstanbul Çerçevesi Nedir?

Istanbul, sunucu tarafında çalışan ve NodeJS API'lerini kullanarak daha zahmetsizce kod yazmanıza olanak sağlayan bir çerçevedir. Sunucu üzerinde yapabileceğiniz her şey için istediğiniz ölçekte altyapı sağlar.

İstanbul paketleri <a href="https://en.wikipedia.org/wiki/Divide_and_rule" target="_blank">böl ve yönet mantığına</a> dayanmaktadır ve her iş için bir paket vardır `-Bu nokta NodeJS modüllerine benzer-`. Paketler bir araya geldikçe İstanbul Çerçevesi ortaya çıkıyor. Bunu daha iyi yönetim için ülkelerin illere/eyaletlere bölünmesine benzetebiliriz. Bu özellik sayesinde İstanbul istediğiniz boyutta gelir. Kullanmadığınız hiçbir şey için kod karmaşası olmaz.

## Bizim Felsefemiz

Hayatımızda yaptığımız hemen hemen her şeyi bir ihtiyaç için yapıyoruz. Açlığımızı gidermek için yiyoruz ve uyku ihtiyacımızı gidermek için uyuyoruz. Aynı şekilde yaptığımız işi de bir ihtiyaç için yapıyoruz. Kullanıcıların web sitenizden sohbet etmesi, veri depolaması ve yönetmesi, bir etkinlik veya birçok ihtiyaç için girdi toplaması için bir sunucu üzerinde belirli eylemler gerçekleştiriyoruz.

Buradaki amacımız tam da ihtiyacımız olan şey. Ve İstanbul, ihtiyacınız olan her şeyi desteklemek için geliştirildi.

- bir sohbet uygulamasına mı ihtiyacınız var?
- bir http uygulamasına mı ihtiyacınız var?
- bir websocket uygulamasına mı ihtiyacınız var?

sorular artırılabilir. İstanbul, `yazamadıklarımız da dahil` tüm bu soruların doğru cevabıdır. <span class="text-primary">istanbul-creator</span> ile istediğiniz gereksinimleri seçebilir ve sunucunuza uygun şablonu yükleyebilirsiniz.

<small>İstanbul; NodeJS, VueJS, NestJS, Express ve NestJS'den esinlenilmiştir.</small>

## İstanbul Projenizi Kurun

::: tip Gerekli Bağımlılık

- Bir sonraki adımı gerçekleştirmek için bilgisayarınızda <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> kurulu olmalıdır.

:::

Projenizi oluşturmak istediğiniz dizinde aşağıdaki komutu çalıştırın.

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash:no-line-numbers
yarn init istanbul
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash:no-line-numbers
npm init istanbul
```

  </CodeGroupItem>
</CodeGroup>

Ardından aşağıdaki gibi sorular sorulacaktır. Projenize uygun cevapları girin, projenizin temeli oluşturulsun!

<small>`create-istanbul` paketi dil destekli olmadığı için aşağıdaki alanın çevirisi yapılmamıştır.</small>

<div class="language-sh"><pre><code><span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Project name: <span style="color:#888;">… <span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span></span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need TypeScript? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need HTTP? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need Websocket? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need validation with JOI? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need manage business logic? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need in-app events? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need provide-inject? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need i18n? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need integration tests with Jest? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need module-based architecture? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span></span>
<span style="color:#A6ACCD;">Scaffolding project in ./<span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span>...</span>
<span style="color:#A6ACCD;">Done.</span></code></pre></div>

Bu aşamayı tamamladığınızda <span class="text-primary">İstanbul</span> size temel bir yapı sağlayacaktır. Bundan sonra, ihtiyaçlarınıza göre paketlerin kendi kılavuzlarını takip edebilir veya <span class="text-primary">İstanbul</span> hakkında daha detaylı bilgi için bir sonraki belgeye geçebilirsiniz.