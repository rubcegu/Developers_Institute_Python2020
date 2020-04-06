//DECLARATIONS
let allbooks=[
	{
		title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
		author: "Steven D. Levitt & Stephen J. Dubner",
		img: "https://upload.wikimedia.org/wikipedia/en/6/63/Freakonomics.jpg",
		alreadyRead: true
	},
	{
		title: "Nudge: Improving Decisions About Health, Wealth, and Happiness",
		author: "Richard H. Thale & Cass R. Sunstein",
		img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Nudge-cover.jpg",
		alreadyRead: false
	}
]

//INSERTING TABLE!!
let tb1 = document.createElement('table');
  tb1.style.width = '100%';
  tb1.setAttribute('id', 'tableid');
	document.getElementsByTagName('body')[0].appendChild(tb1);

//EXECUTION
allbooks.forEach(booklist);

//FUNCTIONS
function booklist(arg,i){
	let details1=allbooks[i]["title"]+" written by "+allbooks[i]["author"];
	let details2=allbooks[i]["alreadyRead"];
	let cover=allbooks[i]["img"];

	let tr1=document.createElement("tr");
	let th1=document.createElement("th");
		th1.innerText="Book";
	let th2=document.createElement("th");
		th2.innerText="Details";//good

		document.getElementById("tableid").appendChild(tr1);
		document.getElementById("tableid").lastChild.appendChild(th1);
		document.getElementById("tableid").lastChild.appendChild(th2);

	let tr2=document.createElement("tr");
	let td1=document.createElement("td");
		td1.setAttribute("rowspan",2);
	let img=document.createElement("img");
		img.setAttribute("src", cover);
		img.setAttribute("style", "width:100px");
		td1.appendChild(img);
	let td2=document.createElement("td");
		td2.innerText=details1;

		document.getElementById("tableid").appendChild(tr2);
		document.getElementById("tableid").lastChild.appendChild(td1);
		document.getElementById("tableid").lastChild.appendChild(td2);

	let tr3=document.createElement("tr");
	let td3=document.createElement("td");
		td3.innerText=details2;
		if(details2){
			td3.setAttribute("style","color:red","font-weight:bold")
			td3.innerText="Done"
		} else{
			//td3.setAttribute("style","color:black","font-weight:normal")
			td3.innerText="Pending"
		};

		document.getElementById("tableid").appendChild(tr3);
		document.getElementById("tableid").lastChild.appendChild(td3);
}