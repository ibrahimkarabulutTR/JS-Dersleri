const link = document.querySelector('a')
console.log(link.getAttribute('href'))

link.textContent+=" -> dönüştürüldü -> google link"
link.setAttribute('href','https://google.com')
console.log(link.getAttribute('href'))

console.log(link.getAttribute('class'))
link.setAttribute('class', 'google')
link.setAttribute('style', 'color:orange')
console.log(link.getAttribute('class'))

// const timeout = setTimeout(ourfunction, 5000)

// function ourfunction() {
//   const link = document.querySelector('a')
//   console.log(link.getAttribute('href'))

//   link.textContent+=" -> dönüştürüldü -> google link"
//   link.setAttribute('href','https://google.com')
//   console.log(link.getAttribute('href'))

//   console.log(link.getAttribute('class'))
//   link.setAttribute('class', 'google')
//   console.log(link.getAttribute('class'))
// }