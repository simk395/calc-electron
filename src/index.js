import Operations from "./operations.js";

let buttons = document.querySelector("#buttons")
let valueArr = [];

let buttonHandler = (e) => {
    let value = document.querySelector(".value");
    switch(e.target.value){
        case "C": 
            valueArr = [];
            value.innerText = Operations.clear(); 
            break;
        case "+":
        default: 
            valueArr.push(e.target.value);
            value.innerText = valueArr.join('');
    }
    console.log(valueArr)
    // value.innerText = e.target.value;
    
}

buttons.addEventListener("click", buttonHandler);

//2 variables
//if operation is clicked on then do the operation and show result