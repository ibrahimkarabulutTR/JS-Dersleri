// Genel değişken kullanımı için
// Lokal Global farkı yoktur
// Değişken sonradan değiştirilebilir
var ad = 'ibrahim'
ad = 'Halil İbrahim'

// Lokal Global farkı vardır
// Değişken sonradan değiştirilebilir
let soyad = 'Karabulut'
soyad = 'Blackcloud'

// Lokal Global farkı vardır
// Degğişken sonradan değiştirilemez
const dogumTarihi = 1999

// Çoklu değişken basımı için
let lise = true,
  universite = true

// 1.Değişken basma yöntemi
console.log('Merhaba benim adım '+ad+' Soyadım '+soyad+' Dogum Yılım: '+dogumTarihi)
// 2.Template string yöntemi
console.log(`Merhaba benim adım ${ad} Soyadım ${soyad} Dogum Yılım: ${dogumTarihi}`)

// Undefined yani tanımlanmamış
let yas;
console.log(yas);
console.log(yas+=5);

// Null yani içi boş
let ad = null;
console.log(ad);
console.log(ad+=5);