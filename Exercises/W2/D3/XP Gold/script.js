//EXERCISE 1

let family= {
	members: 4,
	husband: "Peter",
	wife: "Mary",
	son: "Billy",
	daughter: "Anna",
	pets: false,
}

	for (i in family){
	console.log(i)
	}


	for (x in family){
	console.log(family[x])
	}

//EXERCISE 2

let building = {
    number_levels : 4,
    number_of_apt_by_level : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants : ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent:  {
        "Sarah": [3, 2000],
        "Dan":  [4, 1000],
        "David": [1, 10],
    },
}

//Display the number of levels in the building
for (i in building.number_of_apt_by_level){
	console.log(i)}

//Display how many apartments are on level 1 and 3. Do the sum of these apartments
let oneap= building.number_of_apt_by_level[1]
let threeap= building.number_of_apt_by_level[3]
let sumap=oneap+threeap

console.log("In level one there are "+oneap+" apartments")
console.log("In level three there are "+threeap+" apartments")
console.log("In level one & three there are "+sumap+" apartments")

//Display the name of the second tenant and the number of rooms he has in his apartment
let secondtenant=building.name_of_tenants[1];
let secondtenantrooms=building.number_of_rooms_and_rent[secondtenant][0]

console.log(secondtenant)
console.log(secondtenantrooms)

//Check if the rent of Sarah plus the rent David is bigger than the rent of Dan
let Sarahrent=building.number_of_rooms_and_rent["Sarah"][1] ;
console.log(Sarahrent);
let Davidrent=building.number_of_rooms_and_rent["David"][1];
console.log(Davidrent)
let Grouprent=Sarahrent+Davidrent
console.log(Grouprent)
let Danrent=building.number_of_rooms_and_rent["Dan"][1]
console.log(Danrent)
let Dannewrent=Danrent+(Grouprent-Danrent)
console.log(Dannewrent)


if (Grouprent>Danrent) {
	console.log("You should increase the rent of Dan to "+Dannewrent)
	building.number_of_rooms_and_rent["Dan"][1]=Dannewrent

}

console.log(building)

console.log("CHANGED!!")

//EXERCISE 3
let object1={
	fullName: "Fulano Perez",
	mass: 81,	//kg
	height: 1.73,	//cm
}

object1.bmi=object1.mass/(object1.height*object1.height)

let object2={
	fullName: "Sutano Perez",
	mass: 96,	//kg
	height: 1.81,	//cm
}

object2.bmi=object2.mass/(object2.height*object2.height)

function Comp(){
	let bmia=object1.bmi;
	let bmib=object2.bmi;
	let namea=object1.fullName;
	let nameb=object2.fullName;
 	if(bmia>bmib){
 		console.log(namea+" has the biggest BMI")
 		}else{ 	
 		console.log(nameb+" has the biggest BMI")
 		}
	}

Comp()
