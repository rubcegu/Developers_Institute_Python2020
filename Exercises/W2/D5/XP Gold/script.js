let secret=prompt("What is your secret word?")
let secret_array=secret.split("")//the string to an array to use location
console.log(secret_array)
let display= new Array(secret_array.length+1).join("*")
console.log(display)
let display_array=display.split("")
console.log(display_array)
let errors=[]

for (let i=0;errors.length<10;i++){
	let tryi=prompt("Give me a letter")
	console.log(tryi)
		if(errors.indexOf(tryi)!=-1){
			tryi=prompt("another one")
			console.log(tryi)
		}else{
			console.log(tryi)
		}
	console.log(tryi)				
		if (secret_array.indexOf(tryi)!=-1){
			display_array[secret_array.indexOf(tryi)]=tryi//changing * for correct letter
			console.log(display_array)
		}else{
			errors.push[tryi]
			console.log(errors)
			console.log(errors.length)
		}
}
//EXECUTION 


