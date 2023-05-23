// FOR
// değişken, değişken koşulu, değişken görevi
for(let x=0; x<10; x++){
	console.log(x);
}

let isimler = ["Ahmet", "Mehmet", "Mustafa"];
for(let y=0; y<isimler.length; y++){
	console.log(isimler[y]);
}
console.log("Dizi döngüsü bitti.");

for(let y=0; y<isimler.length; y++){
	document.write(`<h3>${isimler[y]}</h3><br>`);
}


//WHILE
let a = 0;
// Koşul ve görevi
while(a<10){
		console.log(a);
		a++;
}

let y=0; 
while(y<isimler.length){
		console.log(isimler[y]);
		y++;
}
console.log("Dizi döngüsü bitti.");

let z=1;
while(z<=isimler.length){
		document.write(`<h${z}>${z--, isimler[z]}</h${z++, z}>`);
		z++;
}


//DO-WHILE
let b = 0;
// Görevi
do{
		console.log(b);
		b++;
}while(b<10); // Koşulu
let c=0; 
do{
		console.log(isimler[c]);
		c++;
}while(y<isimler.length)
console.log("Dizi döngüsü bitti.");

let d=1;
do{
		document.write(`<h${d}>${d--, isimler[d]}</h${d++, d}>`);
		d++;
}while(d<=isimler.length)