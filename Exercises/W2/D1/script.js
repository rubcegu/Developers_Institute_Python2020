let addressNumber = 117;
let addressStreet= "Aldama";
let country= "Mexico";

let global_address= addressNumber+" "+addressStreet+" "+"in"+" "+country;

console.log("I live in"+" "+global_address);

let birth=1987;
let future=2035;
let age=future-birth;

console.log("I will be"+" "+age+" in "+future);

//Display dog
let pets=["cats","dog","fish","rabbit","cow"];
console.log(pets[1]);


//Add to the array pets, the pet horse. Remove the pet rabbit
pets.push("horse");
console.log(pets);
pets.splice(3,1);
console.log(pets);

console.log(pets.length)