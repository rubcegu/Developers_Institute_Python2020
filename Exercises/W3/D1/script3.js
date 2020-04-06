let x = document.getElementById("btn")
let y = document.getElementById("div")
let z = document.getElementById("section")
let a= document.getElementById("jsstyle")

       x.addEventListener("click", XRespondClick); 
       y.addEventListener("click", YRespondClick); 
       z.addEventListener("click", ZRespondClick); 
       a.addEventListener("click", ARespondClick);

       function XRespondClick(e) { 
           alert("BTN is Clicked")
          e.stopPropagation()

       }    

       function YRespondClick(e) { 
           alert("DIV is Clicked")
       }    

        function ZRespondClick(e) { 
           alert("SECTION is Clicked")
       }  

        function ARespondClick(e) { 
           alert("STYLE is Clicked")
            e.target.style.backgroundColor= "green";
            e.target.style.color= "blue";
          e.stopPropagation()
       }  

        //Result if I click on the button
        // Alert : BTN is Clicked
        // --> The bubbling stopped