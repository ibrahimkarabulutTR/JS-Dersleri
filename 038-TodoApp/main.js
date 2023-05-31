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


var Global_Items = [];
const missionList = () => 
{
  var itemList = []
  for(let i=0;i<boxItem.length;i++)
  {
    itemList.push(boxItem[i])
  }
  return itemList;
}

Global_Items = missionList();

searchNew.addEventListener('keyup', e => {
  e.preventDefault();
  console.log(Global_Items)
  const newArea = Global_Items.filter(item => item.innerText.includes(`${e.target.value}`))
  // console.log(newArea)
  boxArea.innerHTML = newArea[0].outerHTML
})