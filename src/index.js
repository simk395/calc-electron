let buttons = document.querySelector("#buttons"),
    str = "",
    valArr = [],
    flag = false;

const operations = {
    plus: () => {
        valArr.push(str, "+");
        str = '';
    },
    minus: () => {
        valArr.push(str, "-");
        str = '';
    },
    divide: () => {
        valArr.push(str, "/");
        str = '';
    },
    multiply: () => {
        valArr.push(str, "*");
        str = '';
    },
    modular: () => {
        valArr.push(str, "%");
        str = '';
    },
}

//handles numeric and operational buttons
let buttonHandler = (e) => {
    let value = document.querySelector(".value");
    switch(e.target.value){
        //clear
        case "C": 
            str = "";
            valArr = [];
            value.innerText = 0; 
            break;
        
        case "+":
            operations.plus()
            value.innerText = 0;
            break;

        case "-":
            operations.minus()
            value.innerText = 0;
            break;

        case "*":
            operations.multiply()
            value.innerText = 0;
            break;

        case "/":
            operations.divide()
            value.innerText = 0;
            break;
        case "%":
            operations.modular()
            value.innerText = 0;
            break;

        //Use eval() for str to get value
        case "=":
            let expression = valArr.join('') + str
            value.innerText = Math.round( eval(expression) * 10000 ) / 10000;
            console.log(expression)
            valArr = [];
            str = value.innerText;
            flag = true;
            break;

        //fix edge case if click on margin
        case undefined: break;

        //display values on screen
        default: 
            if(flag){
                str = e.target.value;
                value.innerText = str;
                flag = false;
            }else{
                str += e.target.value;
                value.innerText = str;
            }
            
    }
}


buttons.addEventListener("click", buttonHandler);


// str[str.length - 1].match(/[/+-/*()]/g