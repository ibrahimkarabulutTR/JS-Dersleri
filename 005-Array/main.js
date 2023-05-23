let isimler = ["Ahmet", "Mehmet", "Mustafa"];
console.log(isimler[0], isimler[1], isimler[2]);

// Dizileri string hale getir aralarına - ekle ve değişkene bastır
let sırala = isimler.join(" - "); 
console.log(sırala);

// Değerin sırasını öğren
let sıra = isimler.indexOf("Ahmet");
console.log(sıra);

// Diziye eleman ekle
let ekle = isimler.concat("Mahmut");
console.log(ekle);

// Sondakini sil
ekle.pop(); 
console.log(ekle);

// Sona eleman ekle
ekle.push("Mahmut"); 
console.log(ekle);

// Dizinin başındaki elemanı sil
ekle.shift(); 
console.log(ekle);

// Dizinin başına eleman ekle
ekle.unshift("Ahmet");
console.log(ekle); 