let statement = "The food is not that bad";
let find_not= statement.indexOf("not");
let find_bad= statement.indexOf("bad");

if (find_not<find_bad && find_not!=-1){
	console.log(statement.substring(0,find_not)+"good")
} else {
	console.log(statement)
}