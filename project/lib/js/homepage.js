var homeBar = document.querySelector(".landSearch");
homeBar.addEventListener("focus", function(){
	//this.className += " searchClicked";
	homeBar.classList.toggle("searchClicked");
})
homeBar.addEventListener("blur", function(){
	homeBar.classList.toggle("searchClicked");
})
