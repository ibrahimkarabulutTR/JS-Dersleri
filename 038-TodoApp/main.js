const boxArea = document.querySelector('.item-area')
let boxItem = document.querySelectorAll('.box-item')
const addNew = document.querySelector('.addNew')
const searchNew = document.querySelector('.searchNew')
const mission = document.querySelector('.mission')

boxArea.addEventListener('click',e => {
  if(e.target.nodeName == 'I') {
    e.target.parentElement.remove();
  }
})

var itemList = []
const missionList = () => {
  var newList = []
  boxItem = document.querySelectorAll('.box-item')
  for(let i=0;i<boxItem.length;i++){
    newList.push(boxItem[i])
  }
  itemList = newList
}
missionList();

addNew.addEventListener('submit', e => {
  e.preventDefault();
  let value = addNew.addto.value;
  const code = `<li class="box-item">${value} <i class="bi bi-trash del"></i></li>`
  boxArea.innerHTML += code;
  missionList()
  addNew.addto.value = "";
})



searchNew.addEventListener('keyup', e => {
  e.preventDefault();
  let newArea = itemList.map(item => {
    item.style.display="none"
    if(item.innerText.includes(`${e.target.value}`)) {
      item.style.display="flex"
      return item
    }
    else return item
  })
  let itemler = newArea.forEach(e => e.target)
  newArea.innerHTML = itemler
})