var homeBar = document.querySelector(".landSearch");
homeBar.addEventListener("focus", function(){
	homeBar.classList.toggle("searchClicked");
});
homeBar.addEventListener("blur", function(){
	homeBar.classList.toggle("searchClicked");
});

var menuOpen = document.querySelectorAll(".redirect");

for(i=0; i<menuOpen.length; i++){
menuOpen[i].addEventListener("mouseover", function(){
	this.classList.toggle("onHover");
});
menuOpen[i].addEventListener("mouseleave", function(){
	this.classList.toggle("onHover");
});
}

var signUpButton = document.querySelector(".mainPageSignUp");
signUpButton.addEventListener("mouseover", function(){
	this.classList.toggle("signUpHover");
});
signUpButton.addEventListener("mouseleave", function(){
	this.classList.toggle("signUpHover");
});
signUpButton.addEventListener("focus", function(){
	this.classList.toggle("signUpFocus");
});
signUpButton.addEventListener("blur", function(){
	this.classList.toggle("signUpFocus");
});

 var categoryButton = document.querySelectorAll(".categoryButtons")

 for(z=0; z<categoryButton.length; z++){
 categoryButton[z].addEventListener("focus", function(){
 	this.classList.toggle("subjectFocus");
 });
 }
 for(z=0; z<categoryButton.length; z++){
 categoryButton[z].addEventListener("blur", function(){
 	this.classList.toggle("subjectFocus");
 });
 }