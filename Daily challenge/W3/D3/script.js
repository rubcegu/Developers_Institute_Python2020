let input=document.getElementById("input")

input.addEventListener("keypress", function(event){
	//console.log(event.which)
	if (event.keyCode<65||event.keyCode>122||event.keyCode>90&&event.keyCode<97) {
		event.preventDefault();
	}
})