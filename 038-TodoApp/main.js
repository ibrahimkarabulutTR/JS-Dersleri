const boxArea = document.querySelector('.box-area')
const boxItem = document.querySelectorAll('.box-item')
const addNew = document.querySelector('.addNew')
const searchNew = document.querySelector('.searchNew')
const mission = document.querySelector('.mission')

boxArea.addEventListener('click',e => {
  if(e.target.nodeName == 'I') {
    e.target.parentElement.remove();
  }
})


addNew.addEventListener('submit', e => {
  e.preventDefault();
  let value = addNew.addto.value;
  const code = `<li class="box-item">${value} <i class="bi bi-trash del"></i></li>`
  boxArea.innerHTML += code;
})

searchNew.addEventListener('keyup', e => {
  e.preventDefault();
  let array = []
  for(let i=0;i<boxItem.length;i++) {
    array.push = boxItem[i]
  }
  console.log(array)
  let newList = array.filter((x, number) => searchNew.searchto.value == array[number])
  boxArea.innerHTML = newList
})

// for(let i=0;i<boxArea.children.length;i++){
//   console.log(boxArea.children[i].textContent)
// }