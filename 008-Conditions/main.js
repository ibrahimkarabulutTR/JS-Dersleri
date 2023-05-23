let not = 85;

// Eğer
if(not >= 75){
		console.log("iyi");
}
// Yok eğer
else if(not >= 50){
		console.log("Orta");
}
// Değilse
else{
		console.log("Kötü");
}

let sonuc = (not => 75) ? "İyi" : (not >= 50) ? "Orta" : "Kötü";
console.log(sonuc);

let x = 10;
let y = 35;

// && iki koşul da aynı olmalı
// || bir doğru bir yanlış olmalı
if(x != 10 && y != 35){
		console.log("ikisi de farklı");
}else if(x != 10 || y != 25){
		console.log("biri yanlış")
}

console.log("18 - 25 aralığındaki sayılar")

// Break sonlandır, Continue atla
for(let z=0; z<50; z++){
		if(z<18){
				continue;
		}else if(z == 26){
				break;
		}else{
				console.log(z);
		}
}