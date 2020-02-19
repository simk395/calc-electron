let buttons = document.querySelector("#buttons"),
    str = "",
    valArr = [],
    flag = false;

//handles numeric and operational buttons
let buttonHandler = (e) => {
    let value = document.querySelector(".value");
    let expression = document.querySelector(".expression");
    switch(e.target.value){
        //clear
        case "C": 
            str = "";
            valArr = [];
            expression.innerText = '';
            value.innerText = 0; 
            break;
        
        case "sqrt":
            if(!valArr.length) value.innerText = Math.sqrt(str);
            else {
                helperButton(e.target.value)
                expression.innerText = valArr.join('')
                value.innerText = valArr[valArr.length-1]
            }
            break;

        //Use eval() for str to get value
        case "=":
            let equation = valArr.join('') + str
            value.innerText = Math.round( eval(equation) * 10000 ) / 10000;
            expression.innerText = equation + "=";
            valArr = [];
            str = value.innerText;
            flag = true;
            break;

        //fix edge case if click on margin
        case undefined: break;

        //display values on screen
        default: 
            if(e.target.classList.contains("ops")){
                helperButton(e.target.value)
                console.log(valArr)
            }else{
                if(flag){
                    str = ''
                    flag = false;
                }
                str += e.target.value;
                value.innerText = str;
            }
    }
}

let helperButton = (val) => {
    let lastIndex = valArr[valArr.length - 1]
    if( val === "sqrt") {
        valArr.push(Math.sqrt(str));
        str = '';
        return;
    }
    if(!str && valArr.length > 0){
        valArr.pop();
        valArr.push(val);
        return;
    } else if (!str) {
         return
    }
    valArr.push(str, val);
    str = '';
}

buttons.addEventListener("click", buttonHandler);

//case 1: when ops is just clicked
//case 2: when hitting sqrt after an ops
