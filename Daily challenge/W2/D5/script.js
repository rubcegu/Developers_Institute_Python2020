//DECLARATION
let x=prompt("How many Bottles of Beer do you want?")
let phrase0=" down, pass it around"
let phrase1=" bottles of beer on the wall"
let phrase2=" bottles of beer"
let phrase3=" down, pass them around"
let phrase4="Go to the store and buy some more"
let phrase5="Or let\'s take the remaining "
const border = new Array(40).join("=")

//EXECUTION
console.log(border)

for (let i = 0; i<x; i++) {
		let stock=x-i
		console.log(stock+phrase1)
		console.log(stock+phrase2)
		x=stock
		if(i==0){
			console.log("Take "+(i+1)+phrase0)	
		}else if(stock<=i){
			console.log(phrase4)
			console.log(phrase5+stock+phrase1)
		}else{
			console.log("Take "+(i+1)+phrase3)
		}
}
console.log(border)