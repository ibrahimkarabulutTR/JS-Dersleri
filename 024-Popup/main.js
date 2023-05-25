const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
const popUp = document.querySelector('#pop-up')

btnOpen.addEventListener('click', () => {
  popUp.style.display="grid"
})
btnClose.addEventListener('click', () => {
  popUp.style.display="none"
})
popUp.addEventListener('click', (e) => {
  if(e.target.id === 'pop-up') {
    popUp.style.display="none"
  }
})