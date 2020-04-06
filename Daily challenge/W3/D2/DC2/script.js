//DECLARATIONS
let libButton = document.getElementById('lib-button');

//FUNCTIONS
let libIt = function() {
            	let storyDiv = document.getElementById("story");
            	storyDiv.innerHTML = randomphrase()
       		 };

let randomphrase= function(){
				let x = Math.floor((Math.random() /(.10) + 1));
				let nounitem= document.getElementById('noun').value;
				let adjitem= document.getElementById('adjective').value;
				let nameitem= document.getElementById('person').value;
				let phrase

				if(x<4){
					phrase="Today, I found "+nameitem+" playing with a "+adjitem+" "+nounitem
				}else if (x>=4&&x<7){
					phrase="So "+nameitem+", how's your "+adjitem+" "+nounitem
				}else{
					phrase="I need a "+nounitem+" for "+nameitem+". It's a "+adjitem+" present"
				}
				return phrase
}

//EXECUTION
libButton.addEventListener('click', libIt);

