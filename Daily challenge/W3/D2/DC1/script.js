// DECLARATIONS
let img= document.getElementById("image")

//EXECUTION
img.addEventListener("mouseover", MouseOverResponse)
img.addEventListener("mousedown", MouseDownResponse)
img.addEventListener("dblclick", DblClickResponse)
img.addEventListener("wheel", WheelResponse)


//FUNCTIONS
function MouseOverResponse() { 
    img.style.height="150px"
     img.style.width="250px"
} 

function MouseDownResponse() { 
    img.style.height="550px"
    img.style.width="750px"
} 

function DblClickResponse() { 
	img.style.left = "200px"
} 

function WheelResponse() { 
	img.style.left = "0px"
} 
