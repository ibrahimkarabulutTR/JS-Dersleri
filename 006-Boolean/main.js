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
// Değerlerin türü dahil aynı mı
console.log(yas === "25"); 
// Ya değer aynı tür farklı, Ya değer farklı tür aynı
console.log(yas !== "25");
console.log(yas !== 24); 

let ad = "Ahmet";
console.log(ad == "Ahmet");
console.log(ad == "ahmet");
console.log(ad < "ahmet");
console.log(ad > "Mahmut");

let boolean = Boolean(""); // Boş olduğu için false
let boolean1 = Boolean("a"); // Dolu olduğu için true
let boolean2 = Boolean(0); // 0 olduğu için false
let boolean3 = Boolean(1); // 1 olduğu için true
console.log(boolean,boolean1,boolean2,boolean3);