var menuOpen = document.querySelectorAll(".redirect");

for(i=0; i<menuOpen.length; i++){
menuOpen[i].addEventListener("mouseover", function(){
	this.classList.toggle("onHover");
});
menuOpen[i].addEventListener("mouseleave", function(){
	this.classList.toggle("onHover");
});
}