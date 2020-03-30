//Exercise 1
let me=["my","favorite","color","is","blue"];
let ex1=me[0]+" "+me[1]+" "+me[2]+" "+me[3]+" "+me[4];
console.log(ex1);
//Mix Up
let str1 = "mix";
let str2=  "pod";
let new_str1 = str1.substring(0,2)+str2.substring(2);
let new_str2=  str2.substring(0,2)+str1.substring(2);
console.log(str1);
console.log(str2);
console.log(new_str2+" "+new_str1);
//Calculator
let first=prompt("Give me a number please");
let second=prompt("Give me a second number please");
let first_num=parseInt(first);
let second_num=parseInt(second);
let calc_sum=(first_num)+(second_num);
let calc_substract=first_num-second_num;
let calc_multiply=first_num*second_num;
let calc_div=first_num/second_num;
alert("The sum of the numbers is "+calc_sum);
alert("The difference of the numbers is "+calc_substract)
alert("The multiplication of the numbers is "+calc_multiply)
alert("The division of the numbers is "+calc_div)