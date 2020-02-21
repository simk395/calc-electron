let buttons = document.querySelector("#buttons"),
    val = "",
    valArr = [],
    flag = false;

//handles numeric and operational buttons
let buttonHandler = (e) => {
    let display = document.querySelector(".display"),
        expression = document.querySelector(".expression");
    switch(e.target.value){
        //clear
        case "C": 
            val = "";
            valArr = [];
            expression.innerText = '';
            display.innerText = 0; 
            break;
        
        //stores square root of value into valArr and displays sqrt of 
        case "sqrt":
            if(!val){
                break;
            }
            //if case is to make value not show expression if its only 1 value. ex. sqrt(4) = 2 will not show the expression at the top
            if(valArr.length === 0){
                display.innerText = Math.sqrt(val);
                helperButton(e.target.value)
            } 
            else {
                display.innerText = Math.sqrt(val)
                helperButton(e.target.value)
                expression.innerText = valArr.join('')
            }
            break;
        
        //fixes edge case of repeating zeros when display is 0
        case "0":
            if(val){
                display.innerText = val + 0;
                val += 0;
                break;
            }
            break;
        
        //fixes edge case of repeating decimals
        case ".":
            if(!val.includes(".")){
                display.innerText = val + ".";
                val += "."
                break;
            }
            break;

        //Use eval() for val to get value
        case "=":
            if(!val){
                valArr.pop()
            }
            if(valArr.length === 0){
                break
            }
            let equation = valArr.join('') + val
            display.innerText = Math.round( eval(equation) * 10000 ) / 10000;
            expression.innerText = equation + "=";
            valArr = [];
            val = display.innerText;
            flag = true;
            break;

        //fixes edge case if click on margin
        case undefined: break;

        //display values on screen
        default: 
            if(e.target.classList.contains("ops")){
                helperButton(e.target.value)
                let arr = [...valArr];
                arr.pop();
                expression.innerText = valArr.join('')
                display.innerText = eval(arr.join(''))
            }else{
                if(flag){
                    val = ''
                    flag = false;
                }
                val += e.target.value;
                display.innerText = val;
            }
    }
}

let helperButton = (operator) => {
    if( operator === "sqrt") {
        valArr.push(Math.sqrt(val), '');
        val = '';
        return;
    }
    if(!val && valArr.length > 0){
        valArr.pop();
        valArr.push(operator);
        return;
    } else if (!val) {
         return
    }
    valArr.push(val, operator);
    val = '';
}

buttons.addEventListener("click", buttonHandler);
