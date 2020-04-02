console.log("Remember to use 'recframe()' function with strings as arguments-as many as you want!")
function recframe(){//transform arguments into array
	let array=[]	
	for (let i in arguments){
		xi= arguments[i];
		array.push(xi);//saved in array
	}
	//let array=["Hello","World","in","a","frame"]
	//n=array.length
	//console.log(n)//how many times to repeat process
	let sizearray=[]//building an array with the size of each string
	for (let i in array){
		xi=array[i].length//size of the strings
		//console.log(xi)
		sizearray.push(xi)
	}
	//console.log(sizearray)
	//console.log(Math.max.apply(null,sizearray))//max characters of the elements
	framesize=Math.max.apply(null,sizearray)+4//4=2 characters per side!

	let logo="*"
	let space=" "
	console.log(logo.repeat(framesize))
	for (let j in array){
		let linej
		linej=logo+space+array[j]+space.repeat((framesize-(sizearray[j]+3)))+logo//3 spaces already assigned
		console.log(linej)
	}	
	console.log(logo.repeat(framesize))
}
