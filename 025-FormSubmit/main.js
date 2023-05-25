const signupForm = document.querySelector('#signupForm')
const printNick = document.querySelector('#printNick')
const input = document.querySelector('#exampleInputNick')
signupForm.addEventListener('submit', e => {
	e.preventDefault();
	//console.log(input.value)
	//console.log(signupForm.nickaddress.value)
	printNick.textContent = `Your nick is = ${signupForm.nickaddress.value}`
})