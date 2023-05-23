// const parent = document.querySelectorAll('section > *')

// parent.forEach(element => {
//   element.classList.add("denemeClass")
// })


// const sectionParent = document.querySelector('section')
// console.log(sectionParent.children)



// //birinci yöntem
// const secArray = []
// for(let i=0; i<sectionParent.children.length; i++) {
//   secArray.push(sectionParent.children[i])
// }
// for(let i=0; i<secArray.length; i++) {
//   secArray[i].classList.add("pushArrayClass")
// }




// Array.from(sectionParent.children).forEach(element => {
//   element.classList.add("foreachClass")
// })



// const childArray = Array.from(sectionParent.children)

// for(let i=0; i<childArray.length; i++) {
//   childArray[i].classList.add("forClass")
// }



const h1 = document.querySelector('h1')
console.log(h1.parentElement)
console.log(h1.parentElement.parentElement)
console.log(h1.nextElementSibling)
console.log(h1.previousElementSibling)