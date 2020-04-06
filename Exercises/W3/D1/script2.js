let x = document.getElementById("btn")
let y = document.getElementById("btn1")
let z = document.getElementById("jsstyle")

        y.addEventListener("mouseover", RespondMouseOver);

        x.addEventListener("mouseover", RespondMouseOver); 

        z.addEventListener("click", RespondStyleit);

        function RespondMouseOver(e) { 
            console.log("e", e) 
            // all the properties of the event object
            console.log("My mouse is over the btn named" + e.target.innerHTML)
            console.log("e.type: ", e.type)
            // e.type: mouseover
            console.log("e.target: ", e.target)
            // e.target:  <button id=​"btn1">​Hey Hey​</button>​
        } 

        function RespondStyleit(e) { 
            alert("Click Style");
            console.log("e", e);
            e.target.style.backgroundColor= "green";
            e.target.style.color= "blue";
        } 
    