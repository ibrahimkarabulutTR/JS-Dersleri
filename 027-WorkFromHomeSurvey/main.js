let form = document.querySelector('form')
let print = document.querySelector('#print')
let counter = 0;
form.addEventListener('submit', e => {
	e.preventDefault();
	const answerName = [form.verim.value, form.zaman.value, form.teknik.value, form.taslak.value]
	answerName.forEach((name) => {
		if(name === "true") {	
			counter += 1
		}
	})
	print.style.display="block"
	switch(counter){
		case 1:
			print.textContent = "Siz %25 işte çalışmak istiyorsunuz."
			break;
		case 2:
			print.textContent = "Siz 50% işte çalışmak istiyorsunuz."
			break;
		case 3:
			print.textContent = "Siz 75% işte çalışmak istiyorsunuz."
			break;
		case 4:
			print.textContent = "Siz 100% işte çalışmak istiyorsunuz."
			break;
		default:
			print.textContent = "İş sizin için uygun bir yer değil :D"
			break
	}
	counter = 0
})