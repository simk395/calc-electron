let buttons = document.querySelector("#buttons"),
    string = "",
    clear = 0;

//handles numeric and operational buttons
let buttonHandler = (e) => {
    let value = document.querySelector(".value");
    switch(e.target.value){
        //clear
        case "C": 
            string = "";
            value.innerText = clear; 
            break;
        //Use eval() for string to get value
        case "=": value.innerText = eval(string);
        //fix edge case if click on margin
        case undefined: break;
        //display values on screen
        default: 
            string += e.target.value;
            value.innerText = string;
    }

}

buttons.addEventListener("click", buttonHandler);
