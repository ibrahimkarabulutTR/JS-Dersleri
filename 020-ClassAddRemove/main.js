// const div = document.querySelector('div')

// console.log(div.classList)

// div.classList.add("deneme")
// div.classList.remove("deneme")


const pTag = document.querySelectorAll('p')
let pArray = []
pTag.forEach((deneme) => {
	if(deneme.textContent.includes("error")) {
		// deneme.setAttribute("style","background:red;color:#fff")
		pArray = deneme.textContent.split(" ")
		for(let i=0; i<pArray.length; i++){
			console.log(pArray[i])
			if(pArray[i] == "error") {
				pArray[i]=`<span style='background:red;color:#fff'>${pArray[i]}</span>`
			}
		}
		deneme.innerHTML = pArray.join(" ")
	}
});
