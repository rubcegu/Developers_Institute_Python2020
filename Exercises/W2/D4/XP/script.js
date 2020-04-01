//Exercise 1
 function checkDriverAge(age){
	if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
	x="Sorry, you are too yound to drive this car. Powering off"//stores the result
	} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
	x="Powering On. Enjoy the ride!"//stores the result
	} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
	x="Congratulations on your first year of driving. Enjoy the ride!"//stores the result
	}
	return x//result without alert
 }

//Exercise 2

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
let basketarray=Object.keys(amazonBasket)
//console.log(basketarray) //Aready tested

let item=prompt("What item do you want?")

function checkBasket(item){
	let x =basketarray.indexOf(item)//looking in the array for match
	if(x==-1){//no match
	output="Sorry, your item is not in the basket"
	}else{//match
	output="Great, your item is in the basket"
	}
	return output
}
alert(checkBasket(item))


//Exercise 3

let shoppingList=["banana", "orange", "apple"]
let stock={
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}
let prices={
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

//making arrays of properties
let stockarray=Object.keys(stock)
//console.log(stockarray)
let pricesarray=Object.keys(prices)
//console.log(pricesarray)
//looking for prices

function myBill(){
let sum = 0
	for(let i in shoppingList){
	x=shoppingList[i]
	let boolp=pricesarray.indexOf(x)
		if (boolp==-1){
			p=0
		}else{
			p=prices[x]
		}
	sum=sum+p
	}
return sum
}
console.log(myBill())


