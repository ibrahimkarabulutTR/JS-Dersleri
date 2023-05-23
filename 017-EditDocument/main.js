let leadP = document.querySelector('p')
console.log(leadP)

leadP.innerText="lead paragraf classı"

let leadAllP = document.querySelectorAll('p')
leadAllP.forEach(p => {
	console.log(p.innerText)
})



let icerik = document.querySelector('.icerik')
console.log(icerik)
console.log(icerik)
icerik.innerHTML+="<div class='icerik makale'>innerHTML sınama kodudur</div>"
icerik.innerText+="bu kod innerText sınama kodudur"

//EZ cümle innerhtml ile yazılırsa html kodu yazar gibi algılar ve işletir
//EZ cümle innertext ile yazılırsa kod dahi olsa makale olarak bastırır
//ve son olarak innerhtml ve innertext in nerede bastırıldığı önemli değil
//en son innertext çalıştırılırsa seçilen tag içindeki herşey text haline gelir



//VİRÜS KODU
// let icerik = document.querySelector('html')
// icerik.innerText=icerik.innerHTML