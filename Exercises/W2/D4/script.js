
function myAge(age=1){
	let mom= 2*age 
	let dad= 1.2*mom
	console.log("My mum is "+mom+" and my dad is "+dad.toFixed())
}

myAge(33)

function mynewAge(myage){
	let newmom= 2*myage 
	return newmom
}

let mommy=mynewAge(25)
console.log(mommy)