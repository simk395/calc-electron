let buttons = document.querySelector("#buttons"),
    str = "",
    valArr = [];

//handles numeric and operational buttons
let buttonHandler = (e) => {
    let value = document.querySelector(".value");
    switch(e.target.value){
        //clear
        case "C": 
            str = "";
            value.innerText = 0; 
            break;
        
        case "+":
            valArr.push(str)
            valArr.push("+")
            str = ''
        //Use eval() for str to get value
        case "=":
            if(str[str.length - 1].match(/[/+-/*]/g)){
                str = str.substring(0, str.length - 1);
                value.innerText = Math.round(eval(str) *100000)/100000;  
            } else{
                value.innerText = Math.round(eval(str) *100000)/100000;
            }; 
            str = value.innerText;
            break;
        //fix edge case if click on margin
        case undefined: break;
        //display values on screen
        default: 
            if( e.target.classList.contains("ops") 
                && str[str.length - 1].match(/[/+-/*()%]/g)){
               str = str.substring(0, str.length - 1) + e.target.value;
               value.innerText = str;
               console.log("hello")
            }else{
                str += e.target.value;
                value.innerText = str;
            }
    }
}

buttons.addEventListener("click", buttonHandler);


// str[str.length - 1].match(/[/+-/*()]/g