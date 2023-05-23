function print() {
	console.log("merhaba dünya");
}
print();

//Parametreli fonksiyonlar
function bastir(ad, soyad) {
	document.write(ad, soyad);
}
bastir1("İbrahim", "Karabulut");

//Dolu parametreli fonksiyonlar
function bosBastir(ad = "Adınız", soyad = "Soyadınız") {
	document.write(`${ad} ${soyad}`);
}
bosBastir("İbrahim", "Karabulut");

//Fonksiyonlarda return
const topla = function(x, y) {
	return x+y;
}
console.log(topla(10, 25));

//Arrow function
const alan = (deger) => {
	console.log(deger);
}
alan("naber kanka");

const alan1 = deger => console.log(deger);
alan1("naber kankalar");

const alan2 = deger => deger;
console.log(alan2("deneme"));

const yerles = () => 'Naber Kankaaaaaaa';
console.log(yerles());

const fatura = function(urunler, vergi) {
	let toplam = 0;
	for(let i=0; i<urunler.length; i++) {
			toplam += urunler[i] + urunler[i] * vergi;
	}
	return toplam;
}
document.write(fatura([51, 23, 54], 0.18));

const ad = "muhammed";

//fonksiyon
const bastir1 = () => ad;
let adBastir = bastir1();
console.log(adBastir);

//metod
let adBuyukBastir = ad.toLocaleUpperCase();
console.log(adBuyukBastir);