# 🛒 React Checkout & Order Management App

Bu proje, **React**, **Redux Toolkit**, **React Router DOM** ve **Material UI (MUI)** kullanılarak geliştirilmiş, temel bir **alışveriş sipariş süreci** uygulamasıdır. Kullanıcı formu, sepet yönetimi, sipariş özeti ve tamamlanmış sipariş bildirimi gibi adımları içeren çok aşamalı bir kullanıcı deneyimi sunar.

## 🚀 Özellikler

- ✅ Çok aşamalı sipariş süreci (Stepper)
- 🧾 React Hook Form ile form kontrolü
- 🌍 Global state yönetimi (Redux Toolkit)
- 🧠 Async işlemler için `createAsyncThunk` kullanımı
- 🎨 MUI bileşenleriyle modern UI
- 🔀 React Router ile sayfa yönlendirme
- 📦 Dinamik ürün yönetimi (Sepet ekleme / çıkarma)

## 🖼️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|----------|----------|
| React    | UI oluşturma |
| Redux Toolkit | Global state ve async veri yönetimi |
| React Hook Form | Form yönetimi |
| React Router DOM | Sayfa yönlendirmeleri |
| Material UI (MUI) | Hazır bileşenler ve şık tasarım |
| Vite | Hızlı geliştirme sunucusu |

## 📁 Proje Yapısı

```text
store-ap/   React, Redux Toolkit ve Material UI tabanlı arayüz
store-api/  Express API ve ödeme işlemleri
```

## 🚀 Yerel Kurulum

### API

```bash
cd store-api
npm install
npm start
```

### Arayüz

```bash
cd store-ap
npm install
npm run dev
```

Ödeme sağlayıcısı ve JWT gibi gizli değerleri yerel ortam değişkenlerinde tutun; gerçek anahtarları repoya eklemeyin.

