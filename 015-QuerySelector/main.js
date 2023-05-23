let leadP = document.querySelector('div.lead')
let wrapper = document.querySelector('.wrapper')
let container = document.querySelector('#container')

leadP.innerHTML+='Bu paragraf lead paragrafıdır'

//Seçtiğin tagı içindekiler ile bastırır
console.log(leadP)

let allQuery = document.querySelectorAll('div')
// console.log(allQuery)
// console.log(allQuery[1])


allQuery.forEach(print=>{
	console.log(print)
})