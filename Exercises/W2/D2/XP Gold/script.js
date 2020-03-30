//Exercise 1
let num=prompt("Give a number please");
math=num%2;
if(math==0){
	console.log(num+" is an even number")
} else {
	console.log(num+" is not a even number")
}
//Exercise 2
let x=24;
let y=15;
if(x>y){
	console.log(x)
} else {
	console.log(y)
}
// The World Translator : Use Switch Case
let language=prompt("Which language do you speak?");
switch (language) {
	case "French":
		console.log("Bonjour");
		break;
	case "English":
		console.log("Hello");
		break;
	case "Hebrew":
		console.log("Shalom");
		break;
	default:
		console.log(":)");
}
// Grade Assigner
let score=prompt("Give me your score");
if (score>90) {
	console.log("A")
} else if (score>80 && score<=90){
	console.log("B")
} else if (score>70 && score<=80){
	console.log("C")
} else{
	console.log("D")
}