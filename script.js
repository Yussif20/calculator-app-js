// Light Dark Theme 
const themeToggle = document.querySelector(".themes__toggle");

const toggleDarkTheme =()=>themeToggle.classList.toggle("themes__toggle--isActive");
const toggleDarkThemeWithEnter = (event)=>{
    if(event.key ==="Enter"){
        toggleDarkTheme();
    }
}

themeToggle.addEventListener("click",toggleDarkTheme)
themeToggle.addEventListener("keypress",toggleDarkThemeWithEnter)


// Logic for calculator
let currentNumber = "";
let storedNumber = "";
let operation ="";

const result = document.querySelector(".calc__result")
const keyElements = document.querySelectorAll("[data-type]")

const updateUI =(value)=>{
    result.innerText = value ? value :"0";
}

const numberClickHandler = (value)=>{
        if(value === 0 && !currentNumber )return;
        if(value === "." && currentNumber.includes("."))return;
        currentNumber += value
        updateUI(currentNumber)
}
const resetHandler = ()=>{
    currentNumber = "";
    storedNumber = "";
    operation = "";
    updateUI(currentNumber);
}
const deleteHandler = ()=>{
    currentNumber = currentNumber === 0 || currentNumber.length === 1 ? "" : currentNumber.slice(0,currentNumber.length - 1);
    updateUI(currentNumber);
}
const executeOperation =()=>{
    if(currentNumber && storedNumber && operation){
        switch(operation){
            case "+":
                storedNumber = parseFloat(storedNumber) + parseFloat(currentNumber);
                break;
            case "-":
                storedNumber = parseFloat(storedNumber) - parseFloat(currentNumber);
                break;
            case "*":
                storedNumber = parseFloat(storedNumber) * parseFloat(currentNumber);
                break;
            case "/":
                storedNumber = parseFloat(storedNumber) / parseFloat(currentNumber);
                break;
        }
        currentNumber = "";
        updateUI(storedNumber);
    }
}
const operationButtonHandler =(operationValue)=>{
    if(!currentNumber && !storedNumber) return;

    if(currentNumber && !storedNumber){
        storedNumber =currentNumber;
        currentNumber = "";
        operation = operationValue
    }else if(storedNumber){
        operation =operationValue
        if(currentNumber)executeOperation()
    }
}


const keyElementHandler = (el)=>{
    el.addEventListener("keypress",(event)=>{
        console.log(event)
    })

    el.addEventListener("click",()=>{
        const type = el.dataset.type;
        const value = el.dataset.value;

        if(type === "number"){
            numberClickHandler(value)
        }else if( type === "operation"){
            switch(value){
                case "c":
                    resetHandler();
                    break;
                case "Backspace":
                    deleteHandler();
                    break;
                case "Enter":
                    executeOperation();
                    break;
                default:
                    operationButtonHandler(value);
          
            }
        }
    })
}

keyElements.forEach(keyElementHandler)

