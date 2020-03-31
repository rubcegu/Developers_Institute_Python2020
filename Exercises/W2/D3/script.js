let object={
	username: "Person",
	password: "pwperson",
}

console.log(object)

let database=[object]
console.log(database)

let newsfeed=[
	{
	username: "Person1",
	timeline: "EUR",
	},
	{
	username: "Person2",
	timeline: "AUS",
	},
	{
	username: "Person3",
	timeline: "US",
	}
	]

console.log(newsfeed)

//Exercise 2

let i;
for (i = 0; i < 16; i++) {
  let even=i%2;
  if (even==0) {
  	console.log(i + " is even")
  } else{
  	console.log(i + " is odd")
  }
  ;
}

let x;
let person = {
fname:"John", 
lname:"Doe", 
age:25,
friends:["Lea", "Joanna", "Mark"]};
for (let x in person) {
  console.log(person[x]) // John Doe 25
}
for (let x of person[friends]){
	console.log(person[x])
}