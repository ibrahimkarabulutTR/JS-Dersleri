const box = document.querySelector('.box')
box.addEventListener('mousemove', e => {
  // console.log(e)
  // e.target.innerHTML= "X Ekseni: "+e.offsetX+"<br> Y Ekseni: "+ e.offsetY
})
document.addEventListener('wheel', e => {
  console.log(e)
})