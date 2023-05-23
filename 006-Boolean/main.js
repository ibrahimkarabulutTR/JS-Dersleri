/// Geriye True veya False döndüren değişken tipi
let cevap = true;
cevap = false;
console.log(cevap);

let email = "i.karrabulut@gmail.com";
// İçinde bu değer varmı diye sorar
let sorgu = email.includes("@");
console.log(sorgu);

let isimler = ["Ahmet", "Mehmet", "Mahmut"];
let sorgu2 = isimler.includes("A");
console.log(sorgu2);

// Koşul ifadeleri
let yas = 23;
console.log(yas == 23);
console.log(yas != 23);
console.log(yas < 23);
console.log(yas <= 23);
console.log(yas > 23);
console.log(yas >= 23);

let ad = "Ahmet";
console.log(ad == "Ahmet");
console.log(ad == "ahmet");
console.log(ad < "ahmet");
console.log(ad > "Mahmut");