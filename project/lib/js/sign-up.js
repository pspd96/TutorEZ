var menuOpen = document.querySelectorAll(".redirect");

for(i=0; i<menuOpen.length; i++){
menuOpen[i].addEventListener("mouseover", function(){
	this.classList.toggle("onHover");
});
menuOpen[i].addEventListener("mouseleave", function(){
	this.classList.toggle("onHover");
});
}

var submitButtonjs = document.querySelectorAll(".submitButton");

for(i=0; i<submitButtonjs.length; i++){
submitButtonjs[i].addEventListener("mouseover", function(){
	this.classList.toggle("submitHover");
});
submitButtonjs[i].addEventListener("mouseleave", function(){
	this.classList.toggle("submitHover");
});
submitButtonjs[i].addEventListener("focus", function(){
	this.classList.toggle("submitFocus");
});
submitButtonjs[i].addEventListener("blur", function(){
	this.classList.toggle("submitFocus");
});
}

var textBox = document.querySelectorAll(".textFields");

for(i=0; i<textBox.length; i++){
textBox[i].addEventListener("focus", function(){
	this.classList.toggle("textFieldFocus");
});
textBox[i].addEventListener("blur", function(){
	this.classList.toggle("textFieldFocus");
});
}