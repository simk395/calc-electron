let buttons = document.querySelector("#buttons"),
    str = "",
    valArr = [],
    flag = false;

//handles numeric and operational buttons
let buttonHandler = (e) => {
    let display = document.querySelector(".display");
    let expression = document.querySelector(".expression");
    switch(e.target.value){
        //clear
        case "C": 
            str = "";
            valArr = [];
            expression.innerText = '';
            display.innerText = 0; 
            break;
        
        //stores square root of value into valArr and displays sqrt of 
        case "sqrt":
            if(!str){

            }
            if(!valArr.length) display.innerText = Math.sqrt(str);
            else {
                helperButton(e.target.value)
                expression.innerText = valArr.join('')
                display.innerText = valArr[valArr.length-1]
            }
            break;
        
        //fixes edge case of repeating zeros when display is 0
        case "0":
            if(str){
                display.innerText = str + 0;
                str += 0;
                break;
            }
            break;
        
        //fixes edge case of repeating decimals
        case ".":
            if(!str.includes(".")){
                display.innerText = str + ".";
                str += "."
                break;
            }
            break;

        //Use eval() for str to get value
        case "=":
            if(!str){
                valArr.pop()
            }
            let equation = valArr.join('') + str
            display.innerText = Math.round( eval(equation) * 10000 ) / 10000;
            expression.innerText = equation + "=";
            valArr = [];
            str = display.innerText;
            flag = true;
            break;

        //fixes edge case if click on margin
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
                display.innerText = str;
            }
    }
}

let helperButton = (val) => {
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

//case 2: when hitting sqrt after an ops
