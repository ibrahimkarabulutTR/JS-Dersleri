let not = "Günde "+1+" saat'ini ayır.   "

// Değerin içinde sorgumuz varmı diye sorar.
console.log(not.includes("saat"))

// Değerin uzunluğu.
console.log(not.length)

// Değer sorgu ile mi başladı.
console.log(not.startsWith("saat"))

// Değer sorgu ile mi bitti.
console.log(not.endsWith(" "))

// Değerin ilk nerede tanımlandığını söyler.
console.log(not.indexOf("a"))

// Değerin en son nerede tanımlandığını söyler.
console.log(not.lastIndexOf("a"))

// İstenilen yerde hangi değer olduğunu söyler.
console.log(not.charAt(8))

// Değer kullanılmaya nerede başladı.
console.log(not.search("saat"))

// Yazıyı kullanılan yazı biçimine göre düzenler.
console.log(not.toLowerCase(), not.toUpperCase())

// Yazıyı seçilen dilin harflerine göre düzenler.
console.log(not.toLocaleLowerCase('tr'), not.toLocaleUpperCase('tr'))

// Yazının kaçtan başlayıp kaça kadar seçeceğini belirler
console.log(not.substring(5,10))
console.log(not.slice(5,10))

// Yazının kaçtan başlayıp kaç adım ilerleyerek seçeceğini belirler
console.log(not.substr(5,10))

// Değerin içeriğini düzenler.
console.log(not.replace("saat'ini", "vaktini"))

// Değerin belli yerlerinde işlemler yapmanı sağlar.
// Tam tersi için join metodu kullanılır
const notArray = not.split(' ') // Boşluktan boşluğa kesip diziye atar
notArray.forEach(deger => console.log(deger))

// Değerin başındaki sonundaki gereksiz boşlukları siler
console.log(not.trim())

// Değeri birden fazla bastırma
console.log(not.repeat(2))

// Değeri string hale getirmek için
console.log(not.toString())

// Bir degiskenin değerini almak
console.log(not.valueOf())