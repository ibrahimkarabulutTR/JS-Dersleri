let lead = document.getElementsByTagName('p')
console.log(lead)

let wrapper = document.getElementsByClassName('wrapper')
console.log(wrapper)

for (var i = 0; i < wrapper.length; i++) {
	console.log(wrapper[i].innerHTML);
}

let container = document.getElementById('container')
console.log(container)
