var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var text = document.querySelector(".text");
var button = document.querySelector(".set");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click",function(){
	body.style.background = text.value;
})

text.addEventListener("keypress",function(event){
	if (event.keyCode === 13) {
		body.style.background = text.value;
	} 
})