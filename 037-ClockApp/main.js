const valuePrint = document.querySelector('.timer')

setInterval(() => {
  let now = new Date()
  valuePrint.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
},1000)