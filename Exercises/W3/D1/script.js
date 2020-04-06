let tb1 = document.createElement('table');
  tb1.setAttribute('id', 'sampletable');
	document.getElementsByTagName('body')[0].appendChild(tb1);

function insert(arg,i){
	let tri=document.createElement("tr");
	document.getElementById("sampletable").appendChild(tr1);

	let tdi=document.createElement("td");
		tdi.innerText="Row1 cell1";
	let tdi=document.createElement("td");
		tdi.innerText="Row1 cell2";

	document.getElementById("sampletable").lastChild.appendChild(tdi)
	document.getElementById("sampletable").lastChild.appendChild(tdi)
}