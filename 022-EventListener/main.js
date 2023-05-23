const ekle = document.querySelector('#ekle')
const input = document.querySelector('input')

var li = document.querySelectorAll('li')

li.forEach(element => {
  element.addEventListener('click', e => {
    // console.log(e)
    // e.stopPropagation() bu kod çalıştırılırsa bunla aynı işlevde başka kodlar çalışmaz
    console.log(e.target, "stoppropagation active")
    // console.log("li etiketine tıklandı")
    // e.target.style.borderColor="red"
    // e.target.remove()
  })
})


const ul = document.querySelector('ul')
ul.addEventListener('click', e => {
  console.log(e.target)
  if(e.target.tagName == "LI") {
    e.target.remove()
  }
})

ekle.addEventListener('click', () => {
  // e.stopPropagation()
  // console.log(e.target, "deneme")
  // ul.innerHTML += "<li>Ekle</li>"
//   // ul.append(liTag)
  const liTag = document.createElement('li')
  liTag.textContent = "Eklendi"
  ul.prepend(liTag)
  // ul.append(liTag)
})

// const ul = document.querySelector('ul')
// ekle.addEventListener('click', () => {
//   const liTag = document.createElement('li')
//   liTag.textContent = input.value
//   // ul.append(liTag)
//   ul.prepend(liTag)
//   li = document.querySelectorAll('li')
//   li.forEach(element => {
//     element.addEventListener('click', e => {
//       e.target.remove()
//     })
//   })
// })


