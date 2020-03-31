// EX1 Your favorite colors
let my_colors=["blue","green","purple","red","yellow"];


	for (x in my_colors){
			switch(x){
			case "0":
			place = "st";
			break;
			case "1":
			place = "nd";
			break;
			case "2":
			place = "rd";
			break;
			default:
			place = "th";
			break;
			}
		let number= parseInt(x)+1
		console.log("My "+number+place+" choice is "+my_colors[x])
	}

//EX2 
let num_ask=prompt("Give me a number please")

while (parseInt(num_ask)<10){	
	num_ask=prompt("Your number is too small. Give me another please")
};

//EX3
let people = ["Greg", "Mary", "Devon", "James"];
//1
for (let i of people){
	console.log (i);
}
//2
people.shift()
console.log(people)
