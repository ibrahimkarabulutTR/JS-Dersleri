const signupForm = document.querySelector('#signupForm')
const printPass = document.querySelector('#printPass')
const input = document.querySelector('#exampleInputNick')

let passRequire = /^[a-z,A-Z,0-9,\,&,*,!,+]{8,16}$/

signupForm.addEventListener('keyup', e => {
	e.preventDefault();
	if(e.target.value.search(passRequire) >= 0) {
		printPass.textContent = `your password meet the required condition`
		input.style.boxShadow="0 0 0 3px rgba(0,150,0,.5)"
	} else {
		printPass.textContent = `your password does not meet the required condition`
		input.style.boxShadow="0 0 0 3px rgba(150,0,0,.5)"
	}
})