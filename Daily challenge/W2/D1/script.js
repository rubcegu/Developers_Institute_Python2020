let array= ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);
//Remove the Banana from the array.
array.splice(0,1);
console.log(array);
//Sort the array in order
array.sort();
console.log(array);
//Put “Kiwi” at the end of the array.
array.push("Kiwi");
console.log(array);
//Remove “Apples” from the array.
array.splice(0,1);
console.log(array); //Blueberries,Oranges,Kiwi
//Sort the array in reverse order. (Not alphabetical, but reverse\
//the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
array.reverse();
console.log(array);//Kiwi,Oranges,Blueberries
//Exercise 2
let array2=["Banana", ["Apples", ["Oranges"],"Blueberries"]];
console.log(array2)//Banana,Apples,Oranges,Blueberries
//access “Oranges”
console.log(array2[1][1]);