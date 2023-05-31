const boxArea = document.querySelector('.item-area')
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
  missionList()
})


var itemList = []
const missionList = () => {
  var newList = []
  for(let i=0;i<boxItem.length;i++){
    newList.push(boxItem[i])
  }
  itemList = newList
}
missionList();

searchNew.addEventListener('keyup', e => {
  e.preventDefault();
  console.log(itemList)
  const newArea = itemList.filter(item => item.innerText.includes(`${e.target.value}`))
  boxArea.innerHTML = newArea[0].outerHTML
  if(e.target.value == '') { 
    let fullList
    for(let i=0;i<itemList.length;i++) {
      fullList += itemList[i].outerHTML
    }
    boxArea.innerHTML = fullList
  }
})