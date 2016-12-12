

window.addEventListener("keydown", function(e){
	  var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
console.log(e.keyCode);
	if(!audio) return; //stops function if from running
	audio.currentTime = 0; //rewinds tp the start
	audio.play();

});

window.addEventListener("onClick", function(e){
	var x = $("button[data-key=\"" + e + "\"]").click();

	x.currentTime = 0;
	x.play();

});

