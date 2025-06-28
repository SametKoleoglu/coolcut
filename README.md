# CoolCut - Fotoğraf Kolaj Uygulaması

CoolCut, kullanıcıların fotoğraflarını kullanarak kolayca etkileyici kolajlar ve tasarımlar oluşturmasını sağlayan, React Native ile geliştirilmiş bir mobil uygulamadır.

 <!-- Not: Buraya uygulamanızın bir ekran görüntüsünü ekleyebilirsiniz. -->

## 🚀 Temel Özellikler

- **Çeşitli Izgara (Grid) Düzenleri:** Farklı sayılarda ve şekillerde (kare, kalp, daire vb.) fotoğraflar için önceden tanımlanmış kolaj düzenleri sunar.
- **Şablonlar:** "Doğum Günü", "Bahar Hikayesi" gibi farklı temalarda hazır şablonlar içerir.
- **Görsel Seçme ve Kırpma:** Kullanıcılar galerilerinden fotoğraf seçebilir ve bu fotoğrafları serbestçe veya belirli en-boy oranlarına (1:1, 4:5, 9:16 vb.) göre kırpabilirler.
- **Kolajı Kaydetme:** `react-native-view-shot` kullanılarak oluşturulan kolajlar yüksek kalitede cihazın galerisine kaydedilebilir.
- **Kullanıcı Dostu Arayüz:** Sekmeli (Tab) navigasyon yapısı sayesinde ana sayfa, yeni oluşturma ve çalışmalarım arasında kolayca geçiş imkanı sunar.

## 🛠️ Kullanılan Teknolojiler ve Kütüphaneler

Bu proje, modern ve güçlü teknolojiler kullanılarak geliştirilmiştir:

- **Platform:** React Native (Expo)
- **Dil:** TypeScript
- **Navigasyon:** React Navigation (Bottom Tabs ve Native Stack)
- **Görsel İşlemleri:**
  - `expo-image-picker`: Cihaz galerisinden görsel seçmek için.
  - `expo-media-library`: Oluşturulan kolajları galeriye kaydetmek için.
  - `react-native-view-shot`: React bileşenlerini (kolaj görünümünü) resim olarak yakalamak için.
- **UI Kütüphaneleri:**
  - `@expo/vector-icons`: İkon kullanımı için.
  - `react-native-safe-area-context`: Ekranın güvenli alanlarına uyum sağlamak için.

## 📂 Proje Yapısı

Projenin kaynak kodları `src` klasörü altında modüler bir yapıda organize edilmiştir:

```
coolcut/
├── src/
│   ├── components/       # Tekrar kullanılabilir UI bileşenleri (Header, Grid, Tool vb.)
│   │   ├── collage/
│   │   ├── global/
│   │   └── home/
│   ├── constants/        # Uygulama genelindeki sabitler (renkler, düzenler, ikonlar)
│   ├── navigation/       # Navigasyon yapısı (Tab ve Stack Navigator'lar)
│   ├── screens/          # Uygulama ekranları (Home, Collage, Create vb.)
│   └── types/            # TypeScript tip tanımlamaları
├── App.tsx               # Ana uygulama bileşeni
└── package.json          # Proje bağımlılıkları ve script'leri
```

## 🏁 Başlarken

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Gereksinimler

- Node.js (LTS versiyonu önerilir)
- Yarn veya npm
- Mobil cihazınızda Expo Go uygulaması

### Kurulum

1.  **Projeyi klonlayın:**
    ```bash
    git clone https://github.com/sametkoleoglu/coolcut.git
    cd coolcut
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Uygulamayı başlatın:**
    ```bash
    npm start
    # veya
    expo start
    ```

4.  Terminalde görünen QR kodu Expo Go uygulaması ile taratarak uygulamayı cihazınızda açabilirsiniz.

## 📜 Mevcut Script'ler

`package.json` dosyasında aşağıdaki script'ler mevcuttur:

- `npm start`: Geliştirme sunucusunu başlatır ve Expo Dev Tools'u açar.
- `npm run android`: Uygulamayı bağlı bir Android cihazda veya emülatörde çalıştırır.
- `npm run ios`: Uygulamayı bir iOS simülatöründe çalıştırır (sadece macOS'te).
- `npm run web`: Uygulamanın web versiyonunu başlatır.

## 📄 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.