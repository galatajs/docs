---
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# Istanbul'a Katkıda Bulunun

<span class="text-primary">IstanbulJS</span> için katkıda bulunmak istediğiniz için teşekkür ederiz!

Aşağıdaki adımları izleyerek <span class="text-primary">IstanbulJS</span> için katkıda bulunabilirsiniz.

## İçindekiler


## Contents

- [Istanbul'a Katkıda Bulunun](#istanbula-katkıda-bulunun)
  - [İçindekiler](#i̇çindekiler)
  - [Contents](#contents)
  - [Ön Koşullar](#ön-koşullar)
  - [Katkıda Bulunmadan Önce](#katkıda-bulunmadan-önce)
    - [Repo'yu Forklayın](#repoyu-forklayın)
    - [Bağımlılıkları Yükleyin](#bağımlılıkları-yükleyin)
    - [Issue var mı kontrol edin](#issue-var-mı-kontrol-edin)
    - [Issue oluşturun](#issue-oluşturun)
    - [Sorunun Size atanmasını bekleyin](#sorunun-size-atanmasını-bekleyin)
    - [Branch Oluşturun](#branch-oluşturun)
  - [Düzenlemeleri Yapın](#düzenlemeleri-yapın)
  - [Test Edin](#test-edin)
  - [Değişiklikleri Commitleyin](#değişiklikleri-commitleyin)
  - [Değişiklikleri Pushlayın](#değişiklikleri-pushlayın)
  - [Pull Request Oluşturun](#pull-request-oluşturun)
  - [Değerlendirme Süreci](#değerlendirme-süreci)

## Ön Koşullar

- [Node.js](https://nodejs.org/en/) >= 18
- [Git](https://git-scm.com/)

## Katkıda Bulunmadan Önce

Proje kod yamalarını kabul eder, ancak her şeyin iyi koordine edilmesi için önemli bir değişiklik yapmadan önce çalışmaya başlamadan önce bunun hakkında konuşmanız önerilir. Katkıda bulunmak için önceden iş takipçisindeki bir sorunu açmanız veya mevcut bir sorunu almanız önerilir.

### Repo'yu Forklayın

GitHub'da depoyu forklayın ve yerel olarak klonlayın.

```bash:no-line-numbers
git clone <project_url>
```

### Bağımlılıkları Yükleyin

```bash:no-line-numbers
npm install
```

### Issue var mı kontrol edin

Katkıda bulunmak için zaten bir fikriniz varsa veya çalışmak için bir şey bulmak istiyorsanız, katkınızla ilgili mevcut sorunları iş takipçisinde kontrol edin. Bir mevcut sorun bulursanız, yorum bırakarak onu alın.

### Issue oluşturun

Eğer bir sorun bulamazsanız, bir sorun oluşturun. Sorununuzun başlığı, sorununuzun ne olduğunu açıklayan bir cümle olmalıdır. Sorununuzun açıklaması, sorununuzun ne olduğunu ve çözümünüzün ne olduğunu açıklayan bir cümle olmalıdır.

### Sorunun Size atanmasını bekleyin

Sorununuzun birisi tarafından atanmasını bekleyin. Bu, sorununuzun birisi tarafından incelendiğini ve birisi tarafından çözüleceğini gösterir. Sorununuzun birisi tarafından atanmasını beklemek için birkaç gün bekleyin. Eğer birisi sorununuzu almadıysa, sorununuzu almak için bir yorum bırakın.

### Branch Oluşturun

Katkınız için bir branch oluşturun.

```bash:no-line-numbers
git checkout -b <branch_name> 
```

Branch adı `feature/<issue_number>-<issue_title>` olmalıdır.

## Düzenlemeleri Yapın

Düzenlemelerinizi yapın.

## Test Edin

Değişikliklerinizin hiçbir şeyi bozmadığından emin olmak için testleri çalıştırın.

```bash:no-line-numbers
npm test
```

Değişikliğiniz birim testi gerektiriyorsa, bunları testler klasörü altına yazın ve testlerin geçtiğinden emin olun.

## Değişiklikleri Commitleyin

Değişikliklerinizi commitleyin.

```bash:no-line-numbers
git commit -m "<commit_message>"
```

Commit mesajı `feat: <issue_number> <issue_title>` olmalıdır. Örneğin, `feat: 1 Add a new feature`.

ya da `fix: <issue_number> <issue_title>` olmalıdır. Örneğin, `fix: 1 Fix a bug`.

## Değişiklikleri Pushlayın

Değişikliklerinizi pushlayın.

```bash:no-line-numbers
git push origin <branch_name>
```

## Pull Request Oluşturun

GitHub'da bir pull request oluşturun. Pull request'inizde, sorununuzun ne olduğunu ve çözümünüzün ne olduğunu açıklayan bir cümle olmalıdır.

## Değerlendirme Süreci

Pull requestiniz değerlendirilir ve birisi tarafından birleştirilir. Değerlendirme süreci, bir sorununuzun birisi tarafından alındığından beri birkaç gün sürer. Eğer birisi pull requestinizi değerlendirmek için birkaç gün beklediyseniz, bir yorum bırakın.

Herhangi bir sorunuz varsa, sorunla ilgili bir yorum bırakmaktan veya istek almaktan çekinmeyin.