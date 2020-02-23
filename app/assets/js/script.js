window.addEventListener("load", () => {

	let images = document.querySelectorAll('img');

	 images.forEach(element => {
	 	element.addEventListener('contextmenu', PrevDef);
	 	element.addEventListener('mousedown', PrevDef);
	 });

	function PrevDef(e) {
		e.preventDefault();
	}
	
})