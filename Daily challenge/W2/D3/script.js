    
    let arr = [5,4,9,1,7,0,2,6,3,8];
    console.log(arr);

    let x=arr;
    let n = x.length;
    let c;//temporary var
    //    for(let i=0;i<n;i++){
          for (let j=0; j < n; j++){
              if (x[j] < x[j+1]){
                 c = x[j];
                 x[j] = x[j+1];
                 x[j+1] = c;
              }
          }
    //   }
    console.log(x)

    //let newarray=x.toString()
    //console.log("This is a string "+newarray)
    //console.log(x.join())
    //console.log(x.join("+"))
    //console.log(x.join(" "))


    