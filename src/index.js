let buttons = document.querySelector("#buttons")

let buttonHandler = (e) => {
    let value = document.querySelector(".value")
    value.innerText = e.target.value
}

buttons.addEventListener("click", buttonHandler);

//2 variables
//if operation is clicked on then do the operation and show result