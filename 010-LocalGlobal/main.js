// Global fonk. benzeri yapılarda ve dıışında kullanılabilir
let yas = 35;
console.log("Dışarıdaki yaş:",yas);
if(true){
		// Local bulunduğu fonk. benzeri yapıya özeldir dışarıda çağrılmaz var değişkeni hariç
		let yas = 26;
		console.log("İçerdeki yaş:",yas);
		var globalYas = 36;
}
console.log("İçerideki global yaş:",globalYas);