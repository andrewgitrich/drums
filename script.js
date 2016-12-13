

window.addEventListener("keydown", function(e){
	var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
	//stops function if from running
	if(!audio) return; 
	//rewinds tp the start
	audio.currentTime = 0; 
	audio.play();

});






var button = document.querySelectorAll("button");

//create an event listener on all buttons
for(var i = 0; i < button.length; i++){
	button[i].addEventListener("click", function(){
		var x =this.getAttribute("data-key")
		console.log(x);
		var audio = document.querySelector("audio[data-key=\"" + x + "\"]")
	//rewinds tp the start
	audio.currentTime = 0; 
	audio.play();
	})
	
}
