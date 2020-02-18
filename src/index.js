let buttons = document.querySelector("#buttons"),
    str = "",
    valArr = [],
    flag = false;

const operations = {
    plus: () => {
        valArr.push(str, "+");
        str = '';
        flag = true;
    },
    minus: () => {
        valArr.push(str, "-");
        str = '';
        flag = true;
    },
    divide: () => {
        valArr.push(str, "/");
        str = '';
        flag = true;
    },
    multiply: () => {
        valArr.push(str, "*");
        str = '';
        flag = true;
    },
    modular: () => {
        valArr.push(str, "%");
        str = '';
        flag = true;
    },
    sqrt: () => {
        valArr.push(Math.sqrt(str));
        str = '';
        flag = true;
    }
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
            break;

        case "-":
            operations.minus()
            break;

        case "*":
            operations.multiply()
            break;

        case "/":
            operations.divide()
            break;

        case "%":
            operations.modular()
            break;

        case "sqrt":
            if(!valArr.length) value.innerText = Math.sqrt(str);
            else {
                operations.sqrt();
                value.innerText = valArr[valArr.length-1]
            }
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
            console.log("str:", str, "innervalue:", value.innerText)
            
    }
}

buttons.addEventListener("click", buttonHandler);
